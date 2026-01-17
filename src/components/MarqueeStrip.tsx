interface MarqueeProps {
  text: string;
}

export default function MarqueeStrip({ text }: MarqueeProps) {
  return (
    <div className="w-full bg-accent py-3 overflow-hidden whitespace-nowrap border-y border-ink">
      <div className="inline-flex animate-[marquee_20s_linear_infinite]">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="font-sans text-sm font-bold uppercase tracking-widest mx-4 text-paper">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}