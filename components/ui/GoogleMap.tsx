interface GoogleMapProps {
  src: string
  title: string
  height?: number
}

export function GoogleMap({ src, title, height = 450 }: GoogleMapProps) {
  if (src.startsWith('PLACEHOLDER')) {
    return (
      <div
        className="flex h-full min-h-[240px] w-full items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] text-sm text-[color:var(--gray)]"
        style={{ minHeight: height }}
      >
        Mapa próximamente
      </div>
    )
  }

  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height={height}
      style={{ border: 0, height: '100%', minHeight: height }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-full min-h-[240px] w-full rounded-lg"
    />
  )
}
