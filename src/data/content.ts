/*
 * Creative content page — /content renders automatically.
 */
import type { ImageMetadata } from 'astro';
import b1 from '../assets/content-banner-1.jpg';
import b2 from '../assets/content-banner-2.png';
import b3 from '../assets/content-banner-3.png';
import b4 from '../assets/content-banner-4.png';
import b5 from '../assets/content-banner-5.png';
import b6 from '../assets/content-banner-6.png';
import b7 from '../assets/content-banner-7.png';
import tiktokImg from '../assets/content-tiktok.png';

export interface BannerSlide {
  src: ImageMetadata;
  caption: string;
}

export const CONTENT_INTRO = [
  'Zeb has been posting \u201Ccontent\u201D online since he started his YouTube channel FilmByZeb in 2016. Originally posting simple travel vlogs, he used the channel as a place to document his life, learn filmmaking, and experiment creatively. He has since posted over 100 videos, including several award-winning short films.',
  'Zeb also produces short-form content across multiple platforms. He uses these videos to test creative ideas and methods for storytelling. In 2022, his TikTok on Wordle went viral, reaching over one million views.',
  'His recent short-form series The PhD Grind documented the final year of his PhD using comedy, experimental editing, and animated characters. He is currently in pre-production for a new series about creativity.',
];

export const CHANNEL_URL = 'https://youtube.com/filmbyzeb';

export const BANNER_SLIDES: BannerSlide[] = [
  { src: b1, caption: 'FilmByZeb YouTube banner from 2017 to 2020' },
  { src: b2, caption: 'Origin of \u201CFilmByZeb\u201D in a vlog title screen (2017)' },
  { src: b3, caption: '100 subscriber end screen message (2018)' },
  { src: b4, caption: 'Hand-drawn end card used in several early videos (2018)' },
  { src: b5, caption: 'Animated \u201CFilmByZeb\u201D title used in the VEDS series (2019)' },
  { src: b6, caption: '\u201CThe Cambridge Vlog\u201D title screen (2021)' },
  { src: b7, caption: 'Succession parody \u201CFilmByZeb\u201D title (2023)' },
];

export const PHD_GRIND = {
  heading: 'The PhD Grind',
  blurb:
    'Playful and experimental short-form videos posted across YouTube, TikTok, and Instagram documenting the final year of Zeb\u2019s PhD.',
  videos: ['GFyjRkshvRY', 'UeFyxqvz_ic', 'qE-O8rysuG8', 'aCv01HggR2o'], // YouTube Shorts ids
};

export const VLOGS = {
  heading: 'Reflective Vlogs',
  blurb:
    'Many of Zeb\u2019s videos are deeply personal, using the video format as a way to process his thoughts, document his life, and reflect.',
  videos: [
    { id: 'f82vkuaH1Hg', caption: 'A letter to Zeb age 25, from Zeb age 21.' },
    {
      id: 'ZsrFI1qcRj8',
      caption:
        'Most recent video: Zeb reflects on his PhD and considers his new life in London.',
    },
    {
      id: 'FHpXMdlzxGk',
      caption: 'Zeb considers whether the goal should be to make his future self proud.',
    },
  ],
};

export const VIRAL_TIKTOK = {
  heading: 'Viral TikTok',
  blurb:
    'In 2022, Zeb\u2019s TikTok about Wordle went viral and received some media attention.',
  tiktokId: '7058690677634256134',
  image: tiktokImg,
  imageAlt: 'Screenshot of media coverage of the viral Wordle TikTok',
};
