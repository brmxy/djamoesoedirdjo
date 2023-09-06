import { useLayoutEffect, useRef } from 'react';

export default function Loader({
  onLoadingComplete
}: {
  onLoadingComplete: () => void;
}) {
  const loader = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className="fixed inset-0 z-[999] h-full w-full bg-background/60 backdrop-blur-sm"
      ref={loader}
    >
      <div className="relative" />
    </div>
  );
}
