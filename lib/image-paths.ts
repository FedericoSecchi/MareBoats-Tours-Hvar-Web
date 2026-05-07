export const IMAGE_PATHS = {
  hero: {
    main: '/images/hero/hero-main.jpg',
  },
  tours: {
    blueCave: {
      main: '/images/tours/blue-cave/blue-cave-main.jpg',
      gallery: [
        '/images/tours/blue-cave/blue-cave-2.jpg',
        '/images/tours/blue-cave/blue-cave-3.jpg',
      ],
    },
    redRocks: {
      main: '/images/tours/red-rocks-pakleni/red-rocks-main.jpg',
      gallery: ['/images/tours/red-rocks-pakleni/red-rocks-2.jpg'],
    },
    pakleni: {
      main: '/images/tours/pakleni-islands/pakleni-main.jpg',
      gallery: ['/images/tours/pakleni-islands/pakleni-2.jpg'],
    },
    sunsetCruise: {
      main: '/images/tours/sunset-cruise/sunset-main.jpg',
      gallery: ['/images/tours/sunset-cruise/sunset-2.jpg'],
    },
    privateCharter: {
      main: '/images/tours/private-charter/private-charter-main.jpg',
    },
    splitTransfer: {
      main: '/images/tours/split-transfer/split-transfer-main.jpg',
    },
    yachtTaxi: {
      main: '/images/tours/yacht-taxi/yacht-taxi-main.jpg',
    },
  },
  team: {
    nikola: '/images/team/nikola.jpg',
    josip: '/images/team/josip.jpg',
    fede: '/images/team/fede.jpg',
  },
  boat: {
    main: '/images/boat/rib-main.jpg',
    water: '/images/boat/rib-on-water.jpg',
    interior: '/images/boat/rib-interior.jpg',
  },
  gallery: Array.from({ length: 9 }, (_, i) => `/images/gallery/gallery-${i + 1}.jpg`),
} as const;
