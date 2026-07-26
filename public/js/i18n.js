/**
 * Pool & Garden — client-side i18n runtime.
 * The site is server-rendered in Italian (default, SEO-friendly for the
 * primary market). This script swaps every [data-i18n] element to the
 * selected language instantly (no page reload) and persists the choice.
 */
(function () {
  "use strict";

  var DATA = window.__I18N__;
  if (!DATA) return;

  var STORAGE_KEY = "pg-lang";
  var DEFAULT = "it";

  function resolve(obj, path) {
    if (!path) return undefined;
    return path.split(".").reduce(function (acc, key) {
      if (acc == null) return undefined;
      return acc[key];
    }, obj);
  }

  function applyLang(lang) {
    if (!DATA[lang]) lang = DEFAULT;
    var dict = DATA[lang];

    document.documentElement.lang = lang;

    // textContent
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = resolve(dict, el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });
    // innerHTML (rich copy)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = resolve(dict, el.getAttribute("data-i18n-html"));
      if (v != null) el.innerHTML = v;
    });
    // attributes: "attr:key,attr2:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr")
        .split(",")
        .forEach(function (pair) {
          var parts = pair.split(":").map(function (s) {
            return s.trim();
          });
          if (parts.length !== 2) return;
          var v = resolve(dict, parts[1]);
          if (v != null) el.setAttribute(parts[0], v);
        });
    });

    // document title & meta description
    if (dict.meta) {
      if (dict.meta.title) document.title = dict.meta.title;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict.meta.description)
        metaDesc.setAttribute("content", dict.meta.description);
    }

    // language buttons active state
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", String(active));
      btn.classList.toggle("is-active", active);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.dispatchEvent(
      new CustomEvent("languagechange", { detail: { lang: lang } })
    );
  }

  function init() {
    var lang = DEFAULT;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && DATA[saved]) lang = saved;
    } catch (e) {}

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-btn"));
      });
    });

    applyLang(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // expose for the cookie banner / other scripts
  window.__pgI18n = { applyLang: applyLang };
})();
