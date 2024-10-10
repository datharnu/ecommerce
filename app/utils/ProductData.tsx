import mixer from "../../public/commerce2.jpg";
import presonus from "../../public/Presonus.jpg";
import Behringer from "../../public/Behringer-ecommerce.jpg";
import Presounds from "../../public/Presounds.jpg";
import Dj from "../../public/Dj.jpg";
import BehringerPopular from "../../public/Behringer-Popular.jpg";
import { StaticImageData } from "next/image";
import Depusheng from "../../public/Dehusang.jpg";
import DL16S from "../../public/DL16S.jpg";
interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: StaticImageData;
  brand: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductDatas: ProductData[] = [
  {
    id: 1,
    title:
      "PreSonus StudioLive 32SC Compact 32-channel/26-bus digital mixer with AVB networking and dual-core FLEX DSP Engine",
    price: 1200.0,
    description: "Y-UC Mixer",
    category: "Electronic",
    image: mixer,
    brand: "PreSonus",
    rating: {
      rate: 4,
      count: 120,
    },
  },
  {
    id: 2,
    title:
      "PreSonus StudioLive 32R 34-input, 32-channel Series III stage box and rack mixer",
    price: 1200.0,
    description: "Presonus Mixer",
    category: "Electronic",
    brand: "PreSonus",
    image: presonus,
    rating: {
      rate: 4.5,
      count: 10,
    },
  },
  {
    id: 3,
    title: "Behringer X32 Digital Mixer",
    price: 1500.0,
    description: "Behringer X32 Digital Mixer",
    category: "Electronic",
    brand: "Behringer",
    image: Behringer,
    rating: {
      rate: 4.5,
      count: 20,
    },
  },
  {
    id: 4,
    title: "PreSonus FaderPort 16 16-channel Mix Production Controller",
    price: 480.0,
    description: "Presonus Mixer",
    category: "Electronic",
    brand: "PreSonus",
    image: Presounds,
    rating: {
      rate: 4.5,
      count: 15,
    },
  },

  {
    id: 5,
    title:
      "Pyle 6 Channel Mixer DJ Controller with Bluetooth, Professional Sound Digital Mixing System with LED Illumination, Slider Controls, Speed Control, 10 Band Equalizer 5U Rack Mount System",
    price: 100.0,
    description: "Dj Mixer",
    category: "Electronic",
    image: Dj,
    brand: "Pyle",
    rating: {
      rate: 4.5,
      count: 40,
    },
  },

  {
    id: 6,
    title:
      "Depusheng DT12 Studio Audio Mixer 12-Channel DJ Sound Controller Interface w/USB Drive for Computer Recording Input, XLR Microphone Jack, 48V Power, RCA Input/Output for Professional and Beginners",
    price: 100.0,
    description: "Depusheng Mixer",
    category: "Electronic",
    image: Depusheng,
    brand: "Depusheng",
    rating: {
      rate: 4.5,
      count: 75,
    },
  },

  {
    id: 7,
    title:
      "Behringer XAir XR18 18-Channel 12-Bus Portable Digital Mixer for iPad or Android Tablet, with Integrated Wi-Fi, 16 Midas-Designed Preamps",
    price: 1200.0,
    description: "Y-UC Mixer",
    category: "Electronic",
    brand: "Behringer",
    image: BehringerPopular,
    rating: {
      rate: 4,
      count: 120,
    },
  },

  {
    id: 8,
    title: "Mackie DL16S Digital Rack Mixer",
    price: 800.0,
    description: "DL16S",
    brand: "Mackie",
    category: "Electronic",
    image: DL16S,
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
];
