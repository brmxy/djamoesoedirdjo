/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { type PropsWithChildren } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export default function ScrollableLayout({ children }: PropsWithChildren) {
  useIsomorphicLayoutEffect(() => {
    void (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // @ts-ignore
      const _locomotiveScroll = new LocomotiveScroll({
        multiplier: 1.5,
        lerp: 0.3
      });
    })();
  }, []);

  return <>{children}</>;
}
