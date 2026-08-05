const BLOCKS = [
  {
    title: 'Shade on every boat',
    body: 'Every MareBoats Hvar speedboat has a sun canopy over the main seating area. The canopy provides shade from the moment you leave Hvar Harbour to the last stop of the day. All four boats in the MareBoats Hvar fleet carry it as standard.',
  },
  {
    title: 'Room to move',
    body: 'MareBoats Hvar speedboats are licensed for up to 12 guests but each boat is capped at 8. At 8 guests there is room to settle in and shift positions during the day, and the full group can be in the water at the same time. Groups of 9 to 16 travel on two MareBoats Hvar speedboats sailing together.',
  },
  {
    title: 'Open deck, no assigned seats',
    body: 'There are no assigned seats on a MareBoats Hvar speedboat. Guests choose where to sit at each stop and can move between the shaded seating area and the open sun during the day.',
  },
  {
    title: 'Cold water, all day',
    body: 'Every MareBoats Hvar speedboat carries a cooler with ice. Bottled water is included in the tour price and stays available throughout the day.',
  },
  {
    title: 'Music and snorkel gear',
    body: 'All MareBoats Hvar speedboats have a sound system on board. The playlist has been built over years from what has worked best with guests from every corner of the world. During the tour, guests can join a Spotify Jam and add their own music — you need the Spotify app on your phone. Snorkel masks are included on every tour. No need to bring your own.',
  },
];

export default function FleetInfo() {
  return (
    <section className="bg-[color:var(--bg)] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-container">
        <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
          On board a MareBoats Hvar speedboat
        </h2>
        <div className="mt-10">
          {BLOCKS.map((block) => (
            <div
              key={block.title}
              className="border-t border-[color:var(--border)] py-8 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                {block.title}
              </h3>
              <p className="mt-3 max-w-3xl font-body text-base leading-relaxed text-[color:var(--gray)]">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
