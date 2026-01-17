import { ArrowDownRight } from 'lucide-react';

export default function OverlappingGrid() {
  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-[1600px] mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-8">
        
        {/* Block 1: Intro Text */}
        <div className="md:col-span-4 flex flex-col justify-start pt-12">
          <ArrowDownRight className="w-12 h-12 mb-6 text-accent" />
          <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-none">
            The Architecture <br/> of <span className="italic text-accent">Cloth</span>
          </h3>
          <p className="font-sans text-sm leading-7 text-ink/70 max-w-xs text-justify">
            We explore the boundaries between rigid structures and fluid motion. 
            This collection challenges the wearer to embody the space they occupy.
          </p>
        </div>

        {/* Block 2: Main Image (Overlapped) */}
        <div className="md:col-span-5 relative z-10 md:mt-0">
          <div className="aspect-[3/4] w-full bg-stone overflow-hidden">
             <img 
               src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/4814061/pexels-photo-4814061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="A detailed shot of a crumpled black fabric, showcasing its smooth and wrinkled texture in a monochromatic tone."
    width="4245"
    height="6368"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/black-textile-with-creases-4814061/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Karola G on Pexels
    </a>
  </div>
</div>" 
               alt="Fabric Detail"
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
             />
          </div>
          <span className="absolute -bottom-6 -left-6 font-serif text-9xl text-ink z-20 mix-blend-exclusion opacity-50">
            01
          </span>
        </div>

        {/* Block 3: Vertical Text & Offset Image */}
        <div className="md:col-span-3 flex flex-col justify-end relative md:-ml-12 z-20 mt-12 md:mt-32">
          <div className="aspect-[4/5] w-3/4 self-end shadow-2xl">
            <img 
               src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/3756941/pexels-photo-3756941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Portrait of a young woman wearing headphones, enjoying music indoors with a casual expression."
    width="5828"
    height="3990"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/woman-in-gray-and-yellow-sweater-holding-white-headphones-3756941/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Sound On on Pexels
    </a>
  </div>
</div>" 
               alt="Model Pose"
               className="w-full h-full object-cover grayscale"
             />
          </div>
          <div className="absolute top-0 right-full md:right-auto md:-left-8 h-full">
            <p className="writing-vertical font-sans text-xs tracking-[0.4em] uppercase text-ink/40 h-full flex items-center rotate-180">
              Structural Integrity Test — Phase One
            </p>
          </div>
        </div>

      </div>

      {/* Second Row: Massive Text Overlap */}
      <div className="mt-32 relative">
        <h2 className="font-serif text-[12vw] leading-[0.8] text-center md:text-left mix-blend-exclusion text-white z-20 relative pointer-events-none">
          UNFOLDING
        </h2>
        <div className="absolute top-1/4 right-0 md:right-24 w-full md:w-1/2 h-[500px] z-10">
           <img 
             src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/6226716/pexels-photo-6226716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="A creative studio portrait of two models in white clothing posing artistically against a green background."
    width="6082"
    height="4055"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/models-standing-together-at-studio-6226716/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by cottonbro studio on Pexels
    </a>
  </div>
</div>" 
             alt="Duo Shot"
             className="w-full h-full object-cover"
           />
        </div>
        <div className="hidden md:block absolute top-full right-1/2 w-64 bg-paper p-6 -mt-24 z-30 border border-ink">
          <p className="font-serif italic text-xl mb-4">"A rebellion against the mundane."</p>
          <a href="#" className="font-sans text-xs font-bold uppercase underline decoration-accent decoration-2 underline-offset-4">Read Article</a>
        </div>
      </div>
    </section>
  );
}