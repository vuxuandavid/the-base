// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const anton = (subset) => `./node_modules/@fontsource/anton/files/anton-${subset}-400-normal.woff2`;

// https://astro.build/config
export default defineConfig({
  site: 'https://thebase.berlin',
  build: {
    // The whole stylesheet is small; inlining it removes the render-blocking CSS request
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      // Display font for the hero headline: preloaded with a metric-matched fallback to avoid layout shift
      name: 'Anton',
      cssVariable: '--font-anton',
      provider: fontProviders.local(),
      fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
      options: {
        variants: [
          {
            src: [anton('latin')],
            weight: 400,
            style: 'normal',
            display: 'swap',
            unicodeRange: [
              'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
            ],
          },
          {
            src: [anton('latin-ext')],
            weight: 400,
            style: 'normal',
            display: 'swap',
            unicodeRange: [
              'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF',
            ],
          },
          {
            src: [anton('vietnamese')],
            weight: 400,
            style: 'normal',
            display: 'swap',
            unicodeRange: [
              'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB',
            ],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
