// Global site data — edit this file to change nav/socials/contact details.
export const SITE = {
  name: 'SiteByZeb',
  owner: 'Zeb Goriely',
  email: 'filmbyzeb@gmail.com',
} as const;

export const SOCIALS = [
  { label: 'YouTube', href: 'https://youtube.com/filmbyzeb', color: '#f0524f' },
  { label: 'Instagram', href: 'https://www.instagram.com/photobyzeb/', color: '#f0ef5b' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@tokbyzeb', color: '#9b6867' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zgoriely/', color: '#7fbf74' },
] as const;

export const CONTACT_EMAIL = SITE.email;
