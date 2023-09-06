/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLayoutEffect, type PropsWithChildren } from 'react';

export default function ScrollableLayout({ children }: PropsWithChildren) {
  useLayoutEffect(() => {
    void (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const _locomotiveScroll = new LocomotiveScroll({
        multiplier: 1.5
      });
    })();
  }, []);

  return <>{children}</>;
}
