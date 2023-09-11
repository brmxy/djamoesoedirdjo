import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { FirstSection, ProductsSection } from './sections';

export default function Home({
  timeline: tl
}: {
  timeline: gsap.core.Timeline;
}) {
  const homeContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.to(
        homeContainer.current,
        { opacity: 1, duration: 0.5, ease: 'expo.out' },
        '-=0.5'
      );
    }, [homeContainer.current]);

    return () => {
      ctx.revert();
    };
  }, [tl]);

  return (
    <div
      className="border-b opacity-0"
      ref={homeContainer}
      style={{ minHeight: 'calc(100vh - 3rem)' }}
    >
      <FirstSection />
      <ProductsSection />
    </div>
  );
}
