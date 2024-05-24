import image1 from '../image/projects/crud.png'
import image2 from '../image/projects/jobs.png'
import image3 from '../image/projects/todolist.png'
import image4 from '../image/projects/gb.png'
import image5 from '../image/projects/memesq.png'
import image6 from '../image/projects/iluvalorant.png'
import image7 from '../image/projects/lfds.png'
import image8 from '../image/projects/pompeya.png'

import react from '../image/tech/react.png'
import js from '../image/tech/js.png'
import ai from '../image/tech/ai.png'
import figma from '../image/tech/figma.png'
import css from '../image/tech/css.png'
import py from '../image/tech/python.png'
import bootstrap from '../image/tech/boo.png'
import html from '../image/tech/html.png'
import mui from '../image/tech/mui.png'
import git from '../image/tech/git.png'
import ps from '../image/tech/ps.png'
import chakra from '../image/tech/chakraui.png'
import firebase from '../image/tech/firebase.png'
import bulma from '../image/tech/bulma.png'

export const imagesTech = [
  { id: 1, img: react },
  { id: 2, img: js },
  { id: 5, img: css },
  { id: 6, img: py },
  { id: 7, img: bootstrap },
  { id: 8, img: html },
  { id: 9, img: mui },
  { id: 10, img: git },
  { id: 11, img: chakra },
  { id: 12, img: firebase },
  { id: 12, img: bulma },
]

export const imagesDesign = [
  { id: 1, img: ai },
  { id: 2, img: ps },
  { id: 3, img: figma },
]

// Array de imágenes
export const imageData = [
  {
    image: image1,
    description:
      'CRUD diseñado para gestionar proyectos de manera sencilla y eficiente. ',
    icons: [react, chakra],
    link: 'https://challengealkemyfront.netlify.app/',
  },
  {
    image: image2,
    description:
      'Careers es una aplicación web que te permite agregar trabajos nuevos con su descripción y tags, crearlos y mostrarlos en la página Home. También puedes filtrarlos por locación, seniority y categoría, y editarlos si lo deseas.',
    icons: [js, bulma],
    link: ['https://micacabrera.github.io/jobs/'],
  },
  {
    image: image3,
    description:
      'Aplicación de lista de tareas básica que permita a los usuarios añadir, eliminar y filtrar tareas fácilmente.',
    icons: [react, chakra, ai],
    link: ['https://creative-sprite-2c5dba.netlify.app/'],
  },
  {
    image: image4,
    description: 'Tienda de suplementos deportivos.',
    icons: [react, mui, ai],
    link: ['https://gb-iota.vercel.app/'],
  },
  {
    image: image5,
    description: 'Divertite creando memes para mandarle a tus amiguis',
    icons: [js, css],
    link: ['https://memesgenerador.netlify.app/'],
  },

  {
    image: image6,
    description: 'Ilustración hecha con Ilustrator para canal de Twich.',
    icons: [ai],
    link: [
      'https://www.behance.net/gallery/199069099/Ilustracion-estilo-Valorant',
    ],
  },

  {
    image: image7,
    description: 'Diseño de marca para floristería y organización de eventos.',
    icons: [ai],
    link: ['https://www.behance.net/gallery/199158995/Diseno-de-marca'],
  },
  {
    image: image8,
    description: 'Próximamente el portfolio de ilustaciones.',
    icons: [ai],
    link: [
      'https://www.behance.net/gallery/199156825/Portfolio-de-ilustraciones',
    ],
  },
]
