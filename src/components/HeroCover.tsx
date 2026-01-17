export default function HeroCover() {
  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/19621241/pexels-photo-19621241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="Editorial Cover" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-ink/10"></div>
      </div>

      {/* Floating Headlines */}
      <div className="relative z-10 w-full px-4 md:px-12 pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-paper/40 pt-6">
          <div className="flex flex-col">
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] text-paper uppercase mb-2">
              Vol. 04 — FW25
            </span>
            <h2 className="font-serif text-6xl md:text-9xl text-paper mix-blend-overlay italic font-black leading-[0.8]">
              SILHOUETTE
            </h2>
          </div>
          
          <div className="mt-8 md:mt-0 max-w-xs">
            <p className="font-sans text-xs md:text-sm text-paper/90 leading-relaxed text-justify">
              Redefining the structural integrity of modern garments through a lens of brutalist architecture and soft organic textures.
            </p>
          </div>
        </div>

        {/* Huge Background Text for Z-Index play */}
        <h1 className="absolute top-[-60vh] left-1/2 -translate-x-1/2 text-[30vw] font-serif font-bold text-stroke-white opacity-20 whitespace-nowrap">
          AVANT
        </h1>
      </div>
    </header>
  );
}