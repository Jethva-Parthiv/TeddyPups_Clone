import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link } from 'react-router-dom';
import puppiesStoryData from '../data/puppiesStoryData.json';
import StoryRibbon from '../components/StoryRibbon';

export default function PuppyDetailPage() {
  const { slug } = useParams();
  const cleanSlug = (slug || '').replace('.html', '');
  
  // Find puppy by slug, fallback to maltipoo-max-male or first entry
  const puppy = puppiesStoryData[cleanSlug] || puppiesStoryData['maltipoo-max-male'] || Object.values(puppiesStoryData)[0];

  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: puppy?.chapter4?.defaultMessage || ''
  });

  useEffect(() => {
    if (puppy) {
      document.title = `${puppy.title}, ${puppy.subtitle || 'puppy'} | TeddyPups U.A.E.`;
      setActivePhoto(0);
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        area: '',
        message: puppy.chapter4?.defaultMessage || `Hi! I'd love to know more about ${puppy.title} (${puppy.subtitle || ''}).`
      });
      window.scrollTo(0, 0);
    }
  }, [cleanSlug]);

  if (!puppy) {
    return (
      <main id="main" tabIndex="-1" className="relative pt-[var(--header-h)] outline-none">
        <div className="gutter mx-auto max-w-[110rem] py-20 text-center">
          <h1 className="font-plush text-4xl font-bold text-cocoa">Puppy Not Found</h1>
          <p className="mt-4 text-cocoa-soft">Sorry, we couldn't find the puppy you're looking for.</p>
          <Link to="/puppies" className="btn btn-primary mt-6 inline-block">View Available Puppies</Link>
        </div>
      </main>
    );
  }

  const gallery = puppy.gallery && puppy.gallery.length > 0 ? puppy.gallery : [
    {
      alt: puppy.title,
      src: '/_next/image.url_2Fbrand_2Flogo.png_w_128_q_75.png',
      thumbSrc: '/_next/image.url_2Fbrand_2Flogo.png_w_128_q_75.png',
      style: { position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'cover' },
      isVideo: false
    }
  ];

  const currentPhoto = gallery[activePhoto] || gallery[0];

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setActivePhoto((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setActivePhoto((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  const [touchStartX, setTouchStartX] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff < -50) handleNext();
    else if (diff > 50) handlePrev();
    setTouchStartX(null);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('has-open-modal');
    document.documentElement.classList.add('has-open-modal');

    const header = document.getElementById('site-header');
    const prevHeaderDisplay = header ? header.style.display : '';
    if (header) header.style.display = 'none';

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setLightboxOpen(false);
    };

    const handleWheel = (e) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.classList.remove('has-open-modal');
      document.documentElement.classList.remove('has-open-modal');
      if (header) header.style.display = prevHeaderDisplay;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [lightboxOpen, handleNext, handlePrev]);

  const handleScrollToEnquire = (e) => {
    e.preventDefault();
    const el = document.getElementById(`enquire-${puppy.slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <main id="main" tabIndex="-1" className="relative pt-[var(--header-h)] outline-none">
      <div data-page="pup" className="tp-page">
        <article
          className="tp-storybook"
          style={{
            background: puppy.bgStyle || "linear-gradient(180deg, color-mix(in oklab, #785838 24%, var(--color-milk)) 0, var(--color-milk) 85%)"
          }}
        >
          {/* Top Decorative Scroll Ribbon */}
          <StoryRibbon key={puppy.slug} />

          <div className="gutter mx-auto max-w-[110rem] pb-20 pt-8 md:pt-12">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="text-[0.95rem] font-semibold text-cocoa-soft">
              <Link className="link-ink" to="/puppies">Available puppies</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{puppy.title}</span>
            </nav>

            {/* Chapter 1 Title */}
            <p className="tp-chapter mt-4">
              <span aria-hidden="true" className="tp-chapter__n font-plush">
                {puppy.chapter1?.num || 1}
              </span>
              <span className="font-scrawl">
                {puppy.chapter1?.title || "hello, it's me"}
              </span>
            </p>

            {/* Main Content Grid: Left Gallery + Right Tag Boards */}
            <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:gap-14">
              
              {/* Photo Gallery Column */}
              <div className="min-w-0 lg:col-span-7">
                <div>
                  <div className="tp-storypage relative aspect-[4/5] md:aspect-[5/6]">
                    <button
                      aria-label={`Open ${puppy.title}, photo ${activePhoto + 1} of ${gallery.length} full screen`}
                      className="absolute inset-0 block size-full cursor-zoom-in"
                      style={{ transformOrigin: "0% 50%", clipPath: "inset(0% 0% 0%)", transform: "none" }}
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                    >
                      <img
                        alt={currentPhoto.alt || puppy.title}
                        data-nimg="fill"
                        decoding="async"
                        fetchPriority="high"
                        loading="eager"
                        sizes="(min-width: 1024px) 55vw, 92vw"
                        src={currentPhoto.src}
                        onError={(e) => {
                          if (currentPhoto.thumbSrc && e.currentTarget.src !== currentPhoto.thumbSrc) {
                            e.currentTarget.src = currentPhoto.thumbSrc;
                          }
                        }}
                        style={currentPhoto.style || { position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "cover" }}
                      />
                      {currentPhoto.isVideo && (
                        <span className="absolute inset-0 grid place-items-center bg-cocoa/30 text-3xl text-milk">
                          <span className="grid size-16 place-items-center rounded-full bg-milk/80 text-cocoa shadow-lg backdrop-blur-sm">
                            ▶
                          </span>
                        </span>
                      )}
                    </button>

                    {/* Prev / Next controls on Gallery Deck */}
                    {gallery.length > 1 && (
                      <div className="absolute inset-x-4 bottom-4 flex justify-between items-center pointer-events-auto">
                        <button
                          aria-label="Previous photo"
                          className="grid size-12 place-items-center rounded-full border-2 border-cocoa bg-milk/95 text-xl font-bold shadow-sm transition-transform hover:scale-105 active:scale-95"
                          type="button"
                          onClick={handlePrev}
                        >
                          ‹
                        </button>
                        <span className="self-center rounded-full bg-cocoa/80 px-3 py-1 text-sm font-semibold text-milk">
                          {activePhoto + 1} / {gallery.length}
                        </span>
                        <button
                          aria-label="Next photo"
                          className="grid size-12 place-items-center rounded-full border-2 border-cocoa bg-milk/95 text-xl font-bold shadow-sm transition-transform hover:scale-105 active:scale-95"
                          type="button"
                          onClick={handleNext}
                        >
                          ›
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {gallery.length > 1 && (
                    <ul
                      aria-label={`All photos of ${puppy.title}`}
                      className="mt-3 flex gap-3 overflow-x-auto px-1 pb-2 pt-2 [scrollbar-width:thin]"
                    >
                      {gallery.map((item, idx) => {
                        const isActive = activePhoto === idx;
                        return (
                          <li key={idx} className="shrink-0">
                            <button
                              aria-current={isActive ? "true" : "false"}
                              aria-label={`${puppy.title}, ${item.isVideo ? 'video' : 'photo'} ${idx + 1} of ${gallery.length}`}
                              className={`relative block h-24 w-20 overflow-hidden rounded-[0.9rem] border-[3px] transition-transform duration-300 md:h-28 md:w-24 ${
                                isActive
                                  ? '-rotate-3 -translate-y-1 border-toffee-deep ring-2 ring-toffee'
                                  : 'border-cocoa/30 hover:-rotate-2 hover:border-cocoa'
                              }`}
                              type="button"
                              onClick={() => setActivePhoto(idx)}
                            >
                              <img
                                alt=""
                                data-nimg="fill"
                                decoding="async"
                                loading="lazy"
                                sizes="96px"
                                src={item.thumbSrc || item.src}
                                style={item.style || { position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "cover" }}
                              />
                              {item.isVideo && (
                                <span className="absolute inset-0 grid place-items-center bg-cocoa/30 text-lg text-milk">
                                  ▶
                                </span>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              {/* Tag / Specs Board Column */}
              <div className="min-w-0 lg:col-span-5">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+5.5rem)]">
                  {/* Tag Board 1 */}
                  <div className="tp-tag tp-board mt-16 !rounded-[2.2rem_2.2rem_2.2rem_0.6rem] !p-7 md:!p-9 lg:mt-20" data-reveal="true">
                    <span aria-hidden="true" className="tp-tag__ring"></span>
                    
                    {/* Pup Buddy Peeking */}
                    {puppy.buddySvg && (
                      <div
                        className="pup-buddy absolute -top-[4.8rem] right-6 w-[9.5rem]"
                        data-facing="right"
                        dangerouslySetInnerHTML={{ __html: puppy.buddySvg }}
                      />
                    )}

                    {/* Status Chip */}
                    <span className="chip">
                      <svg aria-hidden="true" className="size-4 text-toffee" fill="currentColor" viewBox="0 0 64 64">
                        <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                      </svg>
                      {puppy.chip || 'Available'}
                    </span>

                    <h1 className="font-plush mt-4 text-[clamp(2.6rem,5vw,4.6rem)]">
                      {puppy.title}
                    </h1>
                    {puppy.subtitle && (
                      <p className="mt-2 text-lg font-semibold text-cocoa-soft">
                        {puppy.subtitle}
                      </p>
                    )}

                    {/* Specs Grid */}
                    {puppy.specs && puppy.specs.length > 0 && (
                      <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
                        {puppy.specs.map((spec, i) => (
                          <div key={i}>
                            <dt className="font-scrawl text-sm text-cocoa-soft">{spec.label}</dt>
                            <dd className="mt-0.5 text-[1.05rem] font-semibold">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {/* Call to Action Buttons */}
                    <div className="mt-8 flex flex-col gap-3">
                      <a
                        className="btn btn-whatsapp"
                        href={puppy.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ask about {puppy.title} on WhatsApp
                      </a>
                      <a
                        className="btn btn-ghost"
                        href={`#enquire-${puppy.slug}`}
                        onClick={handleScrollToEnquire}
                      >
                        Send an enquiry
                      </a>
                    </div>
                  </div>

                  {/* Chapter 2: What comes with [Puppy] */}
                  {puppy.chapter2 && (
                    <div className="tp-paper mt-8 -rotate-1">
                      <p className="tp-chapter">
                        <span aria-hidden="true" className="tp-chapter__n font-plush">
                          {puppy.chapter2.num}
                        </span>
                        <span className="font-scrawl">
                          what comes with {puppy.title}
                        </span>
                      </p>
                      <h2 className="font-plush mt-1 text-[1.9rem]">
                        {puppy.chapter2.heading}
                      </h2>
                      <ul className="mt-4 space-y-2.5">
                        {puppy.chapter2.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-semibold">
                            <svg aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-toffee-deep" viewBox="0 0 32 32">
                              <path d="M5 17l7 7L27 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4"></path>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Chapter 3: The Way Home (Trail) */}
            {puppy.chapter3 && (
              <section aria-labelledby={`home-steps-${puppy.slug}`} className="mt-20">
                <p className="tp-chapter">
                  <span aria-hidden="true" className="tp-chapter__n font-plush">
                    {puppy.chapter3.num}
                  </span>
                  <span className="font-scrawl">
                    {puppy.chapter3.title}
                  </span>
                </p>
                <h2 className="font-plush text-big mt-3" id={`home-steps-${puppy.slug}`}>
                  {puppy.chapter3.heading}
                </h2>
                <ol className="tp-trail tp-trail--row tp-trail--paws mt-10">
                  {puppy.chapter3.steps.map((step, idx) => (
                    <li key={idx}>
                      <span aria-hidden="true" className="tp-trail__num font-plush">
                        {step.num}
                      </span>
                      <h3 className="font-plush-text text-xl font-bold leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[38ch] text-cocoa-soft">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Chapter 4 (or 3): Dear TeddyPups… Letterform */}
            {puppy.chapter4 && (
              <section
                aria-labelledby={`enquire-title-${puppy.slug}`}
                className="tp-letter mt-20 grid gap-10 lg:grid-cols-12"
                id={`enquire-${puppy.slug}`}
              >
                <span aria-hidden="true" className="tp-letter__stamp">
                  <svg aria-hidden="true" className="size-9" fill="currentColor" viewBox="0 0 64 64">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"></path>
                  </svg>
                </span>
                
                <div className="lg:col-span-4">
                  <p className="tp-chapter">
                    <span aria-hidden="true" className="tp-chapter__n font-plush">
                      {puppy.chapter4.num}
                    </span>
                    <span className="font-scrawl">
                      {puppy.chapter4.title}
                    </span>
                  </p>
                  <h2 className="font-plush text-big mt-2" id={`enquire-title-${puppy.slug}`}>
                    {puppy.chapter4.heading}
                  </h2>
                  <p className="mt-4 text-cocoa-soft">
                    {puppy.chapter4.intro}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  {formSubmitted ? (
                    <div className="rounded-2xl border-2 border-toffee-deep/40 bg-milk p-8 text-center shadow-sm">
                      <div className="mx-auto grid size-14 place-items-center rounded-full bg-toffee/20 text-toffee-deep text-2xl mb-4">
                        ✓
                      </div>
                      <h3 className="font-plush text-2xl font-bold text-cocoa">Enquiry Sent!</h3>
                      <p className="mt-2 text-cocoa-soft">
                        Thank you, {formData.name}. We've received your enquiry about {puppy.title}. Our team will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-5" noValidate onSubmit={handleFormSubmit}>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-[0.95rem] font-semibold" htmlFor={`name-${puppy.slug}`}>
                            Your name <span className="text-toffee-ink">*</span>
                          </label>
                          <input
                            autoComplete="name"
                            className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                            id={`name-${puppy.slug}`}
                            maxLength={80}
                            minLength={2}
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-[0.95rem] font-semibold" htmlFor={`phone-${puppy.slug}`}>
                            Phone or WhatsApp <span className="text-toffee-ink">*</span>
                          </label>
                          <input
                            autoComplete="tel"
                            className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                            id={`phone-${puppy.slug}`}
                            inputMode="tel"
                            name="phone"
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                          <p className="mt-1 text-sm text-cocoa-soft">
                            With country code, e.g. +971 50 123 4567
                          </p>
                        </div>
                        <div>
                          <label className="block text-[0.95rem] font-semibold" htmlFor={`email-${puppy.slug}`}>
                            Email <span className="font-normal text-cocoa-soft">(optional)</span>
                          </label>
                          <input
                            autoComplete="email"
                            className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                            id={`email-${puppy.slug}`}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-[0.95rem] font-semibold" htmlFor={`area-${puppy.slug}`}>
                            Your area <span className="font-normal text-cocoa-soft">(optional)</span>
                          </label>
                          <input
                            autoComplete="address-level2"
                            className="mt-1.5 h-12 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 text-base outline-none transition-[border-color,box-shadow] focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                            id={`area-${puppy.slug}`}
                            maxLength={80}
                            name="area"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          />
                          <p className="mt-1 text-sm text-cocoa-soft">
                            e.g. Dubai Marina
                          </p>
                        </div>
                      </div>
                      
                      <input name="puppyId" type="hidden" value={puppy.chapter4.puppyId || ""} />
                      
                      <div>
                        <label className="block text-[0.95rem] font-semibold" htmlFor={`message-${puppy.slug}`}>
                          Message <span className="font-normal text-cocoa-soft">(optional)</span>
                        </label>
                        <textarea
                          className="mt-1.5 w-full rounded-2xl border-2 border-cocoa/60 bg-milk px-4 py-3 text-base outline-none focus:border-cocoa focus:shadow-[0_0_0_4px_rgb(242_190_107/0.6)]"
                          id={`message-${puppy.slug}`}
                          maxLength={2000}
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      
                      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                        <label>
                          Website <input autoComplete="off" name="website" tabIndex={-1} />
                        </label>
                      </div>
                      
                      <button className="btn btn-primary w-full disabled:opacity-70 sm:w-auto" type="submit">
                        Send enquiry
                      </button>
                    </form>
                  )}
                </div>
              </section>
            )}

            {/* Bottom Navigation: Previous pup and Next pup Cards */}
            {(puppy.prevPup || puppy.nextPup) && (
              <nav aria-label="More puppies" className="mt-16 grid gap-4 sm:grid-cols-2">
                {puppy.prevPup && (
                  <Link
                    className="group flex items-center gap-5 rounded-[2rem] border-[3px] border-cocoa bg-milk p-4 transition-transform duration-500 hover:-rotate-1 sm:last:flex-row-reverse sm:last:text-right"
                    to={puppy.prevPup.href}
                  >
                    <span className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[999px_999px_0.6rem_0.6rem] border-[3px] border-cocoa bg-honey-soft">
                      <img
                        alt=""
                        data-nimg="fill"
                        decoding="async"
                        loading="lazy"
                        sizes="80px"
                        src={puppy.prevPup.img?.src}
                        style={puppy.prevPup.img?.style || { position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "cover" }}
                      />
                    </span>
                    <span>
                      <span className="font-scrawl block text-sm text-cocoa-soft">
                        {puppy.prevPup.label || 'Previous pup'}
                      </span>
                      <span className="font-plush text-[1.6rem]">
                        {puppy.prevPup.title}
                      </span>
                    </span>
                  </Link>
                )}
                {puppy.nextPup && (
                  <Link
                    className="group flex items-center gap-5 rounded-[2rem] border-[3px] border-cocoa bg-milk p-4 transition-transform duration-500 hover:-rotate-1 sm:last:flex-row-reverse sm:last:text-right"
                    to={puppy.nextPup.href}
                  >
                    <span className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[999px_999px_0.6rem_0.6rem] border-[3px] border-cocoa bg-honey-soft">
                      <img
                        alt=""
                        data-nimg="fill"
                        decoding="async"
                        loading="lazy"
                        sizes="80px"
                        src={puppy.nextPup.img?.src}
                        style={puppy.nextPup.img?.style || { position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "cover" }}
                      />
                    </span>
                    <span>
                      <span className="font-scrawl block text-sm text-cocoa-soft">
                        {puppy.nextPup.label || 'Next pup'}
                      </span>
                      <span className="font-plush text-[1.6rem]">
                        {puppy.nextPup.title}
                      </span>
                    </span>
                  </Link>
                )}
              </nav>
            )}

          </div>

          {/* Lightbox Modal Dialog matching original Teddypups */}
          {lightboxOpen && createPortal(
            <div
              aria-label={`${puppy.title} photos`}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 flex h-dvh w-screen flex-col justify-between bg-cocoa/95 p-0 text-milk backdrop:bg-cocoa/70 select-none overflow-hidden"
              style={{
                zIndex: 9999999,
                position: 'fixed',
                inset: 0,
                touchAction: 'none'
              }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onClick={(e) => {
                if (e.target === e.currentTarget) setLightboxOpen(false);
              }}
              data-lenis-prevent="true"
            >
              {/* Top Bar: Puppy title / photo count on left, Close button on right */}
              <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
                <p className="font-scrawl text-lg text-milk">
                  {puppy.title}, {currentPhoto.isVideo ? 'video' : 'photo'} {activePhoto + 1} of {gallery.length}
                </p>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="h-11 rounded-full bg-milk px-5 font-semibold text-cocoa transition-colors hover:bg-honey"
                >
                  Close
                </button>
              </div>

              {/* Center Media Area: clean view with no round arrows blocking photo */}
              <div
                className="relative flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-4 touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setLightboxOpen(false);
                }}
              >
                {currentPhoto.isVideo ? (
                  <video
                    src={currentPhoto.src}
                    poster={currentPhoto.thumbSrc}
                    controls
                    autoPlay
                    playsInline
                    className="size-full max-h-[75vh] md:max-h-[80vh] object-contain"
                  />
                ) : (
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt || puppy.title}
                    className="size-full max-h-[75vh] md:max-h-[80vh] object-contain"
                    onError={(e) => {
                      if (currentPhoto.thumbSrc && e.currentTarget.src !== currentPhoto.thumbSrc) {
                        e.currentTarget.src = currentPhoto.thumbSrc;
                      }
                    }}
                  />
                )}
              </div>

              {/* Bottom Bar: Previous and Next Controls */}
              {gallery.length > 1 && (
                <div className="flex justify-center gap-3 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="h-12 rounded-full border-2 border-milk px-6 font-semibold text-milk transition-transform hover:bg-milk/10 active:scale-95"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="h-12 rounded-full bg-honey px-6 font-semibold text-cocoa transition-transform hover:bg-honey/90 active:scale-95"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>,
            document.body
          )}
        </article>
      </div>
    </main>
  );
}
