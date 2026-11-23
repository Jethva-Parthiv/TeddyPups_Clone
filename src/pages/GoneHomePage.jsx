import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GoneHomePage() {
  useEffect(() => {
    document.title = 'Gone home — adopted puppies | TeddyPups U.A.E.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main" tabIndex="-1" className="relative pt-[var(--header-h)] outline-none">
    <div data-page="gone" className="tp-page">
      <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
        <header className="tp-boothhead">
          <div className="max-w-3xl">
            <h1 className="font-plush text-giant">
Gone home              <svg viewBox="0 0 48 44" className="ml-3 inline-block w-[0.45em] -translate-y-[0.15em] text-toffee" aria-hidden="true">
                <path d="M24 40C10 30 4 22 4 14.5 4 8.7 8.6 4 14.3 4c4.1 0 7.6 2.4 9.7 6 2.1-3.6 5.6-6 9.7-6C39.4 4 44 8.7 44 14.5 44 22 38 30 24 40z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h1>
            <p className="text-lede mt-6 text-cocoa-soft">
Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.            </p>
            <Link className="btn btn-primary mt-8" to="/puppies">See available puppies</Link>
          </div>
          <div aria-hidden="true" className="tp-booth">
            <div className="pup-buddy tp-booth__teddy" data-facing="right">
              <svg viewBox="0 0 300 240" style={{overflow: "visible"}} aria-hidden="true" focusable="false">
                <g data-p="root">
                  <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{transformBox: "fill-box", transformOrigin: "center"}} />
                  <g data-p="body" transform="translate(0 0) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="0">
                    <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="1">
                      <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                      <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                    <g data-p="ff" transform="translate(168 192) rotate(0)">
                      <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                      <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                    <g data-p="tail" transform="rotate(-20 84 150)">
                      <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
                      <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    </g>
                    <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="1">
                      <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
                      <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                    <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <g data-p="fn" transform="translate(186 194) rotate(0)">
                      <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                      <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <g data-p="haunch" opacity="0" transform="translate(0 0)">
                    <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                  </g>
                  <g data-p="head" transform="translate(0 4) rotate(0 212 100)">
                    <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(-6 174 82)" />
                    <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(6 250 82)" />
                    <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                    <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <g data-p="eyes" transform="translate(0 0)">
                      <g data-p="open" opacity="1">
                        <g data-p="blink" transform="translate(0 0) scale(1 1)">
                          <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                          <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                          <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                          <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                          <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                          <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                        </g>
                      </g>
                    </g>
                    <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
                    <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
                    <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
                    <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
                    <g data-p="mouth" opacity="0">
                      <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
                      <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
                    </g>
                  </g>
                  <g data-p="ledge" opacity="1">
                    <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                  </g>
                </g>
              </svg>
              <span aria-hidden="true" className="pup-bubble" data-show="false"></span>
            </div>
            <div className="tp-booth__counter">
              <span className="font-plush">tickets home</span>
            </div>
          </div>
        </header>
        <div>
          <ul className="tp-tickets" aria-label="Puppies who have gone home">
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.4deg", "--i": "0"}}>
              <Link className="tp-ticket__link" to="/puppies/pomeranian-ace-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Ace, male Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "52.8% 46.2%", color: "transparent", backgroundColor: "#f8e8e8", backgroundSize: "cover", backgroundPosition: "52.8% 46.2%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FmihUKGFCatU3_2F0461cca56e_2F27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Ace</span>
                    <span className="tp-ticket__meta">Pomeranian, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.1deg", "--i": "1"}}>
              <Link className="tp-ticket__link" to="/puppies/poodle-leo-male">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Leo, male Poodle puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "52.1% 38.0%", color: "transparent", backgroundColor: "#f8e8e8", backgroundSize: "cover", backgroundPosition: "52.1% 38.0%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FQgFG5s09n-ss_2F81af626d2d_2F27b888_5f9a7189bb21477d832047aae2040921-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Leo</span>
                    <span className="tp-ticket__meta">Poodle, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-0.6deg", "--i": "2"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipoo-mia-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Sadie, female Maltipoo puppy, photo 4" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "50.3% 43.2%", color: "transparent", backgroundColor: "#b88878", backgroundSize: "cover", backgroundPosition: "50.3% 43.2%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F4vu6_PGfL64H_2F537c367d85_2F27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Mia</span>
                    <span className="tp-ticket__meta">Maltipoo, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.6deg", "--i": "3"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipoo-sadie-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Sadie, female Maltipoo puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "47.9% 41.8%", color: "transparent", backgroundColor: "#f8d8d8", backgroundSize: "cover", backgroundPosition: "47.9% 41.8%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F159oT4F46uhk_2Fb66c2be87f_2F27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Sadie</span>
                    <span className="tp-ticket__meta">Maltipoo, girl</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.1deg", "--i": "4"}}>
              <Link className="tp-ticket__link" to="/puppies/blue-marle-pomeranian">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Male Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "52.3% 51.6%", color: "transparent", backgroundColor: "#887878", backgroundSize: "cover", backgroundPosition: "52.3% 51.6%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FbMSEHnYcBTFF_2F970fdc1ee6_2F27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Pomeranian</span>
                    <span className="tp-ticket__meta">Boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "0.8deg", "--i": "5"}}>
              <Link className="tp-ticket__link" to="/puppies/pomsky-ollie-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Ollie, male Pomsky puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "53.2% 38.1%", color: "transparent", backgroundColor: "#b8c888", backgroundSize: "cover", backgroundPosition: "53.2% 38.1%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FQs2IHRk7OQIm_2Fc16bea255c_2F27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Ollie</span>
                    <span className="tp-ticket__meta">Pomsky, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.4deg", "--i": "0"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipoo-bruno-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Bruno, male Maltipoo puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "46.4% 38.8%", color: "transparent", backgroundColor: "#f8f8f8", backgroundSize: "cover", backgroundPosition: "46.4% 38.8%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2Fw-F8mJLs2gtj_2Ff06147a6d3_2F27b888_301f58cbae624a1da36a79d46571043a-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Bruno</span>
                    <span className="tp-ticket__meta">Maltipoo, boy</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.1deg", "--i": "1"}}>
              <Link className="tp-ticket__link" to="/puppies/maltese-buddy-male">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Buddy, male Maltese puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "48.3% 37.6%", color: "transparent", backgroundColor: "#d8d8d8", backgroundSize: "cover", backgroundPosition: "48.3% 37.6%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F5ygCaO2TQb3v_2Ff23ade89fa_2F27b888_6053b478acb641d1865de22aef938977-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Buddy</span>
                    <span className="tp-ticket__meta">Maltese, boy</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-0.6deg", "--i": "2"}}>
              <Link className="tp-ticket__link" to="/puppies/maltese-charlie-male">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Charlie, male Maltese puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "46.8% 33.4%", color: "transparent", backgroundColor: "#e8e8e8", backgroundSize: "cover", backgroundPosition: "46.8% 33.4%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F0c1rFiKXQLLk_2F75c6a20e15_2F27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Charlie</span>
                    <span className="tp-ticket__meta">Maltese, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.6deg", "--i": "3"}}>
              <Link className="tp-ticket__link" to="/puppies/pomeranian-daisy-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Daisy, female Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "47.8% 38.4%", color: "transparent", backgroundColor: "#e8e8e8", backgroundSize: "cover", backgroundPosition: "47.8% 38.4%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2Fd_ji2d9LVy0R_2Fb19b4cf1c2_2F27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Daisy</span>
                    <span className="tp-ticket__meta">Pomeranian, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.1deg", "--i": "4"}}>
              <Link className="tp-ticket__link" to="/puppies/pomeranian-bella-female">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Bella, female Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "49.4% 36.9%", color: "transparent", backgroundColor: "#181828", backgroundSize: "cover", backgroundPosition: "49.4% 36.9%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F9jwfs8kSZW7K_2F9b8ae31d11_2F27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Bella</span>
                    <span className="tp-ticket__meta">Pomeranian, girl</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "0.8deg", "--i": "5"}}>
              <Link className="tp-ticket__link" to="/puppies/poodle-teddy-male">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Teddy, male Poodle puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "39.8% 37.5%", color: "transparent", backgroundColor: "#e8e8e8", backgroundSize: "cover", backgroundPosition: "39.8% 37.5%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F9XFYXsuvjIcz_2F8d1efc8baa_2F27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Teddy</span>
                    <span className="tp-ticket__meta">Poodle, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.4deg", "--i": "0"}}>
              <Link className="tp-ticket__link" to="/puppies/poodle-molly-female">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Molly, female Poodle puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "53.3% 37.7%", color: "transparent", backgroundColor: "#c8a898", backgroundSize: "cover", backgroundPosition: "53.3% 37.7%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FWZKcpiogRBW7_2F9ebcb8d165_2F27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Molly</span>
                    <span className="tp-ticket__meta">Poodle, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.1deg", "--i": "1"}}>
              <Link className="tp-ticket__link" to="/puppies/pomski-coco-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Coco, female Pomsky puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "60.3% 38.5%", color: "transparent", backgroundColor: "#f8f8f8", backgroundSize: "cover", backgroundPosition: "60.3% 38.5%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FCXIzj6hYrmuI_2Feff60812df_2F27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Coco</span>
                    <span className="tp-ticket__meta">Pomsky, girl</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-0.6deg", "--i": "2"}}>
              <Link className="tp-ticket__link" to="/puppies/pomsky-rosie-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Rosie, female Pomsky puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "49.1% 37.8%", color: "transparent", backgroundColor: "#e8d8b8", backgroundSize: "cover", backgroundPosition: "49.1% 37.8%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FFhrW7pE84bji_2Ff7c57baf49_2F27b888_08271c7de284451fb9c848757f4838fb-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Rosie</span>
                    <span className="tp-ticket__meta">Pomsky, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.6deg", "--i": "3"}}>
              <Link className="tp-ticket__link" to="/puppies/pomeranian-leo-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Leo, male Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "57.4% 32.4%", color: "transparent", backgroundColor: "#e8e8e8", backgroundSize: "cover", backgroundPosition: "57.4% 32.4%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F5iCniMJshKud_2F8bfe42003c_2F27b888_84815fae2bd34283a7c79985cfc8b568-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Leo</span>
                    <span className="tp-ticket__meta">Pomeranian, boy</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.1deg", "--i": "4"}}>
              <Link className="tp-ticket__link" to="/puppies/poodle-molly-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Molly, female Poodle puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "59.1% 37.7%", color: "transparent", backgroundColor: "#784828", backgroundSize: "cover", backgroundPosition: "59.1% 37.7%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FlsaKvJhLwHB4_2F4cf2a02ed1_2F27b888_5aa959cec570411a8bb9372abe23f5e9-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Molly</span>
                    <span className="tp-ticket__meta">Poodle, girl</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "0.8deg", "--i": "5"}}>
              <Link className="tp-ticket__link" to="/puppies/poodle-rocky-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Rocky, male Poodle puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "49.3% 38.0%", color: "transparent", backgroundColor: "#f8e8f8", backgroundSize: "cover", backgroundPosition: "49.3% 38.0%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2F51aMfxO7oeVe_2F6b70c96b1e_2F27b888_77a51d530b694ba58bc207f2a23e8620-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Rocky</span>
                    <span className="tp-ticket__meta">Poodle, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.4deg", "--i": "0"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipoo-sophie-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Sophie, female Maltipoo puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "47.6% 37.8%", color: "transparent", backgroundColor: "#d8b898", backgroundSize: "cover", backgroundPosition: "47.6% 37.8%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FPYYTxpqgo76_2Fae53ae6d3c_2F27b888_0d89c05fa55c43d4b6d55d573be83e73-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Sophie</span>
                    <span className="tp-ticket__meta">Maltipoo, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.1deg", "--i": "1"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipoo-lola-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Lola, female Maltipoo puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "54.3% 37.3%", color: "transparent", backgroundColor: "#f8e8e8", backgroundSize: "cover", backgroundPosition: "54.3% 37.3%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FHPs4cYizPzy9_2F22b104e2c5_2F27b888_f24865b2456b46feb6ea6694fe90660f-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Lola</span>
                    <span className="tp-ticket__meta">Maltipoo, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-0.6deg", "--i": "2"}}>
              <Link className="tp-ticket__link" to="/puppies/pomeranian-rex-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Rex, male Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "49.7% 36.9%", color: "transparent", backgroundColor: "#c8b8b8", backgroundSize: "cover", backgroundPosition: "49.7% 36.9%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FQIIvMqQTe9jr_2Fd997ae172e_2F27b888_14fd6ec24bd94522bd54a5ae345240b8-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Rex</span>
                    <span className="tp-ticket__meta">Pomeranian, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.6deg", "--i": "3"}}>
              <Link className="tp-ticket__link" to="/puppies/pomsky-finn-male">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Finn, male Pomsky puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "56.8% 50.1%", color: "transparent", backgroundColor: "#b8b8b8", backgroundSize: "cover", backgroundPosition: "56.8% 50.1%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FtEAwWspMD8iG_2F1f55440daf_2F27b888_c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Finn</span>
                    <span className="tp-ticket__meta">Pomsky, boy</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.1deg", "--i": "4"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipoo-zoe-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Zoe, female Maltipoo puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "32.8% 37.6%", color: "transparent", backgroundColor: "#f8e8c8", backgroundSize: "cover", backgroundPosition: "32.8% 37.6%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2Ffxj_9aZOSxQM_2F90c10b9c91_2F27b888_89e442e0035442308fc87fe3d2837f1d-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Zoe</span>
                    <span className="tp-ticket__meta">Maltipoo, girl</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "0.8deg", "--i": "5"}}>
              <Link className="tp-ticket__link" to="/puppies/pomeranian-mimi-girl">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Mimi, female Pomeranian puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "58.1% 41.0%", color: "transparent", backgroundColor: "#f8e8e8", backgroundSize: "cover", backgroundPosition: "58.1% 41.0%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FBLOZLPixUcjE_2Fea8ee97fd9_2F27b888_870c748ca6ee45cf8e0a311232dfe289-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Mimi</span>
                    <span className="tp-ticket__meta">Pomeranian, girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-1.4deg", "--i": "0"}}>
              <Link className="tp-ticket__link" to="/puppies/bichon-bailey-boy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Bailey, male Bichon puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "51.6% 42.8%", color: "transparent", backgroundColor: "#c8c8c8", backgroundSize: "cover", backgroundPosition: "51.6% 42.8%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FfI-hlHuSwrRw_2Fe5ae9b6384_2F27b888_8d87239e23854214a8718ef8f02c2d50-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Bailey</span>
                    <span className="tp-ticket__meta">Bichon, boy</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "1.1deg", "--i": "1"}}>
              <Link className="tp-ticket__link" to="/puppies/puppy">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Female Maltipoo puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "48.3% 31.3%", color: "transparent", backgroundColor: "#182808", backgroundSize: "cover", backgroundPosition: "48.3% 31.3%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FCl0B4v8U3Y-d_2F3dea5a9fec_2F27b888_1ae70e063fd7451a87d4dfe79794d58f-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Maltipoo</span>
                    <span className="tp-ticket__meta">Girl</span>
                    <span className="tp-ticket__route">
                      <span>TeddyPups</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
            <li className="tp-ticket" data-reveal="true" style={{"--tilt": "-0.6deg", "--i": "2"}}>
              <Link className="tp-ticket__link" to="/puppies/maltipo">
                <span className="tp-ticket__main">
                  <span className="tp-ticket__photo">
                    <img alt="Female Poodle puppy" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover", objectPosition: "44.0% 32.8%", color: "transparent", backgroundColor: "#d8d8d8", backgroundSize: "cover", backgroundPosition: "44.0% 32.8%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp"}} sizes="7rem" src="/_next/image.url_2Fmedia_2FsFgPBojUhFBo_2F5ac1429cf4_2F27b888_aa0ce426ca3848abbc7d695f8c818568-mv2.avif_w_3840_q_75.jpg" />
                  </span>
                  <span className="tp-ticket__body">
                    <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                    <span className="font-plush tp-ticket__name">Poodle</span>
                    <span className="tp-ticket__meta">Girl</span>
                    <span className="tp-ticket__route">
                      <span>Dubai showroom</span>
                      <svg viewBox="0 0 60 12" aria-hidden="true">
                        <path d="M2 6h46" />
                        <path d="M44 2l6 4-6 4" />
                      </svg>
                      <span>home ♥</span>
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="tp-ticket__stub">
                  <span className="font-plush">admit one</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </main>
  );
}
