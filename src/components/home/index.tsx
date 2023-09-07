import { FirstSection } from './sections';

export default function Home({
  timeline: tl
}: {
  // eslint-disable-next-line no-undef
  timeline: gsap.core.Timeline;
}) {
  return (
    <div className="border-b" style={{ height: 'calc(100vh - 3rem)' }}>
      <FirstSection timeline={tl} />
    </div>
  );
}
