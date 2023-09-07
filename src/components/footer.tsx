import type { PropsWithChildren } from 'react';

export default function Footer(_props: {
  // eslint-disable-next-line no-undef
  timeline: gsap.core.Timeline;
}) {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col border-b md:flex-row">
        <div className="flex flex-col gap-2 border-b p-8 md:border-b-0 md:border-r">
          <h3 className="text-xl font-bold">
            djamoesoedirdjo<sup>&copy;</sup>
          </h3>
          <p className="max-w-md text-sm">
            Kami menjual produk minuman sehat tradisional &quot;Jamu&quot;
            dengan konsep yang kekinian, tanpa mengurangi cita rasa original
            kami sejak tahun 1960 dan menggunakan bahan-bahan alami pilihan.
          </p>
        </div>
        <ul className="upper flex flex-1 flex-col gap-8 p-8 text-sm md:flex-row [&_li>h3]:font-bold [&_li>h3]:uppercase [&_li]:flex [&_li]:flex-col [&_li]:gap-4">
          <li>
            <h3>Sosmed</h3>
            <Link href="https://www.instagram.com/kedai_djamoesoedirdjo/">
              Instagram
            </Link>
          </li>
          <li>
            <h3>Order</h3>
            <Link href="https://food.grab.com/id/id/restaurant/djamoe-soedirdjo-pandanwangi-delivery/IDGFSTI00001dqs">
              Grab Food (Kota Malang)
            </Link>
            <Link href="https://gofood.link/u/9P8O">GoFood (Kota Malang)</Link>
            <Link href="http://wa.me/081217230001">+62 812-1723-0001 (WhatsApp)</Link>
          </li>
          <li className="flex-1">
            <h3>Café</h3>
            <p>
              De Cluster Nirwana Pandanwangi, Pandanwangi, Kec. Blimbing, Kota
              Malang, Jawa Timur, 65126.
            </p>
            <p>Senin - Minggu, 18.00 - 23.00 WIB.</p>
          </li>
        </ul>
      </div>
      <div className="flex max-h-14 items-center justify-center px-8 py-4">
        <p className="text-center text-xs">
          djamoesoedirdjo<sup>&copy;</sup> 2023.
        </p>
      </div>
    </footer>
  );
}

function Link({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="text-foreground transition duration-300 ease-out hover:text-foreground/60"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
