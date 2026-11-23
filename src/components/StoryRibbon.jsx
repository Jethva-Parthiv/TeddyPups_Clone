import React, { useRef, useEffect } from 'react';

export default function StoryRibbon() {
  const ribbonRef = useRef(null);
  const bandRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const updateProgress = () => {
      const el = ribbonRef.current;
      const band = bandRef.current;
      if (!el || !band) return;

      const rect = el.getBoundingClientRect();
      const H = window.innerHeight;
      const denom = rect.height - 0.7 * H;
      let progress = 0;
      if (denom > 0) {
        progress = Math.min(1, Math.max(0, (0.3 * H - rect.top) / denom));
      } else {
        progress = rect.top <= 0.3 * H ? 1 : 0;
      }

      band.style.transform = `scaleY(${progress})`;
    };

    const handleScrollOrResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && ribbonRef.current) {
      ro = new ResizeObserver(() => {
        handleScrollOrResize();
      });
      ro.observe(ribbonRef.current);
      if (ribbonRef.current.parentElement) {
        ro.observe(ribbonRef.current.parentElement);
      }
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <div ref={ribbonRef} aria-hidden="true" className="tp-ribbon">
      <div className="tp-ribbon__track">
        <span
          ref={bandRef}
          className="tp-ribbon__band"
          style={{ transform: 'scaleY(0)', transformOrigin: '50% 0', willChange: 'transform' }}
        />
      </div>
    </div>
  );
}
