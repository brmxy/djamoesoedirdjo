import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Loader() {
  const loader = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.add(scene.chars())
        .add(scene.bars(), '-=0.75')
        .set('main', { visibility: 'visible' })
        .set(loader.current, { display: 'none' });
    }, loader);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[999] h-full w-full bg-background/60 backdrop-blur-sm"
      ref={loader}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 flex h-full w-full flex-row">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="bars flex-1 bg-primary" key={i} />
          ))}
        </div>
        <div className="relative flex h-full w-full items-center justify-center">
          <p className="pointer-events-none relative overflow-hidden text-center text-2xl font-bold leading-tight text-background">
            {'djamoesoedirdjo'.split('').map((c, i) => (
              <span className="chars inline-block" key={i}>
                {c}
              </span>
            ))}
            <span className="chars inline-block">
              <sup>&copy;</sup>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const scene = {
  chars() {
    const tl = gsap.timeline();

    tl.from('.chars', {
      y: 40,
      opacity: 0,
      delay: 0.15,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power4.out'
    })
      .to('.chars', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power4.out'
      })
      .to(
        '.chars',
        {
          y: -40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power4.inOut'
        },
        '-=1'
      );

    return tl;
  },
  bars() {
    const tl = gsap.timeline();

    tl.to('.bars', {
      duration: 1,
      stagger: 0.1,
      ease: 'power4.inOut',
      y: '-100%'
    });

    return tl;
  }
};
