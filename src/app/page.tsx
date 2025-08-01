import React from 'react'

export default function HomePage() {
  return (
    <div className="w-screen min-h-screen font-sans text-gray-900 scroll-smooth">

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white/95 backdrop-blur-md shadow-lg p-6 sticky top-0 z-50 transition-all duration-300">
        <div className="text-2xl font-serif font-extrabold tracking-wider text-red-600 animate-fade-down">FoodPOS</div>
        <div className="flex gap-8 uppercase font-medium text-sm text-gray-700">
          <a href="#hero" className="hover:text-red-500 transition">Home</a>
          <a href="#features" className="hover:text-red-500 transition">Features</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-red-50 to-white px-8 py-12 overflow-hidden">
        <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in-left">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-red-700">
            Manage Your <span className="text-red-500 underline decoration-dotted">Restaurant POS</span> Effortlessly
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Streamline orders, manage inventory, and boost your restaurant’s efficiency with our all-in-one POS system.
          </p>
          <a href="#features">
            <button className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105">
              Learn More
            </button>
          </a>
        </div>
        <div className="flex-1 mt-10 md:mt-0 animate-fade-in">
          <img src="/images/taco.png" alt="Restaurant POS" className="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-red-200" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-white via-red-50 to-red-100 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">Features</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">Everything you need to run your restaurant smoothly, from order taking to inventory tracking.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {[{
            title: 'Order Management',
            description: 'Quickly take and customize orders with an intuitive interface.',
            img: '/images/pizza.png'
          }, {
            title: 'Inventory Tracking',
            description: 'Keep track of ingredients and supplies in real-time.',
            img: '/images/kebab.png'
          }, {
            title: 'Sales Reports',
            description: 'Analyze your sales data to make better business decisions.',
            img: '/images/spaghetti.png'
          }].map(({title, description, img}, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in">
              <img src={img} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 my-2">{description}</p>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm transition">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
<section id="about" className="py-20 bg-gradient-to-b  from-red-50 via-white to-red-100 text-center">
  <h2 className="text-4xl font-bold mb-6 animate-fade-up">About Our POS System</h2>
  <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-6">
    Our restaurant POS system is designed to streamline your operations, improve order accuracy, and enhance customer satisfaction.
    Built with modern technology, it supports seamless integration across multiple devices.
  </p>
  <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
    <strong>Mobile Friendly:</strong> Our app works smoothly on both <span className="font-semibold">iOS</span> and <span className="font-semibold">Android</span> devices, allowing you to take orders and manage your restaurant anytime, anywhere.
  </p>
  <img src="/images/burger.png" alt="POS System" className="w-full max-w-5xl mx-auto rounded-lg shadow-md animate-fade-in" />
</section>


      {/* Contact */}
      <section id="contact" className="py-20 bg-red-100 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-up">Contact Us</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">Have questions or want to schedule a demo? Contact us below.</p>
        <form className="max-w-xl mx-auto grid gap-4 text-left animate-fade-in">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" />
          <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full transition transform hover:scale-105">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-6 animate-fade-in">
        <p className="text-sm">&copy; {new Date().getFullYear()} FoodPOS Co., Ltd. All rights reserved.</p>
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
