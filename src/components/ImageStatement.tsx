export default function ImageStatement() {
  return (
    <section className="relative w-full py-32 bg-ink text-paper overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/18599094/pexels-photo-18599094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Grainy black and white abstract texture with scratches, ideal for artistic backgrounds."
    width="6819"
    height="10000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/monochrome-noise-structured-photo-18599094/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Joana Miriam on Pexels
    </a>
  </div>
</div>" 
          className="w-full h-full object-cover"
          alt="Texture"
        />
      </div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
           <div className="relative">
             <img 
               src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/33018517/pexels-photo-33018517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Side profile of a man in a black cap against a dark background."
    width="1811"
    height="2263"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/side-profile-portrait-of-a-man-wearing-a-cap-33018517/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Max Zaharenkov on Pexels
    </a>
  </div>
</div>"
               alt="Profile"
               className="w-full max-w-md mx-auto sepia-[.3] grayscale"
             />
             <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent rounded-full blur-2xl opacity-50 mix-blend-screen"></div>
           </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h2 className="font-serif text-6xl md:text-8xl mb-8 leading-none">
            VOID <br/> <span className="text-stone opacity-50 italic">FORM</span>
          </h2>
          <div className="border-l border-accent pl-6 ml-2">
            <p className="font-sans text-lg text-stone/80 font-light max-w-md">
              We strip away the inessential. What remains is the pure geometry of the human form, wrapped in textiles that breathe.
            </p>
            <button className="mt-8 px-8 py-3 border border-paper text-xs uppercase tracking-widest hover:bg-paper hover:text-ink transition-colors duration-300">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}