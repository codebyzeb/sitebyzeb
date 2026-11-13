/*
 * Research page data — edit here, /research renders automatically.
 */
import portrait from '../assets/research-portrait.png';

export const RESEARCH_BIO = [
  'Zeb studied for a Ph.D. in Computer Science at the University of Cambridge from 2021 to 2025. He was supervised by Professor Paula Buttery and funded by the EPSRC Vice-Chancellor Scholarship.',
  'His thesis, titled \u201CPhonological Representations in Language Models\u201D, explores the training of small language models with sound-based units (phonemes) instead of text-based units (characters or words). This work draws parallels between modern machine learning methods and statistical learning theories of language acquisition, leading to new insights across both fields.',
  'He was a Research Scientist Intern at Spotify in 2026, studying large-scale entity resolution and LLM-based methods for augmenting labelled data.',
];

export const RESEARCH_THEMES = [
  'Child Language Acquisition',
  'Large Language Models',
  'Entity Resolution',
  'Word Segmentation',
  'Tokenisation',
  'Curriculum Learning',
];

export interface Paper {
  title: string;
  venue: string;
  year: string;
  href: string;
}

export const PAPERS: Paper[] = [
  {
    title: 'CLIMB: Curriculum Learning for Infant-inspired Model Building',
    venue: 'Proceedings of the BabyLM Challenge',
    year: '2023',
    href: 'https://aclanthology.org/2023.conll-babylm.10/',
  },
  {
    title:
      'Word segmentation from transcriptions of child-directed speech using lexical and sub-lexical cues.',
    venue: 'Journal of Child Language',
    year: '2024',
    href: 'https://www.cambridge.org/core/journals/journal-of-child-language/article/word-segmentation-from-transcriptions-of-childdirected-speech-using-lexical-and-sublexical-cues/5D206536C878ADA80026ED8E2E72F848',
  },
  {
    title:
      'Mitigating Frequency Bias and Anisotropy in Language Model Pre-Training with Syntactic Smoothing',
    venue: 'Proceedings of EMNLP 2024',
    year: '2024',
    href: 'https://aclanthology.org/2024.emnlp-main.344/',
  },
  {
    title:
      'From Babble to Words: Pre-Training Language Models on Continuous Streams of Phonemes',
    venue: 'Proceedings of BabyLM',
    year: '2025',
    href: 'https://aclanthology.org/2024.conll-babylm.4/',
  },
  {
    title:
      'IPA CHILDES & G2P+: Feature-Rich Resources for Cross-Lingual Phonology and Phonemic Language Modeling',
    venue: 'Proceedings of CoNLL',
    year: '2025',
    href: 'https://aclanthology.org/2025.conll-1.33/',
  },
  {
    title: 'BabyLM\u2019s First Words: Word Segmentation as a Phonological Probing Task',
    venue: 'Proceedings of CoNLL',
    year: '2025',
    href: 'https://aclanthology.org/2025.conll-1.34/',
  },
  {
    title: 'ByteSpan: Information-Driven Subword Tokenisation',
    venue: 'Proceedings of TokShop',
    year: '2025',
    href: 'https://arxiv.org/abs/2506.18639',
  },
  {
    title: 'What\u2019s the Best Sequence Length for BabyLM?',
    venue: 'Accepted to BabyLM',
    year: '2026',
    href: 'https://arxiv.org/abs/2506.18639',
  },
];

export const TEACHING = {
  intro: 'Zeb supervised various undergraduate Computer Science courses, including:',
  courses: [
    'Machine Learning and Real-World Data',
    'Computation Theory',
    'Semantics of Programming Languages',
    'Formal Models of Language',
  ],
  outro:
    'His teaching also included demonstrating for the Machine Learning course and being a Teaching Assistant for the Formal Models of Language course. He also supervised Part II and MPhil projects.',
};

export interface Presentation {
  title: string;
  detail: string; // e.g. 'Oral Presentation, BabyLM Workshop'
  when: string; // e.g. 'EMNLP 2023'
}

export const PRESENTATIONS: Presentation[] = [
  {
    title: 'CLIMB: Curriculum Learning for Infant-inspired Model Building',
    detail: 'Oral Presentation, BabyLM Workshop',
    when: 'EMNLP 2023',
  },
  {
    title: 'What Can AI Teach Us About How Children Acquire Language?',
    detail: 'Oral Presentation, Gonville & Caius College',
    when: 'March 2024',
  },
  {
    title:
      'POS-Smooth: Rare Word Representation Learning by Smoothing Over Word Classes',
    detail: 'Poster Presentation',
    when: 'HumanClaim 2024',
  },
  {
    title:
      'Word Segmentation and Lexicon Learning from Child-Directed Speech Using Multiple Cues',
    detail: 'Poster Presentation',
    when: 'HumanClaim 2023',
  },
];

export const RESEARCH_PORTRAIT = portrait;
