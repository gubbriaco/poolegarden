import React from 'react';
import Realizzazione from './Realizzazione';
import {poolRealizationGalleryImages} from '../assets/images';

function RealizzazionePiscine() {
  return (
    <Realizzazione 
      title="Realizzazione di piscine"
      subtitle="Ogni piscina che realizziamo è un progetto unico, pensato per integrarsi perfettamente con l'ambiente circostante e soddisfare le esigenze specifiche dei nostri clienti. Ecco alcuni dei nostri lavori più recenti."
      galleryItems={poolRealizationGalleryImages}
      ctaTitle="Vuoi realizzare la piscina dei tuoi sogni?"
      ctaSubtitle="Contattaci per un preventivo gratuito e personalizzato"
    />
  );
}

export default RealizzazionePiscine;