import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import puppiesData from '../data/puppiesData';

export default function PuppyDetailPage() {
  const { slug } = useParams();
  const cleanSlug = (slug || '').replace('.html', '');
  const puppy = puppiesData[cleanSlug] || puppiesData['korean-teacup-pomeranian-male'] || Object.values(puppiesData)[0];

  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = `${puppy.title} | TeddyPups U.A.E.`;
    window.scrollTo(0, 0);
    setActivePhoto(0);
  }, [cleanSlug]);

  const photos = puppy.images && puppy.images.length > 0 ? puppy.images : [
    { src: '/_next/image.url_2Fbrand_2Flogo.png_w_128_q_75.png', alt: puppy.title }
  ];

  const currentPhoto = photos[activePhoto] || photos[0];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActivePhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActivePhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <main id="main" tabIndex="-1" className="relative pt-[var(--header-h)] outline-none">
      <div data-page="pup" className="tp-page">
        <article
          className="tp-storybook"
          style={{
            background: puppy.bgStyle
              ? puppy.bgStyle.replace('background:', '').trim()
              : "linear-gradient(180deg, color-mix(in oklab, #785838 24%, var(--color-milk)) 0, var(--color-milk) 85%)"
          }}
        >
          <div aria-hidden="true" className="tp-ribbon">
            <div className="tp-ribbon__track">
              <span className="tp-ribbon__band" style={{ transform: "scaleY(0)" }}></span>
            </div>
          </div>

          <div className="gutter mx-auto max-w-[110rem] pb-20 pt-8 md:pt-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-[0.95rem] font-semibold text-cocoa-soft flex items-center gap-2">
              <Link className="link-ink hover:underline" to="/puppies">Available puppies</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{puppy.title}</span>
            </nav>

            <p className="tp-chapter mt-4">
              <span aria-hidden="true" className="tp-chapter__n font-plush">1</span>
              <span className="font-scrawl">hello, it's me</span>
            </p>

            <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Photo Gallery Column */}
              <div className="min-w-0 lg:col-span-7">
                <div>
                  <div className="tp-storypage relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-[2rem] border-[3px] border-cocoa bg-milk shadow-lg">
                    <button
                      type="button"
                      className="absolute inset-0 block size-full cursor-zoom-in"
                      aria-label={`Open ${puppy.title}, photo ${activePhoto + 1} of ${photos.length} full screen`}
                      onClick={() => setLightboxOpen(true)}
                    >
                      <img
                        alt={currentPhoto.alt || puppy.title}
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        className="size-full object-cover"
                        src={currentPhoto.src}
                      />
                    </button>

                    {/* Prev / Next controls */}
                    {photos.length > 1 && (
                      <div className="absolute inset-x-4 bottom-4 flex justify-between items-center pointer-events-auto">
                        <button
                          type="button"
                          className="grid size-12 place-items-center rounded-full border-2 border-cocoa bg-milk/95 text-xl font-bold shadow-md hover:scale-105 transition-transform"
                          aria-label="Previous photo"
                          onClick={handlePrev}
                        >
                          ‹
                        </button>
                        <span className="self-center rounded-full bg-cocoa/80 px-3 py-1 text-sm font-semibold text-milk">
                          {activePhoto + 1} / {photos.length}
                        </span>
                        <button
                          type="button"
                          className="grid size-12 place-items-center rounded-full border-2 border-cocoa bg-milk/95 text-xl font-bold shadow-md hover:scale-105 transition-transform"
                          aria-label="Next photo"
                          onClick={handleNext}
                        >
                          ›
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {photos.length > 1 && (
                    <ul
                      className="mt-3 flex gap-3 overflow-x-auto px-1 pb-2 pt-2 [scrollbar-width:thin]"
                      aria-label={`All photos of ${puppy.title}`}
                    >
                      {photos.map((photo, i) => {
                        const isActive = i === activePhoto;
                        return (
                          <li key={i} className="shrink-0">
                            <button
                              type="button"
                              aria-label={`${puppy.title}, photo ${i + 1} of ${photos.length}`}
                              aria-current={isActive ? "true" : "false"}
                              onClick={() => setActivePhoto(i)}
                              className={`relative block h-24 w-20 overflow-hidden rounded-[0.9rem] border-[3px] transition-transform duration-300 md:h-28 md:w-24 ${
                                isActive
                                  ? '-rotate-3 -translate-y-1 border-toffee-deep ring-2 ring-toffee'
                                  : 'border-cocoa/30 hover:-rotate-2 hover:border-cocoa'
                              }`}
                            >
                              <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="size-full object-cover"
                                src={photo.src}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* Lightbox Modal */}
                  {lightboxOpen && (
                    <div
                      aria-label={`${puppy.title} photos`}
                      role="dialog"
                      className="fixed inset-0 z-[120] flex items-center justify-center bg-cocoa/95 p-4 text-milk backdrop:bg-cocoa/70"
                      onClick={() => setLightboxOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setLightboxOpen(false)}
                        className="absolute right-6 top-6 h-11 rounded-full bg-milk px-5 font-semibold text-cocoa"
                      >
                        Close
                      </button>
                      <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
                        <img
                          src={currentPhoto.src}
                          alt={puppy.title}
                          className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tag / Details Board Column */}
              <div className="min-w-0 lg:col-span-5">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+5.5rem)]">
                  <div className="tp-tag tp-board mt-16 !rounded-[2.2rem_2.2rem_2.2rem_0.6rem] !p-7 md:!p-9 lg:mt-20" data-reveal="true">
                    <span aria-hidden="true" className="tp-tag__ring"></span>
                    <div className="pup-buddy absolute -top-[4.8rem] right-6 w-[9.5rem]" data-facing="right">
                      <svg viewBox="0 0 300 240" style={{ overflow: "visible" }} role="img" aria-label="Teddy peeking" focusable="false">
                        <g data-p="root">
                          <ellipse cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" />
                          <g transform="translate(0 4) rotate(0 212 100)">
                            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                            <path d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                            <path d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                            <path d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
                            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                            <path d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <h1 className="font-plush text-[clamp(2.2rem,5vw,3.2rem)] font-bold text-cocoa leading-tight">
                      {puppy.title}
                    </h1>

                    {/* Specs List */}
                    <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-cocoa/20 py-5">
                      {puppy.specs && puppy.specs.map((spec, idx) => (
                        <div key={idx} className="space-y-1">
                          <dt className="font-scrawl text-sm text-cocoa-soft">{spec.label}</dt>
                          <dd className="font-semibold text-cocoa text-base">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>

                    {/* WhatsApp CTA */}
                    <div className="mt-8 space-y-3">
                      <a
                        href={puppy.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp w-full flex items-center justify-center gap-2 text-base font-bold py-3.5"
                      >
                        WhatsApp about {puppy.title}
                      </a>
                      <p className="text-center text-xs text-cocoa-soft">
                        Available 24/7 · Downtown Dubai Showroom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            {puppy.description && puppy.description.length > 0 && (
              <section className="mt-20 max-w-3xl">
                <h2 className="font-plush text-2xl md:text-3xl font-bold text-cocoa mb-6">
                  About {puppy.title}
                </h2>
                <div className="space-y-4 text-cocoa-soft text-lg leading-relaxed">
                  {puppy.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}

            {/* TeddyPups Guarantee Letter */}
            <section className="tp-letter mt-20 grid gap-10 rounded-3xl border-[3px] border-cocoa bg-milk p-8 md:p-12 shadow-lg">
              <div className="space-y-4">
                <span className="font-scrawl text-toffee text-lg">our promise</span>
                <h2 className="font-plush text-2xl md:text-3xl font-bold text-cocoa">
                  Every puppy is health-checked, vaccinated & loved
                </h2>
                <p className="text-cocoa-soft leading-relaxed">
                  All TeddyPups puppies undergo comprehensive veterinary health checks before joining your family. We ensure up-to-date vaccinations, microchipping, and certified pedigree documentation for absolute peace of mind.
                </p>
              </div>
            </section>

            {/* Prev / Next Puppy Navigation */}
            {(puppy.prevPup || puppy.nextPup) && (
              <nav aria-label="More puppies" className="mt-16 grid gap-4 sm:grid-cols-2">
                {puppy.prevPup && (
                  <Link
                    to={puppy.prevPup.href}
                    className="group flex items-center gap-5 rounded-[2rem] border-[3px] border-cocoa bg-milk p-4 transition-transform duration-500 hover:-rotate-1"
                  >
                    {puppy.prevPup.img && (
                      <span className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[999px_999px_0.6rem_0.6rem] border-[3px] border-cocoa bg-honey-soft">
                        <img alt={puppy.prevPup.title} className="size-full object-cover" src={puppy.prevPup.img} />
                      </span>
                    )}
                    <span>
                      <span className="font-scrawl block text-sm text-cocoa-soft">Previous pup</span>
                      <span className="font-plush text-[1.6rem]">{puppy.prevPup.title}</span>
                    </span>
                  </Link>
                )}
                {puppy.nextPup && (
                  <Link
                    to={puppy.nextPup.href}
                    className="group flex items-center gap-5 rounded-[2rem] border-[3px] border-cocoa bg-milk p-4 transition-transform duration-500 hover:-rotate-1 sm:last:flex-row-reverse sm:last:text-right"
                  >
                    {puppy.nextPup.img && (
                      <span className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[999px_999px_0.6rem_0.6rem] border-[3px] border-cocoa bg-honey-soft">
                        <img alt={puppy.nextPup.title} className="size-full object-cover" src={puppy.nextPup.img} />
                      </span>
                    )}
                    <span>
                      <span className="font-scrawl block text-sm text-cocoa-soft">Next pup</span>
                      <span className="font-plush text-[1.6rem]">{puppy.nextPup.title}</span>
                    </span>
                  </Link>
                )}
              </nav>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
