export default function Footer() {
  return (
    <footer className="bg-paper text-ink pt-24 pb-12 px-6 border-t border-ink">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
        
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-serif text-2xl font-bold mb-6">NOIR ET BLANC</h4>
          <address className="font-sans text-xs not-italic leading-relaxed text-ink/60">
            12 Rue de la Mode<br/>
            75001 Paris, France<br/>
            <br/>
            studio@noiretblanc.com
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-xs font-bold uppercase tracking-widest mb-2">Shop</h5>
          <a href="#" className="font-serif text-lg hover:italic">New Arrivals</a>
          <a href="#" className="font-serif text-lg hover:italic">Ready to Wear</a>
          <a href="#" className="font-serif text-lg hover:italic">Accessories</a>
          <a href="#" className="font-serif text-lg hover:italic">Editorial</a>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-xs font-bold uppercase tracking-widest mb-2">Legal</h5>
          <a href="#" className="font-sans text-xs hover:underline">Privacy Policy</a>
          <a href="#" className="font-sans text-xs hover:underline">Terms of Service</a>
          <a href="#" className="font-sans text-xs hover:underline">Shipping & Returns</a>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h5 className="font-sans text-xs font-bold uppercase tracking-widest mb-4">Newsletter</h5>
          <form className="flex border-b border-ink pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none w-full focus:ring-0 placeholder:text-ink/30 font-sans text-sm"
            />
            <button className="font-sans text-xs font-bold uppercase hover:text-accent">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ink/10">
        <p className="font-sans text-[10px] uppercase tracking-widest text-ink/40">
          © 2025 Noir et Blanc. All rights reserved.
        </p>
        <p className="font-sans text-[10px] uppercase tracking-widest text-ink/40 mt-4 md:mt-0">
          Designed by Architecture
        </p>
      </div>
    </footer>
  );
}