export default function FirstSection() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center border-b">
      <Marquee />
      <div className="relative mb-20 flex aspect-square w-full max-w-sm items-center justify-center md:w-[480px] md:max-w-none lg:mb-0 lg:w-[512px]">
        <img
          alt="Beras Kencur | Djamoe Soedirdjo"
          className="pointer-events-none absolute inset-0 aspect-square h-full w-full object-cover"
          src="https://res.cloudinary.com/yarabramasta/image/upload/f_webp,q_auto/v1/djamoesoedirdjo/beras-kencur-vertical-transparent-square"
        />
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div
      className="absolute inset-1/2 flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col flex-nowrap gap-6 overflow-hidden pb-20 lg:pb-0 [&_h3]:w-max [&_h3]:text-6xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:text-primary/90 [&_h3]:md:text-8xl"
      data-scroll-offset="10%,10%"
      data-scroll-position="start,middle"
      data-scroll-speed={50}
    >
      <h3 className="first">Menghadirkan Cita Rasa Tradisional</h3>
      <h3 className="second">Dibalut Dengan Konsep Kekinian</h3>
    </div>
  );
}
