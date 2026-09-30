export function NameBanner() {
  const name = 'Shoaib Akhter'
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto flex max-w-[95rem] flex-col items-center px-4">
        <div className="flex w-full justify-center gap-[0.5vw] text-center">
          {name.split('').map((ch, i) => (
            <span
              key={i}
              className={`text-[13vw] font-black leading-none tracking-tighter ${
                ch === ' '
                  ? 'w-[3vw]'
                  : 'bg-gradient-to-b from-foreground to-foreground/20 bg-clip-text text-transparent'
              }`}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.4em] text-muted-foreground sm:text-base">
          Fullstack Developer
        </p>
      </div>
    </section>
  )
}
