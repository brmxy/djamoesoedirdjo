export default function FirstSection() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center">
      <div className="absolute inset-1/2 flex h-fit w-full -translate-x-1/2 -translate-y-1/2 flex-col flex-nowrap gap-6 overflow-hidden [&_h3]:pointer-events-none [&_h3]:w-max [&_h3]:text-6xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:text-primary/90 [&_h3]:md:text-8xl">
        <h3 className="marquee">Menghadirkan Cita Rasa Tradisional</h3>
        <h3 className="marquee">Dibalut Dengan Konsep Kekinian</h3>
      </div>
      <div className="relative mb-20 flex aspect-square h-96 items-center justify-center md:h-[400px] lg:h-[512px]">
        <img
          alt="Beras Kencur | Djamoe Soedirdjo"
          className="pointer-events-none h-full w-full object-cover"
          src="https://res.cloudinary.com/yarabramasta/image/upload/f_webp,q_auto,h_512/v1/djamoesoedirdjo/beras-kencur-vertical-transparent-square"
        />
      </div>
    </section>
  );
}
