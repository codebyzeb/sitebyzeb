/*
 * Info page bio — /info renders automatically.
 */
export const BIO_PARAGRAPHS = [
  'Zeb is an award-winning filmmaker with a background in scientific research, having worked on a range of fiction, documentary, and experimental projects.',
  'He was recently awarded the Best Micro Short award at the BFI Future Film Festival for his film 36,000 Words for Love.',
  'In 2024, he was the Festival Director for the 15th edition of Watersprite Film Festival. With a team of 60 students, he delivered a full weekend of free talks, screenings, and ceremonies celebrating the future of film and breaking down the barriers for those pursuing a career in the creative industries.',
  'He recently completed a PhD in Computational Linguistics, exploring whether training AI models with sounds (instead of written language) can teach us something about how children first acquire language.',
] as const;

/** Films/titles that get a link inside the bio (matched by substring). */
export const BIO_LINKS = {
  '36,000 Words for Love': 'https://www.youtube.com/watch?v=pZEWuO9X8ME&t=2s',
  'Watersprite Film Festival': 'https://watersprite.org.uk/',
} as const;
