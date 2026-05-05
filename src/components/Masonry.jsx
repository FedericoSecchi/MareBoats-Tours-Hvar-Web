import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './Masonry.css';

const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = 'power2.out',
  duration = 0.6,
  stagger = 0.2,
  scaleOnHover = true,
  hoverScale = 0.95,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  // Store random values per item to ensure true randomness (not recalculated)
  const randomValues = useRef(new Map());

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  // Editorial grid: uniform card size, no dynamic height calculation
  const grid = useMemo(() => {
    if (!width) return [];

    const columnWidth = width / columns;
    const cardHeight = columnWidth * 1.2; // Aspect ratio 1:1.2 (uniform cards)
    const gap = 12; // Gap between cards
    const cardWidth = columnWidth - gap;

    const totalRows = Math.ceil(items.length / columns);
    const containerHeight = totalRows * (cardHeight + gap) + gap;

    // Center the grid when fewer items than columns (e.g. 4 items in 5-column layout)
    const usedColumns = Math.min(items.length, columns);
    const offsetX = (columns - usedColumns) * (columnWidth / 2);

    // Update container height
    if (containerRef.current) {
      containerRef.current.style.height = `${containerHeight}px`;
    }

    return items.map((child, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const x = col * columnWidth + gap / 2 + offsetX;
      const y = row * (cardHeight + gap) + gap / 2;

      return { 
        ...child, 
        x, 
        y, 
        w: cardWidth, 
        h: cardHeight 
      };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      // Generate and store random values per item (only once)
      if (!randomValues.current.has(item.id)) {
        randomValues.current.set(item.id, {
          x: gsap.utils.random(-40, 40),
          y: gsap.utils.random(-70, -30),
          rotation: gsap.utils.random(-2, 2)
        });
      }

      const random = randomValues.current.get(item.id);
      const selector = `[data-key="${item.id}"]`;
      
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
        rotation: 0
      };

      if (!hasMounted.current) {
        // Initial state with true random values per item
        const initialState = {
          opacity: 0,
          x: item.x + random.x,
          y: item.y + random.y,
          width: item.w,
          height: item.h,
          rotation: random.rotation
        };

        // Animate wrapper (position, size, opacity, rotation)
        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          duration: duration,
          ease: ease,
          delay: index * stagger
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, duration, ease]);

  const handleMouseEnter = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3
        });
      }
    }
  };

  const handleMouseLeave = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3
        });
      }
    }
  };

  return (
    <div ref={containerRef} className="list">
      {grid.map(item => {
        return (
          <div
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            onClick={() => item.url && window.open(item.url, '_blank', 'noopener')}
            onMouseEnter={e => handleMouseEnter(e, item)}
            onMouseLeave={e => handleMouseLeave(e, item)}
            style={{ cursor: item.url ? 'pointer' : 'default' }}
          >
            <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                {item.subtitle && <p className="item-subtitle">{item.subtitle}</p>}
              </div>
              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                    opacity: 0,
                    pointerEvents: 'none',
                    borderRadius: '8px'
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;

