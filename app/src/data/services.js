import impiantiirrigazione from '../assets/impiantiirrigazione.jpg';
import prati from '../assets/prati.jpg';
import piscine from '../assets/piscine.jpeg';
import manutenzionepiscine from '../assets/manutenzionepiscine.jpg';
import realizzazionepiscine from '../assets/realizzazionepiscine.jpg';
import manutenzioneirrigazione from '../assets/manutenzioneirrigazione.jpg';
import realizzazioneirrigazione from '../assets/realizzazioneirrigazione.jpg';

export const servizi = [
    {
      id: 1,
      title: 'Piscine',
      description: 'Realizzazione e manutenzione di piscine',
      image: piscine,
      link: '/piscine',
      iconType: 'pool'
    },
    {
      id: 2,
      title: 'Irrigazione',
      description: 'Realizzazione e manutenzione di sistemi di irrigazione',
      image: impiantiirrigazione,
      link: '/irrigazione',
      iconType: 'waterDrop'
    },
    {
      id: 3,
      title: 'Prati',
      description: 'Realizzazione di prati sintetici',
      image: prati,
      link: '/prati',
      iconType: 'grass'
    }
  ];

  export const servizipiscine = [
    {
      id: 1,
      title: 'Realizzazione',
      description: 'Realizzazione di piscine',
      image: realizzazionepiscine,
      link: '/piscine-realizzazione',
      iconType: 'engineering'
    },
    {
      id: 2,
      title: 'Manutenzione',
      description: 'Manutenzione di piscine',
      image: manutenzionepiscine,
      link: '/piscine-manutenzione',
      iconType: 'hardware'
    }
  ];

  export const serviziirrigazione = [
    {
      id: 1,
      title: 'Realizzazione',
      description: 'Realizzazione di impianti di irrigazione',
      image: realizzazioneirrigazione,
      link: '/irrigazione-realizzazione',
      iconType: 'engineering'
    },
    {
      id: 2,
      title: 'Manutenzione',
      description: 'Manutenzione di impianti di irrigazione',
      image: manutenzioneirrigazione,
      link: '/irrigazione-manutenzione',
      iconType: 'hardware'
    }
  ];

  export const serviziprati = [
    {
      id: 1,
      title: 'Realizzazione di prati sintetici',
      description: 'Realizzazione di prati sintetici',
      image: prati,
      link: '/prati',
      iconType: 'grass'
    }
];