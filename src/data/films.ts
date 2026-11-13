/*
 * Short films — add/edit films here, the /shorts page renders automatically.
 * Images live in src/assets/film-*.png|jpg|webp.
 */
import type { ImageMetadata } from 'astro';

export interface Film {
  title: string;
  genre: string;
  description: string[];
  slides: ImageMetadata[];
  laurels: ImageMetadata[]; // festival laurel thumbnails
  link: { label: string; href: string };
}

import f1a from '../assets/film-36000-words-1.png';
import f1b from '../assets/film-36000-words-2.jpg';
import f1c from '../assets/film-36000-words-3.jpg';
import f1l1 from '../assets/film-36000-words-laurel-1.jpg';
import f1l2 from '../assets/film-36000-words-laurel-2.jpg';
import f2a from '../assets/film-cassine-1.png';
import f2b from '../assets/film-cassine-2.png';
import f2c from '../assets/film-cassine-3.png';
import f2d from '../assets/film-cassine-4.png';
import f2l1 from '../assets/film-cassine-laurel-1.jpg';
import f2l2 from '../assets/film-cassine-laurel-2.jpg';
import f3a from '../assets/film-littlest-1.jpg';
import f3b from '../assets/film-littlest-2.jpg';
import f3c from '../assets/film-littlest-3.jpg';
import f4a from '../assets/film-exhibit74-1.jpg';
import f4b from '../assets/film-exhibit74-2.jpg';
import f4l1 from '../assets/film-exhibit74-laurel-1.png';
import f4l2 from '../assets/film-exhibit74-laurel-2.png';
import f5a from '../assets/film-unwell-1.png';
import f5b from '../assets/film-unwell-2.jpg';
import f5c from '../assets/film-unwell-3.jpg';
import f5l1 from '../assets/film-unwell-laurel-1.jpg';
import f5l2 from '../assets/film-unwell-laurel-2.jpg';
import f5l3 from '../assets/film-unwell-laurel-3.jpg';
import f6a from '../assets/film-convalescence-1.png';
import f6b from '../assets/film-convalescence-2.png';
import f6c from '../assets/film-convalescence-3.png';
import f6l1 from '../assets/film-convalescence-laurel-1.webp';
import f6l2 from '../assets/film-convalescence-laurel-2.webp';
import f6l3 from '../assets/film-convalescence-laurel-3.webp';
import f6l4 from '../assets/film-convalescence-laurel-4.webp';
import f7a from '../assets/film-stay-with-me-1.png';
import f7b from '../assets/film-stay-with-me-2.png';
import f7c from '../assets/film-stay-with-me-3.png';

export const FILMS: Film[] = [
  {
    title: '36,000 Words For Love',
    genre: 'Experimental Documentary',
    description: [
      'An experimental non-fiction film documenting a weekend spent at the filmmaker\u2019s home, captured using nothing but a microphone and a vintage film camera.',
      'The film won Best Micro Short at the BFI Future Film Festival 2024. Besides being screened at BFI Southbank, the film was also selected to screen at the Glasgow Film Theatre and Watershed, Bristol, as part of the festival\u2019s first-ever UK-wide programme.',
      'The film has also screened at IndieFlicks and the Sunrise Film Festival, and won a Student Shiny Award.',
    ],
    slides: [f1a, f1b, f1c],
    laurels: [f1l1, f1l2],
    link: { label: 'Watch the Film', href: 'https://youtu.be/pZEWuO9X8ME' },
  },
  {
    title: 'Visions of Cassine',
    genre: 'Documentary',
    description: [
      'A documentary about the Duemila30 Lab, a 10-day filmmaking residency that brought 10 social impact filmmakers to Cassine in Italy. The filmmakers were tasked with making short films that engaged with the local community within just 10 days. This documentary about the experience was made within the same 10 days, completed in time for the final screening in the historic Church of San Francesco.',
      'The film was lightly edited the week after to include footage from the final screening, and this version was shown at the Closing Ceremony of the Duemila30 Festival in Milan.',
    ],
    slides: [f2a, f2b, f2c, f2d],
    laurels: [f2l1, f2l2],
    link: { label: 'Watch the Film', href: 'https://youtu.be/WwbDCJ_xbsg' },
  },
  {
    title: 'Littlest Student',
    genre: 'Comedy Animation',
    description: [
      'An animated film about a student named Little who struggles to fit into their new life at university.',
      'Written by Zeb Goriely and Sophie Stemmons. Animated, directed and edited by Zeb Goriely.',
      'First place at the Film at Jesus competition in Cambridge.',
    ],
    slides: [f3a, f3b, f3c],
    laurels: [],
    link: { label: 'Watch the Film', href: 'https://youtu.be/NbqzcldXrz4' },
  },
  {
    title: 'Exhibit 74',
    genre: 'Collaborative Film',
    description: [
      'A collaborative film organised by GunPowderHouse, where ten directors each shot one scene of a film, in reverse, only being allowed to see the two scenes that were shot before theirs. Completed over the course of a year, Zeb was the final director to take part, directing the opening scene of the film.',
    ],
    slides: [f4a, f4b],
    laurels: [f4l1, f4l2],
    link: {
      label: 'Watch the Trailer',
      href: 'https://www.instagram.com/reel/DFpr9vTicux/',
    },
  },
  {
    title: 'Unwell Woman',
    genre: 'Drama',
    description: [
      'A horror-flecked psycho-drama that digs into a dark history of hurt, lies, and the traumas of womanhood. Written and directed by Daniella DeVinter, shot in 2022.',
      'Zeb was one of the two cinematographers, and was the lighting designer and sound recorder during production. He was then the primary editor of the film.',
    ],
    slides: [f5a, f5b, f5c],
    laurels: [f5l1, f5l2, f5l3],
    link: {
      label: 'In Festivals',
      href: 'https://danielladevinter.com/unwell-woman',
    },
  },
  {
    title: 'Convalescence',
    genre: 'Drama',
    description: [
      'Recovering from a mysterious accident, Joss seals himself off from the world, turning to astronomy and living out his life in an observatory. But when he makes an important discovery, his perceptions of reality, and his own past, begin to change into something he can hardly recognise. Convalescence is a voyage into the unknown \u2014 whether it be through a telescope or under our very noses.',
      'This was Zeb\u2019s first short film, written by Benedict Mulcare, shot in 2019 and completed in 2021.',
    ],
    slides: [f6a, f6b, f6c],
    laurels: [f6l1, f6l2, f6l3, f6l4],
    link: { label: 'Watch now', href: 'https://youtu.be/Ze4gyaCrVAA' },
  },
  {
    title: 'Stay With Me',
    genre: 'Monologue',
    description: [
      'An exploration of masculinity, identity and the relationship between a father and son. Told from the perspective of the son who delivers a compelling recount of the first conversation he ever had with his dad.',
      'Directed and written by Adedamola Laoye. Zeb did the lighting, sound and editing for the film. The film won first place at the Film at Jesus competition, was selected for the Downing Short Film Festival, Oxford University Short Film Festival and Mono Box Short Film Showcase.',
    ],
    slides: [f7a, f7b, f7c],
    laurels: [],
    link: { label: 'Watch now', href: 'https://youtu.be/Q4ztM12htfU' },
  },
];
