import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function FirstSection({
  timeline: tl
}: {
  timeline: gsap.core.Timeline;
}) {
  const section = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.to(section.current, { opacity: 1 });
    }, [section.current]);

    return () => {
      ctx.revert();
    };
  }, [tl]);

  return (
    <section
      className="relative flex h-full flex-col items-center justify-center"
      ref={section}
    >
      <Marquee />
      <div className="relative mb-20 flex aspect-square w-full items-center justify-center md:w-[480px] lg:mb-0 lg:w-[512px] max-w-sm md:max-w-none">
        <img
          alt="Beras Kencur | Djamoe Soedirdjo"
          className="pointer-events-none h-full w-full object-cover"
          src="https://res.cloudinary.com/yarabramasta/image/upload/f_webp,q_auto/v1/djamoesoedirdjo/beras-kencur-vertical-transparent-square"
        />
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="pointer-events-none absolute inset-1/2 flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col flex-nowrap gap-6 overflow-hidden pb-20 lg:pb-0 [&_h3]:pointer-events-none [&_h3]:w-max [&_h3]:text-6xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:text-primary/90 [&_h3]:md:text-8xl">
      <h3 className="first">Menghadirkan Cita Rasa Tradisional</h3>
      <h3 className="second">Dibalut Dengan Konsep Kekinian</h3>
    </div>
  );
}
