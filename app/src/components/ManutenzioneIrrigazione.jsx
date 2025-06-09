import React from 'react';
import Realizzazione from './Realizzazione';
import {irrigationMaintenanceGalleryImages} from '../assets/images';

function ManutenzioneIrrigazione() {
  return (
    <Realizzazione 
      title="Manutenzione di impianti di irrigazione"
      subtitle="Ogni impianto di irrigazione richiede attenzione costante e interventi mirati per funzionare al meglio. Offriamo servizi di manutenzione su misura per garantire efficienza, risparmio idrico e serenità in ogni stagione."
      galleryItems={irrigationMaintenanceGalleryImages}
      ctaTitle="Hai bisogno di manutenzione per il tuo impianto di irrigazione?"
      ctaSubtitle="Contattaci per un preventivo gratuito e personalizzato"
    />
  );
}

export default ManutenzioneIrrigazione;