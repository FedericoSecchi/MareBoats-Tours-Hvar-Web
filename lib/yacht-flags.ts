/** Publication switch. Only Fede flips this, once prices are set. */
export const YACHT_SECTION_LIVE = false;

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
