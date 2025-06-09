import React from 'react';
import Realizzazione from './Realizzazione';
import {irrigationRealizationGalleryImages} from '../assets/images';

function RealizzazioneIrrigazione() {
  return (
    <Realizzazione 
      title="Realizzazione di impianti di irrigazione"
      subtitle="I nostri impianti di irrigazione sono progettati per garantire efficienza e sostenibilità, adattandosi perfettamente alle caratteristiche del tuo giardino. Scopri alcuni dei nostri progetti realizzati."
      galleryItems={irrigationRealizationGalleryImages}
      ctaTitle="Vuoi un sistema di irrigazione efficiente?"
      ctaSubtitle="Contattaci per un preventivo gratuito e personalizzato"
    />
  );
}

export default RealizzazioneIrrigazione;