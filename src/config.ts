import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://barch.blog",
  author: "Eric Barch",
  desc: "My blog.",
  title: "barch.blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/eric-barch",
    linkTitle: "Github",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eric-barch",
    linkTitle: "LinkedIn",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:eric.michael.barch@gmail.com",
    linkTitle: `Email`,
    active: true,
  },
  {
    name: "X",
    href: "https://twitter.com/eric_barch",
    linkTitle: `X`,
    active: true,
  },
];
