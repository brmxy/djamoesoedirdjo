import { ArchiveIcon } from '@radix-ui/react-icons';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Header({
  timeline: tl
}: {
  timeline: gsap.core.Timeline;
}) {
  const header = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.to(header.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.15,
        ease: 'expo.out'
      });
    }, [header.current]);

    return () => {
      ctx.revert();
    };
  }, [tl]);

  return (
    <header
      className="sticky left-0 top-0 z-50 w-full border-b bg-background/60 opacity-0 backdrop-blur-sm"
      ref={header}
    >
      <div className="flex max-h-14 items-center justify-between">
        <div className="flex items-center">
          <a
            className="group h-full border-r px-8 py-4 transition duration-300 ease-out hover:bg-foreground"
            href="/"
          >
            <h3 className="font-bold leading-none tracking-tighter transition duration-300 ease-out group-hover:text-background">
              djamoesoedirdjo<sup>&copy;</sup>
            </h3>
          </a>
        </div>
        <div className="flex flex-row items-center justify-end">
          <a
            aria-label="Order Sekarang"
            className="group group flex h-full flex-row flex-nowrap items-center justify-center gap-2 border-l px-8 py-4 transition duration-300 ease-out hover:bg-foreground"
            href="https://wa.me/081217230001"
            rel="noopener noreferrer"
            target="_blank"
            title="Order Sekarang"
          >
            <ArchiveIcon className="h-4 w-4 transition duration-300 ease-out group-hover:text-background" />
            <p className="hidden flex-1 text-sm uppercase leading-none transition duration-300 ease-out group-hover:text-background md:block">
              Order Sekarang
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}
