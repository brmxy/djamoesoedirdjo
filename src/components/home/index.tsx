import { useRef } from 'react';
import FirstSection from './first-section';

// eslint-disable-next-line no-undef
export default function Home(_props: { timeline: gsap.core.Timeline }) {
  const home = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //   }, [home.current]);

  //   return () => {
  //     ctx.revert();
  //   };
  // }, [tl]);

  return (
    <div className="flex flex-1 flex-col" ref={home}>
      <FirstSection />
    </div>
  );
}
