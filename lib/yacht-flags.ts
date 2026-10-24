/** Publication switch. Only Fede flips this, once prices are set. */
export const YACHT_SECTION_LIVE = true;

/**
 * Always false. During pre-launch we had Coti's Figma photos as placeholders
 * (gated by IS_PREVIEW_BUILD) so production never shipped stock or branded
 * images. The folder is now deleted; this stays as a hard off switch so no
 * future preview can bring Figma photos back without flipping it on purpose.
 */
export const USE_FIGMA_PHOTOS = false;

/**
 * Netlify deploy previews and branch deploys (and local dev) show the links
 * into the section from public pages, so Fede can review them before launch.
 * Production shows them only when YACHT_SECTION_LIVE is true.
 */
export const IS_PREVIEW_BUILD =
  process.env.CONTEXT === 'deploy-preview' ||
  process.env.CONTEXT === 'branch-deploy' ||
  process.env.NODE_ENV === 'development';

export const SHOW_YACHT_LINKS = YACHT_SECTION_LIVE || IS_PREVIEW_BUILD;

export const YACHT_BASE = '/private-yacht-hvar';
