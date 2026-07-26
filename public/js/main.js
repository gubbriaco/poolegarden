/**
 * Pool & Garden — main interactions (vanilla, no dependencies).
 * - Scroll reveal (IntersectionObserver)
 * - Mobile navigation toggle
 * - Service tabs (Construction / Maintenance)
 * - Gallery lightbox
 * - Cookie consent banner
 * - Contact & newsletter form handling (AJAX, graceful fallback)
 * - Dynamic copyright year + back-to-top
 */
(function () {
  "use strict";

  var ready = function (fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  };

  /* ---------- Scroll reveal ---------- */
  ready(function () {
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  });

  /* ---------- Mobile navigation ---------- */
  ready(function () {
    var toggle = document.querySelector("[data-menu-toggle]");
    var menu = document.querySelector("[data-mobile-menu]");
    var iconOpen = document.querySelector("[data-menu-icon-open]");
    var iconClose = document.querySelector("[data-menu-icon-close]");
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle("hidden", !open);
      menu.classList.toggle("flex", open);
      if (iconOpen) iconOpen.classList.toggle("hidden", open);
      if (iconClose) iconClose.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("overflow-hidden", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(menu.classList.contains("hidden"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setOpen(false);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  });

  /* ---------- Service tabs ---------- */
  ready(function () {
    document.querySelectorAll("[data-tabs]").forEach(function (group) {
      var buttons = group.querySelectorAll("[data-tab-btn]");
      var panels = group.querySelectorAll("[data-tab-panel]");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = btn.getAttribute("data-tab-btn");
          buttons.forEach(function (b) {
            var on = b === btn;
            b.setAttribute("aria-selected", String(on));
            b.classList.toggle("is-active", on);
          });
          panels.forEach(function (panel) {
            var on = panel.getAttribute("data-tab-panel") === target;
            panel.hidden = !on;
          });
        });
      });
    });
  });

  /* ---------- Gallery lightbox ---------- */
  ready(function () {
    var triggers = document.querySelectorAll("[data-lightbox-trigger]");
    if (!triggers.length) return;

    var overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 z-[120] hidden items-center justify-center bg-ocean-950/90 p-4 backdrop-blur-sm";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<button type="button" aria-label="Close" class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" data-lb-close>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<img alt="" class="max-h-[85vh] max-w-full rounded-xl shadow-2xl" data-lb-img />';
    document.body.appendChild(overlay);
    var img = overlay.querySelector("[data-lb-img]");

    function open(src, alt) {
      img.src = src;
      img.alt = alt || "";
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");
      document.body.classList.add("overflow-hidden");
    }
    function close() {
      overlay.classList.add("hidden");
      overlay.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
    triggers.forEach(function (t) {
      t.addEventListener("click", function () {
        open(t.getAttribute("data-full"), t.getAttribute("data-alt"));
      });
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.closest("[data-lb-close]")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  });

  /* ---------- Cookie consent ---------- */
  ready(function () {
    var banner = document.querySelector("[data-cookie-banner]");
    if (!banner) return;
    var KEY = "pg-cookie-consent";

    function get() {
      try {
        return localStorage.getItem(KEY);
      } catch (e) {
        return null;
      }
    }
    function set(val) {
      try {
        localStorage.setItem(KEY, val);
      } catch (e) {}
      if (val === "accepted") enableAnalytics();
      banner.classList.add("hidden");
    }

    if (get() === "accepted") enableAnalytics();

    if (get() === null) {
      banner.classList.remove("hidden");
    }
    banner.querySelector("[data-cookie-accept]")?.addEventListener(
      "click",
      function () {
        set("accepted");
      }
    );
    banner.querySelector("[data-cookie-reject]")?.addEventListener(
      "click",
      function () {
        set("rejected");
      }
    );

    // expose for "cookie settings" link in footer
    window.__pgOpenCookie = function () {
      banner.classList.remove("hidden");
    };
  });

  /* ---------- Analytics (placeholder) ---------- */
  function enableAnalytics() {
    // Google Analytics placeholder — replace G-XXXXXXXXXX and uncomment
    // to activate once consent is granted.
    /*
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
    */
  }

  /* ---------- AJAX forms (Formspree) ---------- */
  ready(function () {
    document.querySelectorAll("form[data-ajax-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        var status = form.querySelector("[data-form-status]");
        var btn = form.querySelector("[type=submit]");
        e.preventDefault();
        if (status) {
          status.classList.remove("hidden", "text-red-600");
        }
        if (btn) btn.setAttribute("disabled", "disabled");
        fetch(form.getAttribute("action"), {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        })
          .then(function (r) {
            if (r.ok) {
              form.reset();
              if (status) {
                status.textContent = form.getAttribute("data-success");
                status.classList.add("text-leaf-700");
              }
            } else {
              throw new Error("bad response");
            }
          })
          .catch(function () {
            if (status) {
              status.textContent = form.getAttribute("data-error");
              status.classList.add("text-red-600");
            }
          })
          .finally(function () {
            if (btn) btn.removeAttribute("disabled");
          });
      });
    });
  });

  /* ---------- Footer year + back-to-top ---------- */
  ready(function () {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    var toTop = document.querySelector("[data-back-to-top]");
    if (toTop) {
      var onScroll = function () {
        if (window.scrollY > 600) {
          toTop.classList.remove("opacity-0", "pointer-events-none");
          toTop.classList.add("opacity-100");
        } else {
          toTop.classList.add("opacity-0", "pointer-events-none");
          toTop.classList.remove("opacity-100");
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });

  /* ---------- Footer "cookie settings" link ---------- */
  ready(function () {
    var link = document.querySelector("[data-cookie-settings-link]");
    if (!link) return;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.__pgOpenCookie) window.__pgOpenCookie();
    });
  });
})();
