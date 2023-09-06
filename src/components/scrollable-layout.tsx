/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, type PropsWithChildren } from 'react';

export default function ScrollableLayout({ children }: PropsWithChildren) {
  useLayoutEffect(() => {
    void (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const _locomotiveScroll = new LocomotiveScroll();
    })();

    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return <>{children}</>;
}
