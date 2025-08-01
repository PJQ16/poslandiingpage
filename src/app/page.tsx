import React from 'react'

export default function HomePage() {
  return (
    <div className="w-screen min-h-screen font-sans text-gray-900 scroll-smooth">

      {/* Navbar */}
    <nav className="flex justify-between items-center bg-white/95 backdrop-blur-md shadow-lg p-6 sticky top-0 z-50 transition-all duration-300">
  <div className="text-2xl font-serif font-extrabold tracking-wider text-emerald-700 animate-fade-down">Mine Water</div>
  <div className="flex gap-8 uppercase font-medium text-sm text-gray-700">
    <a href="#hero" className="hover:text-emerald-500 transition">Home</a>
    <a href="#products" className="hover:text-emerald-500 transition">Products</a>
    <a href="#about" className="hover:text-emerald-500 transition">About</a>
    <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
  </div>
</nav>


      {/* Hero */}
     <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] px-8 py-12 overflow-hidden">
  <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in-left">
    <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-emerald-800">
      Refresh Your Life with <span className="text-emerald-500 underline decoration-dotted">Mine Water</span>
    </h1>
    <p className="text-lg text-gray-700 max-w-xl">
      Pure. Natural. Sustainable. Discover the healthiest hydration sourced from the heart of nature.
    </p>
    <a href="#products">
      <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105">
        Shop Now
      </button>
    </a>
  </div>
  <div className="flex-1 mt-10 md:mt-0 animate-fade-in">
    <img src="https://cdn.pixabay.com/photo/2016/05/07/16/52/sea-1377712_1280.jpg" alt="Bottle" className="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-emerald-200" />
  </div>
</section>


      {/* Products */}
      <section id="products" className="py-20 bg-gradient-to-b from-white via-sky-50 to-sky-100 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">Our Products</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">Choose from our range of mineral water bottles for every lifestyle and need.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in">
              <img src={`https://cdn.pixabay.com/photo/2024/06/26/07/27/ai-generated-8854229_1280.jpg`} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Mine Water {i === 2 ? 'Sparkling' : `${i === 1 ? '1L' : '500ml'}`}</h3>
              <p className="text-gray-600 my-2">{i === 2 ? 'Natural bubbles, zero sugar.' : i === 1 ? '1L for full-day hydration.' : '500ml to carry anywhere.'}</p>
              <p className="text-emerald-600 font-bold text-lg mb-3">฿{15 + i * 10}</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-full text-sm transition">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-b from-emerald-50 via-white to-green-100 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">About Mine Water</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">We believe hydration should be clean, sustainable, and good for your health. Our products are sourced from underground mineral springs.</p>
        <img src="https://cdn.pixabay.com/photo/2017/05/16/19/01/bottle-2318589_1280.jpg" alt="Nature" className="w-full max-w-5xl mx-auto rounded-lg shadow-md animate-fade-in" />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-sky-100 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">Contact Us</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">Have questions? Want bulk pricing? Reach out below.</p>
        <form className="max-w-xl mx-auto grid gap-4 text-left animate-fade-in">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" />
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-full transition transform hover:scale-105">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white text-center py-6 animate-fade-in">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mine Water Co., Ltd. All rights reserved.</p>
      </footer>

      {/* Custom Tailwind Animations */}
      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }

        .animate-fade-up {
          animation: fade-up 1s ease-out both;
        }

        .animate-fade-down {
          animation: fade-down 1s ease-out both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out both;
        }
        `}
      </style>
    </div>
  )
}
