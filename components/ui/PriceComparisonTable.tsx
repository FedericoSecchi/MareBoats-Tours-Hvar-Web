type Props = {
  tourName: string;
  sharedPerPerson: number;
  privateTotal: number;
  privateNote?: string;
  groupSizes: number[];
};

function fmt(n: number) {
  return n.toLocaleString('en-US');
}

export function PriceComparisonTable({
  tourName,
  sharedPerPerson,
  privateTotal,
  privateNote,
  groupSizes,
}: Props) {
  const rows = groupSizes.map((n) => ({
    n,
    sharedTotal: n * sharedPerPerson,
    privateWins: n * sharedPerPerson > privateTotal,
  }));

  const privateLabel = privateNote ? `Private ${privateNote}` : 'Private';

  return (
    <div className="mt-10">
      <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
        {tourName}
      </h3>
      <p className="mt-1 font-body text-sm text-[color:var(--gray)]">
        Shared: &euro;{fmt(sharedPerPerson)}/person &middot; {privateLabel}: &euro;{fmt(privateTotal)}{' '}
        whole boat
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-[color:var(--border)]">
        <table className="w-full font-body text-sm">
          <thead>
            <tr className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
              <th className="px-4 py-3 text-left font-semibold text-[color:var(--gray)]">Group</th>
              <th className="px-4 py-3 text-left font-semibold text-[color:var(--gray)]">Shared total</th>
              <th className="px-4 py-3 text-left font-semibold text-[color:var(--gray)]">Private total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[color:var(--border)]">
            {rows.map(({ n, sharedTotal, privateWins }) => (
              <tr key={n} className={privateWins ? 'bg-[color:var(--accent)]/5' : ''}>
                <td className="px-4 py-3 text-[color:var(--white)]">{n} people</td>
                <td className="px-4 py-3 text-[color:var(--gray)]">&euro;{fmt(sharedTotal)}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    privateWins ? 'text-[color:var(--accent)]' : 'text-[color:var(--gray)]'
                  }`}
                >
                  &euro;{fmt(privateTotal)}
                  {privateWins && (
                    <span className="ml-1 text-xs font-normal opacity-70">lower</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
