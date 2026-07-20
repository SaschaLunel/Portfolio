// Image paths for the Design and Photography sections.
// These are language-independent — they line up by position with the
// `items` arrays in src/i18n.jsx (1st image = 1st item, etc.).
//
// How to use:
// 1. Put your image files in `public/images/` (create that folder if needed).
// 2. Reference them here starting with a leading slash, e.g. '/images/na-mara.jpg'.
// 3. Leave an entry as `null` to keep the placeholder block instead of a photo.
//
// The number of entries here should match the number of items in the
// corresponding `items` array in i18n.jsx (currently 4 for each section).

export const designImages = [
  '/images/namara2.png', // Na Mara
  '/images/mockup_brochure_londres.png', // London brochure
  '/images/VRW.png', // Votre Rédac Web
  '/images/restart.png', // Restart Esport Club
]

// Extra photos shown inside a project's modal (logo alone, moodboard,
// branding elements, etc). Each inner array lines up by position with the
// `gallery` array on that same project in i18n.jsx — 1st image = 1st
// caption, 2nd = 2nd, 3rd = 3rd. Each project currently has 3 captions
// defined in i18n.jsx, so there are 3 slots below per project to match.
export const designGalleries = [
  // Na Mara — business card, coasters, poster, poster duplicate
  [
    '/images/card_namara.png',
    '/images/coasters_namara.png',
    '/images/poster_namara.png',
    '/images/namara-contact.png',
  ],
  // London brochure — cover, inside spread, icon detail, poster
  [
    '/images/brochure1.png',
    '/images/brochure3.png',
    '/images/brochure2.png',
    '/images/brochure4.png',
  ],
  // Votre Rédac Web — notepad, homepage, cards, poster
  [
    '/images/vrw_cards.png',
    '/images/vrw_pc.png',
    '/images/vrw_notepad.png',
    '/images/vrw_linkedin.png',
  ],
  // Restart Esport Club — logo, jersey mockup, social kit, poster
  [
    '/images/tshirt-restart.png',
    '/images/restart-contact.png',
    '/images/restart.png',
    '/images/restart-hp.png',
  ],
]

export const photographyImages = [
  '/images/otters.jpg',
  '/images/coudon.jpg',
  '/images/light.jpg',
  '/images/briantais.jpg', 
  '/images/prairie_dog.jpg', 
  '/images/neon.jpg', 

]

// Optional YouTube video per design project, shown embedded inside that
// project's modal. Works fine with unlisted videos — being unlisted only
// means the video won't show up in YouTube search or on your channel, the
// embed itself works exactly like a public video.
//
// Use just the video ID, not the full URL. To find it, look at the
// YouTube URL: https://www.youtube.com/watch?v=XXXXXXXXXXX — the ID is
// the part after `v=`. For a youtu.be link like https://youtu.be/XXXXXXXXXXX,
// it's the part after the last slash.
//
// Leave an entry as `null` for projects without a video — nothing renders.
export const designVideos = [
  'CJCdA03rrq8', // Na Mara
  null, // London brochure
  'H23rLFwXZ8w', // Votre Rédac Web
  null, // Restart Esport Club
]
