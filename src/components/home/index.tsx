import { useRef } from 'react';

// eslint-disable-next-line no-undef
export default function Home(_props: { tl: gsap.core.Timeline }) {
  const home = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //   }, [home.current]);

  //   return () => {
  //     ctx.revert();
  //   };
  // }, [tl]);

  return <div ref={home} />;
}
