/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useLayoutEffect, type PropsWithChildren } from 'react';

export default function ScrollableLayout({ children }: PropsWithChildren) {
  useLayoutEffect(() => {
    void (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // @ts-ignore
      const _locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <>{children}</>;
}
