
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90",
    title: "Your Dream Vacation",
    subtitle: "In A Tropical Paradise",
  },
  {
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=90",
    title: "Discover Paradise",
    subtitle: "Experience The Beauty Of Puerto Morelos",
  },
  {
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=2200&q=90",
    title: "Relax. Explore. Enjoy.",
    subtitle: "Make Every Moment Unforgettable",
  },
];

const photos = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
];

const amenities = [
  "2 Bedroom, one queen size, two twin beds",
  "1 Bathroom",
  "Backyard patio with hammock and grill",
  "Laundry room with washer and dryer",
  "Three air conditioners",
  "Full closets",
  "Extra storage",
];

const facilities = [
  { icon: "pool", title: "Swimming pool" },
  { icon: "court", title: "Basketball court" },
  { icon: "gym", title: "Open gym" },
  { icon: "yoga", title: "Yoga area" },
  { icon: "play", title: "Playground for children" },
  { icon: "wifi", title: "High-speed internet" },
];

const attractions = [
  ["National Reef Park of Puerto Morelos", "Visit the Mesoamerican Barrier Reef, the world's 2nd-largest coral reef."],
  ["Explore the Yucatan History", "Breathe the city's endless screening of the Maya history."],
  ["The Cenotes Route", "Delve into the city's most distinctive environmental phenomena."],
  ["Wide, Sandy, Uncrowded, and Groomed Beaches", "Unforgettable relaxation time on the pristine beaches."],
  ["The Nicklaus Design Golf Course", "Please your mind by playing golf on this beautiful course in Puerto Morelos."],
  ["Wilderness Trips", "Stay in the greenery of the forests and eco-parks away from the city."],
  ["Cruise Sunset Sailing", "A refreshing and thrilling sailing experience awaits you in Puerto Morelos."],
  ["The Leaning Lighthouse", "The leaning lighthouse on the Riviera Maya is a must-see in town."],
  ["Rodeo Arena", "Enjoy a local rodeo experience and discover the traditional culture of the area."],
];

const faqs = [
  {
    question: "How can I book?",
    answer: "Contact Maya House directly by phone or email to ask about availability and booking arrangements.",
  },
  {
    question: "What is the charge for booking at Maya House?",
    answer: "Please contact us for current rates, availability and booking information.",
  },
  {
    question: "Can I cancel a booking?",
    answer: "Please contact the Maya House team to discuss the cancellation terms associated with your reservation.",
  },
];

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    right: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    left: <><path d="M19 12H5" /><path d="m12 5-7 7 7 7" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m18 6-12 12M6 6l12 12" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6.7 6.7l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    check: <path d="m5 12 4 4L19 6" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    facebook: <path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V1.5c-.8-.1-1.8-.2-3-.2-3 0-5 1.8-5 5V9H8v4h3v8" />,
    pool: <><path d="M3 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 3-2" /><path d="M3 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 3-2" /><path d="M7 12V5a2 2 0 0 1 4 0v7M7 8h4" /></>,
    court: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16M3 12h18M7 9h1v6H7M16 9h1v6h-1" /></>,
    gym: <path d="M3 10v4M7 8v8M17 8v8M21 10v4M7 12h10" />,
    yoga: <><circle cx="12" cy="4" r="2" /><path d="M12 7v6m-5 8 5-8 5 8M4 13l8-3 8 3" /></>,
    play: <><circle cx="9" cy="5" r="2" /><circle cx="17" cy="7" r="2" /><path d="m5 20 4-8 4 3 3-4 4 9M3 12l5 2m7-3 4 2" /></>,
    wifi: <><path d="M5 9a11 11 0 0 1 14 0M8 12a7 7 0 0 1 8 0m-5 4h.01" /><circle cx="12" cy="19" r="1" /></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.arrow}
    </svg>
  );
}

function Flower({ className = "", color = "#F04B91" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={`pointer-events-none ${className}`} aria-hidden="true">
      <g stroke={color} strokeWidth="2" opacity=".55">
        <ellipse cx="50" cy="22" rx="12" ry="22" />
        <ellipse cx="50" cy="78" rx="12" ry="22" />
        <ellipse cx="22" cy="50" rx="22" ry="12" />
        <ellipse cx="78" cy="50" rx="22" ry="12" />
        <ellipse cx="30" cy="30" rx="12" ry="22" transform="rotate(-45 30 30)" />
        <ellipse cx="70" cy="30" rx="12" ry="22" transform="rotate(45 70 30)" />
        <ellipse cx="30" cy="70" rx="12" ry="22" transform="rotate(45 30 70)" />
        <ellipse cx="70" cy="70" rx="12" ry="22" transform="rotate(-45 70 70)" />
        <circle cx="50" cy="50" r="9" />
      </g>
    </svg>
  );
}

function Label({ children }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#F04B91]">
      <span className="h-[2px] w-8 rounded-full bg-[#F04B91]" />
      {children}
    </div>
  );
}

function Button({ children, href = "#contact", light = false }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-1 hover:shadow-lg ${light ? "bg-white text-[#222] hover:bg-[#FFE995]" : "bg-[#F04B91] text-white hover:bg-[#d92f7c]"}`}>
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition group-hover:rotate-45">
        <Icon name="arrow" size={14} />
      </span>
    </a>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const moveSlide = (direction) => {
    setSlide((current) => (current + direction + slides.length) % slides.length);
  };

  const navigation = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Discover", "#discover"],
    ["Amenities", "#amenities"],
    ["Attractions", "#attractions"],
    ["Gallery", "#gallery"],
  ];

  return (
    <main className="overflow-hidden bg-white font-sans text-[#222]">

      {/* TOP BAR */}
     <div className="relative z-50 bg-[#171717] px-5 py-3 text-white">
  <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 text-sm">
    <div className="flex flex-wrap items-center gap-5">
      <a
        href="mailto:info@mayahouse.com"
        className="flex items-center gap-2 text-white/80 transition hover:text-[#FFE995]"
      >
        <Icon name="mail" size={16} />
        info@mayahouse.com
      </a>

      <a
        href="tel:+5217771203037"
        className="hidden items-center gap-2 text-white/80 transition hover:text-[#FFE995] sm:flex"
      >
        <Icon name="phone" size={16} />
        +52 1 777 120 3037
      </a>
    </div>

    <div className="flex items-center gap-2">
      <a
        href="#"
        aria-label="Instagram"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F04B91] transition hover:bg-[#FFE995] hover:text-black"
      >
        <Icon name="instagram" size={16} />
      </a>

      <a
        href="#"
        aria-label="Facebook"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F04B91] transition hover:bg-[#FFE995] hover:text-black"
      >
        <Icon name="facebook" size={16} />
      </a>

      <a
        href="#gallery"
        className="ml-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-[#FFE995]"
      >
        Explore
      </a>
    </div>
  </div>
</div>

      {/* HERO CAROUSEL */}
      <section id="home" className="relative h-[560px] overflow-hidden bg-[#222] sm:h-[640px] lg:h-[700px]">
        {slides.map((item, index) => (
          <div key={item.image} className={`absolute inset-0 transition-opacity duration-1000 ${slide === index ? "opacity-100" : "pointer-events-none opacity-0"}`}>
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/55" />
          </div>
        ))}

        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full border border-white/30 lg:h-[500px] lg:w-[500px]" />
        <div className="absolute -right-12 top-36 h-72 w-72 rounded-full border border-[#FFE995]/40 lg:h-[380px] lg:w-[380px]" />
        <Flower className="absolute -left-12 bottom-16 h-44 w-44 opacity-30" color="#FFE995" />

        <header className="absolute left-0 right-0 top-0 z-30">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
            <a href="#home" className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border-[3px] border-[#FFE995] bg-[#F04B91] shadow-xl sm:h-[112px] sm:w-[112px]">
              <div className="absolute inset-2 rounded-full border border-dashed border-white/80" />
              <div className="relative text-center text-white">
                <span className="block font-sans text-3xl font-bold tracking-widest">MAYA</span>
                <span className="mt-1 block text-xs font-semibold tracking-[.25em]">HOUSE</span>
              </div>
            </a>

            <div className="hidden items-center gap-6 rounded-full border border-white/20 bg-black/20 px-6 py-3 backdrop-blur-xl lg:flex">
              {navigation.map(([label, href]) => (
                <a key={label} href={href} className="text-xs font-bold uppercase tracking-wider text-white/90 transition hover:text-[#FFE995]">{label}</a>
              ))}
              <a href="#contact" className="rounded-full bg-[#F04B91] px-6 py-3 text-xs font-bold uppercase text-white hover:bg-[#FFE995] hover:text-black">Booking</a>
            </div>

            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur-md lg:hidden">
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-4 right-4 top-full rounded-3xl bg-[#171717]/95 p-7 shadow-2xl backdrop-blur-xl lg:hidden">
              <div className="flex flex-col gap-5">
                {navigation.map(([label, href]) => (
                  <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase text-white hover:text-[#FFE995]">{label}</a>
                ))}
                <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-full bg-[#F04B91] px-5 py-3 text-center text-sm text-white">Booking</a>
              </div>
            </div>
          )}
        </header>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pt-24 text-center">
          <div key={slide} className="max-w-4xl animate-[heroIn_.8s_ease-out]">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[.25em] text-[#FFE995] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FFE995]" />
              Welcome to Maya House
            </div>
            <h1 className="font-sans text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-6xl lg:text-6xl">
              {slides[slide].title}
            </h1>
            <p className="mt-5 font-sans text-lg  text-white sm:text-xl">{slides[slide].subtitle}</p>
            <div className="mt-8"><Button href="#about" light>Discover More</Button></div>
          </div>
        </div>

        <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm hover:bg-[#F04B91] sm:left-8">
          <Icon name="left" />
        </button>
        <button type="button" onClick={() => moveSlide(1)} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm hover:bg-[#F04B91] sm:right-8">
          <Icon name="right" />
        </button>
        <div className="absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((item, index) => (
            <button key={item.image} type="button" onClick={() => setSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`h-2.5 rounded-full transition-all ${slide === index ? "w-9 bg-[#F04B91]" : "w-2.5 bg-white/80"}`} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden px-6 py-14 sm:px-10 sm:py-20">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FFE995]/35 blur-3xl" />
        <Flower className="absolute -left-10 top-10 h-40 w-40 opacity-20" />

        <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Label>About Us</Label>
            <h2 className="font-sans text-3xl leading-tight text-[#F04B91] sm:text-4xl lg:text-[40px]">
              Luxury & Comfort Our Services Wonders of Puerto Morelos
            </h2>
            <p className="mt-5 text-base leading-7 text-[#666]">
              Whether you are visiting Puerto Morelos for the day or choosing to stay, Maya House can help make your visit memorable. Located in a quaint and peaceful location of this seaport city, you will be in close proximity to the beaches, eateries, or shopping hubs.
            </p>
            <div className="mt-7"><Button href="#discover">Read More</Button></div>
          </div>

          <div className="relative grid grid-cols-12 items-center gap-3 sm:gap-4">
            <div className="col-span-5 mt-8 overflow-hidden rounded-t-[4rem] rounded-b-[1.5rem] border-[5px] border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85" alt="Coastal landscape" className="h-[260px] w-full object-cover transition duration-700 hover:scale-110 sm:h-[340px]" />
            </div>
            <div className="col-span-7 overflow-hidden rounded-[2rem] border-[5px] border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1000&q=85" alt="Local architecture" className="h-[220px] w-full object-cover transition duration-700 hover:scale-110 sm:h-[290px]" />
            </div>
            <div className="absolute -bottom-3 left-[35%] z-10 w-[48%] overflow-hidden rounded-[1.5rem] border-[5px] border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85" alt="Ocean view" className="h-[120px] w-full object-cover sm:h-[160px]" />
            </div>
            <div className="absolute -right-2 -top-4 flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-white bg-[#F04B91] text-center font-sans text-xs leading-4 text-white shadow-xl sm:h-24 sm:w-24">
              Maya<br />House
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER */}
      
<section id="discover" className="relative min-h-[390px] overflow-hidden sm:min-h-[420px]">
  <img
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90"
    alt="Caribbean beach"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Softer overlay - allows more of the image to show */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/40 to-white/5" />

  <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[35px] border-white/20" />
  <Flower className="absolute right-10 top-10 h-48 w-48 opacity-20" />

  <div className="relative mx-auto flex min-h-[390px] max-w-[1300px] items-center px-6 py-12 sm:min-h-[420px] sm:px-10">
    <div className="max-w-xl rounded-[2rem] border border-white/50 bg-white/35 p-6 shadow-[0_15px_50px_rgba(0,0,0,.08)] backdrop-blur-sm sm:p-8">
      <Label>Discover the destination</Label>

      <h2 className="font-sans text-3xl leading-tight text-[#F04B91] sm:text-4xl">
        Come, Discover Puerto Morelos, Mexico's Almost Forgotten Gem!
      </h2>

      <p className="mt-4 text-base leading-7 text-[#222]">
        Maya House is located in a gated community called Seven Essence, a quiet complex surrounded by the beautiful Mayan jungle. Only 10 minutes away from the beach by car.
      </p>

      <p className="mt-3 text-base leading-7 text-[#222]">
        Equipped with modern facilities and conveniences, it will be the perfect home for the duration of your Puerto Morelos stays.
      </p>
    </div>
  </div>
</section>


      {/* AMENITIES */}
      <section id="amenities" className="relative overflow-hidden bg-[#FAFAFA] px-6 py-14 sm:px-10 sm:py-20">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#FFE995]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative grid grid-cols-4 gap-2 rounded-[2rem] border border-white bg-white p-2.5 shadow-[0_20px_55px_rgba(0,0,0,.09)]">
            {photos.map((photo, index) => (
              <div key={photo} className={`group overflow-hidden rounded-xl ${index === 0 || index === 7 ? "col-span-2 row-span-2" : ""}`}>
                <img src={photo} alt={`Maya House accommodation ${index + 1}`} className="h-24 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-32" />
              </div>
            ))}
            <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-white bg-[#FFE995] text-center font-sans text-sm text-[#F04B91] shadow-lg">
              Feel<br />at home
            </div>
          </div>

          <div>
            <Label>Our Amenities</Label>
            <h2 className="font-sans text-3xl text-[#F04B91] sm:text-4xl">Comfort & Convenience</h2>
            <p className="mt-3 text-base leading-7 text-[#777]">Thoughtfully equipped spaces and practical comforts for a relaxing stay.</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {amenities.map((item, index) => (
                <div key={item} className="group flex items-center gap-3 rounded-xl border border-[#eee] bg-white p-3 transition hover:-translate-y-1 hover:border-[#F04B91]/40 hover:shadow-md">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFE995] text-[#F04B91] transition group-hover:bg-[#F04B91] group-hover:text-white">
                    <Icon name={index % 2 === 0 ? "check" : "arrow"} size={15} />
                  </span>
                  <span className="text-sm leading-5 text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
    
{/* PREMIUM FACILITIES SECTION */}
<section className="relative isolate overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-10 sm:py-20 lg:py-24">

  {/* Background image */}
  <img
    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=90"
    alt="Beautiful tropical ocean"
    className="absolute inset-0 -z-30 h-full w-full object-cover"
  />

  {/* Layered overlays */}
  <div className="absolute inset-0 -z-20 bg-[#171717]/75" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#171717]/90 via-[#171717]/65 to-[#F04B91]/25" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

  {/* Decorative circles */}
  <div className="pointer-events-none absolute -left-36 top-10 h-[380px] w-[380px] rounded-full border border-white/10" />
  <div className="pointer-events-none absolute -left-24 top-20 h-[280px] w-[280px] rounded-full border border-[#FFE995]/20" />
  <div className="pointer-events-none absolute -right-28 bottom-0 h-[450px] w-[450px] rounded-full border border-white/10" />
  <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#F04B91]/10 blur-[100px]" />

  <Flower
    className="pointer-events-none absolute -right-10 top-12 h-52 w-52 rotate-12 opacity-30"
    color="#FFE995"
  />

  <div className="relative mx-auto max-w-[1300px]">

    {/* SECTION HEADING */}
    <div className="mb-12 grid items-end gap-7 lg:grid-cols-[1fr_.7fr]">

      <div>
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#FFE995]/30 bg-white/10 px-5 py-2.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#F04B91] shadow-[0_0_12px_#F04B91]" />
          <span className="text-xs font-bold uppercase tracking-[.25em] text-[#FFE995]">
            The Building Complex Offers
          </span>
        </div>

        <h2 className="max-w-2xl font-sans text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[56px]">
          More Than Just
          <span className="relative ml-3 inline-block text-[#FFE995]">
            A Stay.
            <span className="absolute -bottom-2 left-0 h-[3px] w-[75%] rounded-full bg-[#F04B91]" />
          </span>
          <br />
          A Complete Experience.
        </h2>
      </div>

      <div className="max-w-md lg:justify-self-end">
        <p className="text-sm leading-7 text-white/70 sm:text-base">
          Enjoy thoughtfully designed shared spaces and facilities that bring
          comfort, recreation and relaxation together throughout your stay.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#F04B91]" />
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[#FFE995]">
            Discover the facilities
          </span>
        </div>
      </div>
    </div>

    {/* FACILITY CARDS */}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">

      {facilities.map((item, index) => (
        <div
          key={item.title}
          className={`group relative isolate flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/20 bg-white/[0.09] p-5 shadow-[0_15px_45px_rgba(0,0,0,.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FFE995]/70 hover:bg-[#F04B91]/85 hover:shadow-[0_20px_55px_rgba(240,75,145,.2)] sm:min-h-[220px] sm:rounded-[2rem] sm:p-7`}
        >

          {/* Oversized decorative number */}
          <span className="pointer-events-none absolute -right-2 -top-7 -z-10 font-sans text-[100px] font-bold leading-none text-white/[.055] transition-all duration-500 group-hover:scale-110 group-hover:text-white/15 sm:text-[125px]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Decorative corner */}
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] border-b border-l border-white/10 transition-all duration-500 group-hover:border-white/30" />

          {/* Icon */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFE995]/50 bg-[#FFE995]/10 text-[#FFE995] shadow-inner transition-all duration-500 group-hover:rotate-6 group-hover:border-white group-hover:bg-white group-hover:text-[#F04B91] sm:h-[66px] sm:w-[66px] sm:rounded-[1.4rem]">
              <Icon name={item.icon} size={29} />
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[#F04B91]">
              <Icon name="arrow" size={15} />
            </div>
          </div>

          {/* Card title */}
          <div className="relative z-10 mt-8">
            <div className="mb-3 h-[2px] w-8 rounded-full bg-[#F04B91] transition-all duration-500 group-hover:w-14 group-hover:bg-[#FFE995]" />

            <h3 className="max-w-[190px] text-sm font-semibold leading-6 text-white sm:text-lg">
              {item.title}
            </h3>
          </div>

          {/* Bottom glow */}
          <div className="pointer-events-none absolute -bottom-16 -right-12 h-32 w-32 rounded-full bg-[#FFE995]/10 blur-2xl transition-all duration-500 group-hover:bg-white/20" />
        </div>
      ))}

    </div>

    {/* BOTTOM DECORATIVE STRIP */}
    <div className="mt-9 flex flex-col items-center justify-between gap-5 border-t border-white/15 pt-7 sm:flex-row">

      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <span className="h-8 w-8 rounded-full border-2 border-[#171717] bg-[#F04B91]" />
          <span className="h-8 w-8 rounded-full border-2 border-[#171717] bg-[#FFE995]" />
          <span className="h-8 w-8 rounded-full border-2 border-[#171717] bg-white" />
        </div>
        <p className="text-xs tracking-wide text-white/65">
          Comfort, recreation & relaxation
        </p>
      </div>

      <a
        href="#contact"
        className="group inline-flex items-center gap-3 rounded-full border border-[#FFE995]/50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#FFE995] transition-all duration-300 hover:border-[#F04B91] hover:bg-[#F04B91] hover:text-white"
      >
        Plan Your Stay
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <Icon name="right" size={15} />
        </span>
      </a>

    </div>
  </div>
</section>


     
{/* ================= ATTRACTIONS SECTION ================= */}
<section
  id="attractions"
  className="relative isolate overflow-hidden bg-[#FAF8F6] px-5 py-16 sm:px-10 sm:py-20"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#FFE995]/35 blur-[90px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F04B91]/10 blur-[100px]" />

  <Flower
    className="absolute -left-12 top-10 h-48 w-48 opacity-20"
    color="#F04B91"
  />

  <div className="relative mx-auto max-w-[1350px]">

    {/* Heading */}
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <Label>Explore Puerto Morelos</Label>

        <h2 className="font-sans text-3xl leading-[1.15] text-[#222] sm:text-4xl lg:text-[48px]">
          Discover Places.
          <span className="text-[#F04B91]"> Create Memories.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-7 text-[#777]">
        From beautiful beaches and underwater adventures to fascinating
        local attractions, explore everything Puerto Morelos has to offer.
      </p>
    </div>

    {/* Main content */}
    <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">

      {/* Attractions list */}
      <div className="grid content-start gap-3 sm:grid-cols-2">
        {attractions.map(([title, description], index) => (
          <div
            key={title}
            className="group relative flex gap-3 overflow-hidden rounded-2xl border border-[#eee] bg-white p-4 shadow-[0_5px_25px_rgba(0,0,0,.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F04B91]/40 hover:shadow-[0_12px_30px_rgba(240,75,145,.10)]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFE995] font-sans text-sm font-bold text-[#222] transition-all duration-300 group-hover:bg-[#F04B91] group-hover:text-white">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-5 text-[#252525] transition group-hover:text-[#F04B91]">
                {title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-[#888]">
                {description}
              </p>
            </div>

            <span className="absolute -bottom-5 -right-4 h-16 w-16 rounded-full bg-[#FFE995]/0 transition-all duration-300 group-hover:bg-[#FFE995]/50" />
          </div>
        ))}
      </div>

      {/* Large photo composition */}
      <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#222] shadow-[0_20px_55px_rgba(0,0,0,.13)] sm:min-h-[500px]">

        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=90"
          alt="Beautiful coastal landscape"
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

        {/* Decorative rings */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/30" />
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#FFE995]/40" />

        <Flower
          className="absolute right-7 top-16 h-28 w-28 opacity-40"
          color="#FFE995"
        />

        {/* Floating mini image */}
        <div className="absolute right-5 top-5 w-[37%] overflow-hidden rounded-2xl border-[4px] border-white shadow-2xl sm:right-7 sm:top-7">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85"
            alt="Underwater adventure"
            className="h-24 w-full object-cover sm:h-32"
          />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
          <span className="mb-4 inline-flex rounded-full border border-[#FFE995]/40 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#FFE995] backdrop-blur-md">
            Your next adventure awaits
          </span>

          <h3 className="max-w-md font-sans text-3xl leading-tight text-white sm:text-4xl">
            Experience the Beauty of Puerto Morelos
          </h3>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F04B91]" />
            <span className="text-xs font-bold uppercase tracking-[.2em] text-white/80">
              Explore More
            </span>
          </div>
        </div>

        {/* Round decorative badge */}
        <div className="absolute bottom-7 right-6 flex h-[76px] w-[76px] rotate-12 items-center justify-center rounded-full border-[4px] border-white bg-[#F04B91] text-center font-sans text-xs leading-4 text-white shadow-xl sm:bottom-9 sm:right-9">
          Discover<br />More
        </div>
      </div>
    </div>
  </div>
</section>


{/* ================= BOOKING CTA SECTION ================= */}
<section
  className="relative isolate overflow-hidden bg-[#F04B91] px-5 py-12 sm:px-10 sm:py-14"
>
  {/* Decorative background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F04B91] via-[#ed438b] to-[#d9367b]" />

  <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full border border-white/20" />
  <div className="pointer-events-none absolute -left-10 -top-20 h-60 w-60 rounded-full border border-[#FFE995]/40" />
  <div className="pointer-events-none absolute -right-24 -bottom-44 h-[420px] w-[420px] rounded-full border border-white/20" />
  <div className="pointer-events-none absolute right-10 top-0 h-60 w-60 rounded-full bg-[#FFE995]/15 blur-[80px]" />

  <Flower
    className="absolute right-[25%] top-0 h-32 w-32 opacity-20"
    color="#FFE995"
  />

  <div className="relative mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-8 md:flex-row">

    <div className="max-w-2xl text-center md:text-left">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-white backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#FFE995]" />
        Your tropical getaway starts here
      </div>

      <h2 className="font-sans text-3xl leading-tight text-white sm:text-4xl lg:text-[48px]">
        Ready to Experience
        <span className="text-[#FFE995]"> Maya House?</span>
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
        For advance booking or enquiry, get in touch with us and start
        planning your stay in beautiful Puerto Morelos.
      </p>
    </div>

    <div className="relative shrink-0">
      <div className="absolute -inset-3 rounded-full border border-[#FFE995]/50" />

      <a
        href="tel:+5217771203037"
        className="group relative flex items-center gap-4 rounded-full bg-[#FFE995] py-3 pl-6 pr-3 text-[#222] shadow-[0_15px_35px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
      >
        <div>
          <span className="block text-xs font-bold uppercase tracking-[.16em] text-[#777]">
            Call us today
          </span>
          <span className="mt-1 block text-sm font-bold sm:text-base">
            +52 1 777 120 3037
          </span>
        </div>

        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F04B91] text-white transition group-hover:rotate-45">
          <Icon name="arrow" size={19} />
        </span>
      </a>
    </div>
  </div>
</section>


{/* ================= FAQ SECTION ================= */}
<section
  className="relative isolate overflow-hidden bg-[#FFF9E9] px-5 py-16 sm:px-10 sm:py-20"
>
  {/* Background shapes */}
  <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#FFE995]/60 blur-[80px]" />
  <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#F04B91]/10 blur-[90px]" />

  <Flower
    className="absolute -right-12 top-10 h-48 w-48 opacity-20"
    color="#F04B91"
  />

  <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

    {/* FAQ introduction */}
    <div className="relative">
      <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#F04B91]/20" />

      <div className="relative">
        <Label>We're Here to Help</Label>

        <h2 className="max-w-md font-sans text-4xl leading-[1.15] text-[#222] sm:text-5xl">
          Have Questions?
          <span className="block text-[#F04B91]">
            We've Got Answers.
          </span>
        </h2>

        <p className="mt-5 max-w-sm text-sm leading-7 text-[#777]">
          Everything you need to know before planning your stay at Maya House.
          Find answers to some of our frequently asked questions.
        </p>

        {/* Decorative information card */}
        <div className="mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-[#F04B91]/15 bg-white/75 p-4 shadow-[0_10px_35px_rgba(0,0,0,.04)]">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F04B91] text-white">
            <Icon name="mail" size={21} />
          </div>

          <div>
            <p className="text-sm font-bold text-[#222]">
              Still have questions?
            </p>
            <a
              href="mailto:info@mayahouse.com"
              className="mt-1 text-xs text-[#F04B91] transition hover:text-[#222]"
            >
              Contact our team
            </a>
          </div>

          <span className="ml-auto text-[#F04B91]">
            <Icon name="arrow" size={18} />
          </span>
        </div>
      </div>
    </div>

    {/* Accordion */}
    <div className="relative rounded-[2rem] border border-white bg-white/75 p-4 shadow-[0_20px_60px_rgba(0,0,0,.07)] backdrop-blur-md sm:p-6">

      <div className="mb-4 flex items-center justify-between px-2">
        <h3 className="font-sans text-xl text-[#222]">
          Frequently Asked Questions
        </h3>

        <span className="rounded-full bg-[#FFE995] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#222]">
          Help Center
        </span>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index;

          return (
            <div
              key={faq.question}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#F04B91]/40 bg-[#FFF9FB] shadow-[0_8px_25px_rgba(240,75,145,.08)]"
                  : "border-[#eee] bg-white hover:border-[#F04B91]/30"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveFaq(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-sans text-sm font-bold transition ${
                    isOpen
                      ? "bg-[#F04B91] text-white"
                      : "bg-[#FFE995] text-[#222]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-sm font-bold leading-6 text-[#292929] sm:text-base">
                  {faq.question}
                </span>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-[#F04B91] text-white"
                      : "bg-[#FFF2C4] text-[#F04B91]"
                  }`}
                >
                  <Icon name={isOpen ? "minus" : "plus"} size={16} />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-[#F04B91]/10 px-4 pb-5 pt-4 pl-[4.4rem] text-sm leading-7 text-[#777] sm:pl-[4.8rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#999]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F04B91]" />
        We're happy to help you plan your stay
      </div>
    </div>
  </div>
</section>


      {/* GALLERY */}
    
<section id="gallery" className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14">
  <div className="mx-auto max-w-[1600px]">
    <div className="mb-7 flex items-end justify-between">
      <div>
        <Label>Photo Gallery</Label>
        <h2 className="font-sans text-3xl text-[#222] sm:text-4xl">
          Explore Maya House
        </h2>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() =>
            setGalleryIndex((galleryIndex - 1 + photos.length) % photos.length)
          }
          aria-label="Previous gallery images"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eee] text-[#F04B91] transition hover:bg-[#F04B91] hover:text-white"
        >
          <Icon name="left" size={16} />
        </button>

        <button
          type="button"
          onClick={() =>
            setGalleryIndex((galleryIndex + 1) % photos.length)
          }
          aria-label="Next gallery images"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eee] text-[#F04B91] transition hover:bg-[#F04B91] hover:text-white"
        >
          <Icon name="right" size={16} />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {Array.from({ length: 8 }, (_, index) => {
        const photo = photos[(galleryIndex + index) % photos.length];

        return (
          <div
            key={`${photo}-${index}`}
            className="group relative overflow-hidden rounded-2xl border-[3px] border-white shadow-lg"
          >
            <img
              src={photo}
              alt={`Maya House gallery ${index + 1}`}
              className="h-40 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-56 lg:h-64 xl:h-72"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer id="contact" className="relative overflow-hidden bg-[#111111] px-6 py-14 text-white sm:px-10 sm:py-16">
        <Flower className="absolute -right-12 -top-12 h-56 w-56 opacity-15" color="#FFE995" />
        <div className="relative mx-auto grid max-w-[1300px] gap-9 sm:grid-cols-2 lg:grid-cols-[1fr_.8fr_.8fr_1.2fr]">
          <div>
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#FFE995] bg-[#F04B91] shadow-lg">
              <div className="text-center font-sans">
                <p className="text-xl font-bold tracking-widest">MAYA</p>
                <p className="text-xs tracking-[.25em]">HOUSE</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Maya House is located in a gated community in a quiet complex surrounded by the beautiful Mayan jungle.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F04B91] transition hover:bg-[#FFE995] hover:text-black"><Icon name="instagram" size={15} /></a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F04B91] transition hover:bg-[#FFE995] hover:text-black"><Icon name="facebook" size={15} /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#F04B91]">Access</h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              {navigation.slice(0, 4).map(([label, href]) => <a key={label} href={href} className="transition hover:translate-x-1 hover:text-[#FFE995]">{label}</a>)}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#F04B91]">Information</h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#amenities" className="hover:text-[#FFE995]">Amenities</a>
              <a href="#attractions" className="hover:text-[#FFE995]">Attractions</a>
              <a href="#gallery" className="hover:text-[#FFE995]">Gallery</a>
              <a href="#contact" className="hover:text-[#FFE995]">Contact</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[#F04B91]/60 bg-white p-1.5 shadow-xl">
            <iframe title="Puerto Morelos map" src="https://maps.google.com/maps?q=Puerto%20Morelos%20Mexico&t=&z=13&ie=UTF8&iwloc=&output=embed" className="h-[200px] w-full rounded-[1.1rem]" loading="lazy" />
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-[1300px] flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/40 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} Maya House. All Rights Reserved.</p>
          <a href="#home" className="transition hover:text-[#F04B91]">Back to top ↑</a>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <a href="#home" aria-label="Back to top" className="fixed bottom-6 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#F04B91] text-xl text-white shadow-xl transition hover:-translate-y-1 hover:bg-black">↑</a>

      <a
        href="https://wa.me/5217771203037"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-[#25D366] text-white shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16.02 3C8.85 3 3.02 8.82 3.02 15.99c0 2.29.6 4.53 1.74 6.51L3 29l6.68-1.75a13 13 0 0 0 6.34 1.65h.01c7.17 0 13-5.83 13-13S23.19 3 16.02 3zm0 23.7h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.67 10.67 0 0 1-1.64-5.76c0-5.89 4.79-10.68 10.68-10.68 2.85 0 5.53 1.11 7.54 3.13a10.62 10.62 0 0 1 3.13 7.55c0 5.89-4.79 10.71-10.7 10.71zm5.86-8.01c-.32-.16-1.9-.94-2.19-1.05-.29-.1-.51-.16-.72.16-.21.32-.83 1.05-1.01 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.42 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </a>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #fff;
          color: #222;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        ::selection {
          background: #f04b91;
          color: #fff;
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          scroll-margin-top: 24px;
        }

        img {
          display: block;
        }

        a,
        button {
          -webkit-tap-highlight-color: transparent;
        }

        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #f04b91;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
