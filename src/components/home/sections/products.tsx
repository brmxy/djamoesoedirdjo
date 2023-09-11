import { useMemo } from 'react';

export default function ProductsSection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:border-b-0 lg:[&>*:last-child]:border-r-0 md:[&>*:nth-child(2)]:border-r-0 lg:[&>*:nth-child(2)]:border-r lg:[&>*:nth-child(3)]:border-r-0 md:[&>*:nth-child(4)]:border-r-0 lg:[&>*:nth-child(4)]:border-b-0 lg:[&>*:nth-child(4)]:border-r md:[&>*:nth-child(5)]:border-b-0">
        {products.map((product, index) => (
          <ProductImage key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

interface Product {
  name: string;
  description: string;
}

const products: Product[] = [
  {
    name: 'Beras Kencur',
    description:
      'Berbahan dasar beras & kencur, bagus untuk menambah nafsu makan.'
  },
  {
    name: 'Kunir Asem',
    description:
      'Cocok untuk mencegah penuaan kulit dengan antioksidan, terbuat dari kunyit dan asam jawa.'
  },
  {
    name: 'Kunir Madu',
    description:
      'Solusi untuk penyakit maag kronis, terbuat dari kunyit dan madu yang dicampur.'
  },
  {
    name: 'Temulawak',
    description:
      'Ekstrak Curcuma (Javanese Ginger) atau temulawak, bagus untuk kesehatan jantung.'
  },
  {
    name: 'Daun Sirih',
    description:
      'Baik dikonsumsi oleh wanita, mengatasi keputihan. Berbahan dasar daun sirih.'
  },
  {
    name: 'Daun Beluntas',
    description:
      'Sifatnya yang mengatasi bakteri, cocok untuk menghilangkan bau badan.'
  }
];

function ProductImage({ name, description }: Product) {
  const getImageProps = useMemo(() => {
    const _name = `${name.toLowerCase().replace(/\s/g, '-')}-transparent`;
    const src = `https://res.cloudinary.com/yarabramasta/image/upload/f_webp,q_auto,w_1080/v1/djamoesoedirdjo/500ml/1080/${_name}`;

    return {
      src,
      srcSet: `${src} 1024vw, ${src.replace('1080', '960')} 640w, ${src.replace(
        '1080',
        '720'
      )} 320w`,
      sizes: `(min-width: 36em) 33.3vw, 100vw`
    };
  }, [name]);

  return (
    <div className="group relative aspect-square overflow-hidden border-b md:border-r">
      <div className="absolute left-0 top-0 flex h-min w-full items-center p-6">
        <p className="text-sm font-bold uppercase">{name}</p>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-primary/10">
        <img
          alt={`${name} | Djamoe Soedirdjo`}
          className="aspect-square h-full w-full object-cover"
          {...getImageProps}
        />
      </div>
      <div className="relative flex h-full w-full items-end">
        <div className="desc flex h-fit w-full origin-bottom translate-y-full transform-gpu items-center border-t bg-background/90 p-6 backdrop-blur-sm transition delay-150 duration-300 ease-out will-change-transform group-hover:translate-y-0 group-hover:delay-0">
          <p className="w-full text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
