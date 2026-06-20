"use client";
import { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaSearch } from 'react-icons/fa';

export default function Page() {

  const THEME_KEY = 'kijeda_theme';

  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme on first client render (persisted + correct initial state)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedTheme = window.localStorage?.getItem(THEME_KEY);
    const htmlTheme = document.documentElement.getAttribute('data-theme');

    // Prefer saved theme; otherwise keep existing <html data-theme>
    const theme = savedTheme || htmlTheme || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body?.setAttribute('data-theme', theme);

    // Avoid setState if not necessary
    setDarkMode((prev) => (prev === (theme === 'forest') ? prev : theme === 'forest'));
  }, []);


  const toggleTheme = () => {
    if (typeof document === 'undefined') return;

    // Derive current theme from DOM to avoid stale React state issues
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = current === 'forest' ? 'light' : 'forest';

    document.documentElement.setAttribute('data-theme', nextTheme);
    document.body?.setAttribute('data-theme', nextTheme);

    setDarkMode(nextTheme === 'forest');

    if (typeof window !== 'undefined') {
      window.localStorage?.setItem(THEME_KEY, nextTheme);
    }
  };

  const reviews = [
    { name: "Sarah Mitchell", country: "United Kingdom", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", stars: 5, text: "Absolutely incredible experience! Our guide was knowledgeable, passionate, and made us feel safe throughout the Serengeti safari. Kijeda Tour exceeded every expectation." },
    { name: "James Okonkwo", country: "Nigeria", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", stars: 5, text: "The Zanzibar package was a dream. Stone Town, Nungwi Beach — everything was perfectly organized. I will definitely be back with my family." },
    { name: "Anika Müller", country: "Germany", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", stars: 5, text: "Climbing Kilimanjaro with Kijeda Tour was the best decision of my life. Professional crew, great gear, and constant encouragement all the way to the summit." },
    { name: "Carlos Rivera", country: "Spain", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", stars: 5, text: "Kigamboni Beach day trip was so relaxing and well-organized. The fresh seafood they arranged for us was unforgettable. Highly recommend!" },
    { name: "Fatima Al-Hassan", country: "UAE", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", stars: 5, text: "From booking to departure, the team at Kijeda Tour was responsive and professional. The Ngorongoro Crater tour left us speechless." },
  ];

  const [current, setCurrent] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <div className="w-full">

      {/* ── Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1A3C34] text-white hidden sm:flex justify-between items-center text-xs h-9 px-4 sm:px-6 md:px-16">
        {/* Left — contact links */}
        <div className="flex items-center gap-8">
          <a href="tel:+255773753292" className="flex items-center gap-2 hover:text-emerald-300 transition-colors duration-200 tracking-wide">
            <span className="phone-ring"><FaPhone className="text-sm rotate-[135deg]" /></span>
            +255 773 753 292
          </a>
          <span className="text-white/20">|</span>
          <a href="https://wa.me/255773753292?text=Habari%20Kijeda%20Tour!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-300 transition-colors duration-200 tracking-wide">
            <FaWhatsapp className="text-sm" />
            WhatsApp
          </a>
        </div>

        {/* Right — empty now, theme moved to navbar */}
        <div></div>
      </div>

      {/* ── Navbar ── */}
      <div className="fixed top-9 left-0 right-0 z-50 navbar bg-base-100 shadow-md px-4 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow bg-base-100 rounded-box w-72 max-w-[85vw] overflow-hidden border border-base-200">
              <li><a href="/" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Home</a></li>
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors duration-300 ease-in-out">Our Tours</a>
                <ul className="p-2">
                  <li><a href="/#dar-tour" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Dar-es-salaam tour</a></li>
                  <li><a href="/#zanzibar-tour" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Zanzibar tour</a></li>
                </ul>
              </li>
              <li><a href="/#why-kijeda" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Why Us</a></li>
              <li><a href="/#destinations" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Destinations</a></li>
              <li><a href="/#faq" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">FAQ</a></li>
              <li><a href="/#reviews" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Reviews</a></li>
            </ul>
          </div>
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-xl font-extrabold text-amber-800 tracking-tight">Kijeda Tour &</span>
              <span className="text-[10px] sm:text-xs font-medium text-amber-600 tracking-widest uppercase">Safaris</span>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a href="/" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Home</a></li>
            <li>
              <details>
                <summary className="hover:text-amber-700 transition-colors duration-300 ease-in-out">Our Tours</summary>
                <ul className="p-2 w-48 z-10 bg-base-100 shadow-lg">
                  <li><a href="/#dar-tour" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Dar-es-salaam tour</a></li>
                  <li><a href="/#zanzibar-tour" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Zanzibar tour</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/#why-kijeda" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Why Us</a></li>
            <li><a href="/#destinations" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Destinations</a></li>
            <li><a href="/#faq" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">FAQ</a></li>
            <li><a href="/#reviews" className="hover:text-amber-700 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-amber-700 underline-offset-4">Reviews</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {/* Search Bar */}
          <div className="relative group">
            <div className="flex items-center bg-gray-100 rounded-full border border-transparent overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all duration-300">
              <div className="pl-4 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                <FaSearch size={14} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tour..."
                className="bg-transparent py-2 px-3 outline-none border-none ring-0 text-sm w-32 md:w-40 placeholder:text-gray-400"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm font-semibold transition-all duration-300 active:scale-95">
                Search
              </button>
            </div>
          </div>
          {/* Theme Toggle — icon only, far right */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 mr-3"
            title={darkMode ? 'Switch to Light' : 'Switch to Dark'}
          >
            {darkMode ? (
              <svg className="h-6 w-6 fill-current text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center mt-24">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/Videos/Herous-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Discover the Magic of Tanzania
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
            Kijeda Tour — Your Swahili Safari Gateway
          </p>
        </div>
      </div>

      {/* ── Why Choose Kijeda Tour ── */}
      <section id="why-kijeda" className="bg-[#f5f5f0] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3 section-heading">Why Choose Kijeda Tour</h1>
          <p className="text-gray-400 text-base">Authentic experiences, expert local guides, and sustainable adventures across Tanzania.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-b-4 hover:border-amber-600 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#f5e8de] flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">🧭</div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">Expert Guides</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Our local Tanzanian guides bring decades of experience, sharing hidden stories and unmatched wildlife tracking skills.</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-b-4 hover:border-amber-600 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#f5e8de] flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">🗺️</div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">Customized Itineraries</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Every traveler is unique. We tailor our tours to match your pace, interests, and desire for discovery.</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-b-4 hover:border-amber-600 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#f5e8de] flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">🌿</div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">Sustainable Travel</h2>
            <p className="text-gray-500 text-sm leading-relaxed">We prioritize eco-friendly lodges and conservation-focused routes to preserve Tanzania&apos;s natural heritage.</p>
          </div>
        </div>
      </section>

      {/* ── Dar es Salaam Tours ── */}
      <section id="dar-tour" className="bg-[#f5f5f0] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 section-heading">Dar es Salaam Tours</h2>
          <p className="text-gray-400 text-base">Discover the best of Dar es Salaam — pristine beaches, tropical islands, and unforgettable city experiences.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&q=80" alt="Kilimanjaro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ Siku 7</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Kilimanjaro Expedition</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Panda kilele cha juu zaidi Afrika kupitia njia nzuri ya Machame.</p>
              <a href="https://wa.me/255773753292?text=Habari%20Kijeda%20Tour!%20Ninapenda%20kujua%20zaidi%20kuhusu%20Kilimanjaro%20Expedition." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" alt="Kigamboni Beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ Siku 1</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Kigamboni Beach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Jua, mchanga, na samaki wa bahari — fukwe nzuri ya Dar es Salaam.</p>
              <a href="https://wa.me/255773753292?text=Habari%20Kijeda%20Tour!%20Ninapenda%20kujua%20zaidi%20kuhusu%20Kigamboni%20Beach." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80" alt="Bongoyo Island" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ Siku 1</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Bongoyo Island</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Kisiwa cha bahari karibu na Dar — snorkeling, mapumziko, na utulivu.</p>
              <a href="https://wa.me/255773753292?text=Habari%20Kijeda%20Tour!%20Ninapenda%20kujua%20zaidi%20kuhusu%20Bongoyo%20Island." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="Mlimani City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ Nusu siku</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Mlimani City</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Nunua, kula, na pumzika kwenye kituo kikubwa cha burudani Dar es Salaam.</p>
              <a href="https://wa.me/255773753292?text=Habari%20Kijeda%20Tour!%20Ninapenda%20kujua%20zaidi%20kuhusu%20Mlimani%20City." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zanzibar Tours ── */}
      <section id="zanzibar-tour" className="bg-[#f5f5f0] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 section-heading">Zanzibar Tours</h2>
          <p className="text-gray-400 text-base">Explore the Spice Island — from powder-white beaches and turquoise lagoons to the ancient streets of Stone Town.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80" alt="Nungwi Beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ 3 days</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Nungwi Beach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Powder-white sand and the Indian Ocean&apos;s most stunning sunsets.</p>
              <a href="https://wa.me/255773753292?text=Hello%20Kijeda%20Tour!%20I%20am%20interested%20in%20the%20Nungwi%20Beach%20tour." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80" alt="Stone Town" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ 2 days</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Stone Town</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Wander spice-scented alleys and centuries of Swahili history.</p>
              <a href="https://wa.me/255773753292?text=Hello%20Kijeda%20Tour!%20I%20am%20interested%20in%20the%20Stone%20Town%20tour." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&q=80" alt="Kendwa Beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ 3 days</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Kendwa Beach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Relax on Zanzibar&apos;s finest beach with crystal-clear waters.</p>
              <a href="https://wa.me/255773753292?text=Hello%20Kijeda%20Tour!%20I%20am%20interested%20in%20the%20Kendwa%20Beach%20tour." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80" alt="Paje Lagoon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <span className="absolute top-3 left-3 bg-[#1A3C34] text-white text-xs font-semibold px-3 py-1 rounded-full">⏱ 2 days</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-[#1A3C34]">Paje Lagoon</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Kitesurf paradise where the lagoon meets endless turquoise.</p>
              <a href="https://wa.me/255773753292?text=Hello%20Kijeda%20Tour!%20I%20am%20interested%20in%20the%20Paje%20Lagoon%20tour." target="_blank" rel="noopener noreferrer" className="mt-auto text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors duration-200">Book this tour ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section id="destinations" className="bg-[#f5f5f0] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 section-heading">Destinations</h2>
          <p className="text-gray-400 text-base">Explore Tanzania&apos;s greatest wildlife parks, natural wonders, and cultural landmarks.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" alt="Serengeti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Wildlife</span>
            <div className="absolute bottom-5 left-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">📍 Tanzania</p>
              <h3 className="text-white text-2xl font-bold leading-tight">Serengeti National Park</h3>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80" alt="Ngorongoro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Natural Wonder</span>
            <div className="absolute bottom-5 left-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">📍 Tanzania</p>
              <h3 className="text-white text-2xl font-bold leading-tight">Ngorongoro Crater</h3>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=800&q=80" alt="Tarangire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Elephants</span>
            <div className="absolute bottom-5 left-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">📍 Tanzania</p>
              <h3 className="text-white text-2xl font-bold leading-tight">Tarangire National Park</h3>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=800&q=80" alt="Maasai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Culture</span>
            <div className="absolute bottom-5 left-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">📍 Tanzania</p>
              <h3 className="text-white text-2xl font-bold leading-tight">Maasai Cultural Visit</h3>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80" alt="Elephant Kingdom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Safari</span>
            <div className="absolute bottom-5 left-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">📍 Tanzania</p>
              <h3 className="text-white text-2xl font-bold leading-tight">Elephant Kingdom</h3>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80" alt="Mount Kilimanjaro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Trekking</span>
            <div className="absolute bottom-5 left-5">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">📍 Tanzania</p>
              <h3 className="text-white text-2xl font-bold leading-tight">Mount Kilimanjaro</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#f5f5f0] py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 section-heading">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-base">Everything you need to know before booking your Tanzania adventure.</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-gray-800">How do I book a tour with Kijeda Tour?</div>
            <div className="collapse-content text-sm text-gray-500">Simply click &quot;Book this tour&quot; on any tour card and you will be connected directly to our WhatsApp. Our team will guide you through the booking process.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-800">What is included in the tour price?</div>
            <div className="collapse-content text-sm text-gray-500">Tour prices typically include transport, a professional guide, and park entry fees. Accommodation and meals may vary by package — contact us for full details.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-800">Can I customize my tour itinerary?</div>
            <div className="collapse-content text-sm text-gray-500">Yes! We specialize in customized itineraries. Just let us know your interests, group size, and preferred dates and we will tailor the perfect experience for you.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-800">What is the best time to visit Tanzania?</div>
            <div className="collapse-content text-sm text-gray-500">The best time for wildlife safaris is during the dry seasons: June–October and January–February. For Zanzibar beaches, June–October offers the best weather.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-800">Is Tanzania safe for tourists?</div>
            <div className="collapse-content text-sm text-gray-500">Tanzania is generally a very safe destination for tourists. Kijeda Tour ensures all our routes and accommodations meet the highest safety standards for a worry-free experience.</div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-gray-800">Do I need a visa to visit Tanzania?</div>
            <div className="collapse-content text-sm text-gray-500">Most nationalities require a visa to enter Tanzania. You can apply online via the Tanzania e-visa portal before your trip. Our team can advise you through the process.</div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="bg-[#f5f5f0] py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3 section-heading">What Our Travelers Say</h2>
          <p className="text-gray-400 text-base">Real stories from real adventurers who explored Tanzania with us.</p>
        </div>
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white rounded-2xl px-10 py-10 flex flex-col items-center text-center gap-5 shadow-sm min-h-[320px] transition-all duration-500">
            <img src={reviews[current].image} alt={reviews[current].name} className="w-20 h-20 rounded-full object-cover border-4 border-amber-100 shadow" />
            <div className="flex gap-1">
              {Array.from({ length: reviews[current].stars }).map((_, i) => (
                <span key={i} className="text-amber-500 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-base leading-relaxed italic">&ldquo;{reviews[current].text}&rdquo;</p>
            <div>
              <p className="font-bold text-gray-800">{reviews[current].name}</p>
              <p className="text-gray-400 text-sm">{reviews[current].country}</p>
            </div>
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-11 h-11 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:bg-amber-700 hover:text-white transition-colors duration-200">‹</button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-11 h-11 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:bg-amber-700 hover:text-white transition-colors duration-200">›</button>
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-700 w-6' : 'bg-gray-300 w-2.5'}`} />
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
}
