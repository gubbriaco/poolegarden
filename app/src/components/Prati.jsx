import React from 'react';
import Realizzazione from './Realizzazione';
import {lawnGalleryItems} from '../assets/images';

function Prati() {
  return (
    <Realizzazione 
      title="Prati Sintetici"
      subtitle="I nostri prati sintetici di alta qualità offrono una soluzione estetica, pratica e sostenibile per ogni spazio verde. Resistenti alle intemperie, facili da mantenere e sempre perfetti in ogni stagione, trasformano qualsiasi area in un'oasi verde senza necessità di irrigazione o manutenzione costante."
      galleryItems={lawnGalleryItems}
      ctaTitle="Desideri un prato sempre perfetto senza manutenzione?"
      ctaSubtitle="Contattaci per un preventivo gratuito e scopri le nostre soluzioni di prato sintetico"
    />
  );
}

export default Prati;