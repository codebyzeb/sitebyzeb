/*
 * Freelance client work — add/edit clients here, /freelance renders automatically.
 * Video types: 'youtube' (id = video id) or 'instagram' (id = reel/tv shortcode).
 */
export interface Client {
  title: string; // may contain a line break, e.g. 'Ideas for Our Time:<br>Consciousness & Music'
  package: string; // e.g. 'Documentary • Full Package'
  video:
    | { type: 'youtube'; id: string }
    | { type: 'instagram'; id: string; path: 'reel' | 'tv' }; // shortcode + URL segment
}

export const FREELANCE_INTRO =
  'As a freelance filmmaker, Zeb has worked with a wide range of clients, creating launch videos, documentary shorts, and highlight videos. Working primarily as a self-shooter, he offers bespoke film packages which can include motion graphics and hand-drawn visualisations.';

export const CLIENTS: Client[] = [
  {
    title: 'Ideas for Our Time:<br>Consciousness & Music',
    package: 'Documentary • Full Package (in-house)',
    video: { type: 'youtube', id: 'nYS4FylZJ2Q' },
  },
  {
    title: 'Ideas for Our Time:<br>Alien Physics',
    package: 'Documentary • Full Package (in-house)',
    video: { type: 'youtube', id: 'PlFOufpGArY' },
  },
  {
    title: 'Jace AI Demo',
    package: 'Launch Video • Full Package',
    video: { type: 'youtube', id: 'xj6p5iCLEzo' },
  },
  {
    title: 'PicoLM Demo',
    package: 'Launch Video • Full Package',
    video: { type: 'youtube', id: 'llRUKwqMah4' },
  },
  {
    title: 'Cambridge University<br>Computer Lab',
    package: 'Documentary • Full Package',
    video: { type: 'youtube', id: 'TJV_OvF0dVM' },
  },
  {
    title: "Queens' College<br>Cambridge",
    package: '45 Access Videos • Full Package',
    video: { type: 'youtube', id: 'vqtkNgaXaGc' },
  },
  {
    title: 'Watersprite Film Festival',
    package: 'Documentary • Editing Package',
    video: { type: 'youtube', id: 'TTxFpNRMMJk' },
  },
  {
    title: 'Temor',
    package: 'Music Session • Full Package',
    video: { type: 'youtube', id: 'BSjOa8lEGrY' },
  },
  {
    title: 'onepointfour',
    package: 'Highlight Video • Full Package',
    video: { type: 'instagram', id: 'C9cIgu_O6Kc', path: 'reel' },
  },
  {
    title: 'Hannibal Buress',
    package: 'Highlight Video • Editing Package',
    video: { type: 'instagram', id: 'B9zu4emngjh', path: 'tv' },
  },
  {
    title: 'ActNowFilm<br>(Caroline)',
    package: 'Short-form doc • Editing Package',
    video: { type: 'instagram', id: 'DaVZAkjzwDi', path: 'reel' },
  },
  {
    title: 'ActNowFilm<br>(Thaiane)',
    package: 'Short-form doc • Editing Package',
    video: { type: 'instagram', id: 'Db3U7cDTBcz', path: 'reel' },
  },
];
