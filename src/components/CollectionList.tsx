const items = [
  { id: '01', title: 'The Trench', price: '$850', img: '<div className="relative">
  <img 
    src="https://images.pexels.com/photos/5119921/pexels-photo-5119921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Three stylish adults in trench coats exude urban fashion chic as they hold hands outdoors."
    width="4400"
    height="2933"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/people-wearing-beige-trench-coats-standing-side-by-side-5119921/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by cottonbro studio on Pexels
    </a>
  </div>
</div>' },
  { id: '02', title: 'Silk Blazer', price: '$620', img: '<div className="relative">
  <img 
    src="https://images.pexels.com/photos/34461738/pexels-photo-34461738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Smiling woman in a black blazer exuding confidence, photographed indoors."
    width="1921"
    height="2601"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/confident-professional-woman-smiling-in-blazer-34461738/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Sean P. Twomey on Pexels
    </a>
  </div>
</div>' },
  { id: '03', title: 'Wide Trouser', price: '$440', img: '<div className="relative">
  <img 
    src="https://images.pexels.com/photos/7202826/pexels-photo-7202826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Four women stand in colorful trousers against a white background, showcasing diversity and fashion."
    width="5943"
    height="3962"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/woman-in-white-tank-top-on-white-background-7202826/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Tima Miroshnichenko on Pexels
    </a>
  </div>
</div>' },
  { id: '04', title: 'Oxford Shirt', price: '$320', img: '<div className="relative">
  <img 
    src="https://images.pexels.com/photos/10510955/pexels-photo-10510955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Charming view of a historic street in Oxford, England with classic architecture and overcast sky."
    width="3024"
    height="4032"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/people-walking-on-the-street-near-the-houses-under-the-cloudy-sky-10510955/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Anna Kozlova on Pexels
    </a>
  </div>
</div>' },
];

export default function CollectionList() {
  return (
    <section className="py-24 border-b border-ink/10">
      <div className="px-6 mb-12 flex items-baseline justify-between">
        <h3 className="font-serif text-4xl">The Edit</h3>
        <a href="#" className="font-sans text-xs uppercase underline">Shop All</a>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-1 px-6 pb-12 no-scrollbar snap-x snap-mandatory">
        {items.map((item) => (
          <div key={item.id} className="min-w-[85vw] md:min-w-[30vw] flex-shrink-0 snap-center group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone mb-4">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-paper text-ink px-4 py-2 font-sans text-xs uppercase tracking-widest">
                  Quick Add
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-start border-t border-ink pt-3">
              <div className="flex flex-col">
                <span className="font-sans text-xs text-ink/50 mb-1">{item.id}</span>
                <span className="font-serif text-xl italic">{item.title}</span>
              </div>
              <span className="font-sans text-sm">{item.price}</span>
            </div>
          </div>
        ))}
        
        {/* Spacer for right padding */}
        <div className="min-w-[6rem]"></div>
      </div>
    </section>
  );
}