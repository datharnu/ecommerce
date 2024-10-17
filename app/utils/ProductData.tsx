import mixer from "../../public/commerce2.jpg";
import presonus from "../../public/Presonus.jpg";
import Behringer from "../../public/Behringer-ecommerce.jpg";
import Presounds from "../../public/Presounds.jpg";
import Dj from "../../public/Dj.jpg";
import BehringerPopular from "../../public/Behringer-Popular.jpg";
import { StaticImageData } from "next/image";
import Depusheng from "../../public/Dehusang.jpg";
import DL16S from "../../public/DL16S.jpg";
import pre2 from "../../public/pre2.jpg";
import pre3 from "../../public/pre3.jpg";
import pre4 from "../../public/pre4.jpg";
import live1 from "../../public/studiolive1.jpg";
import live2 from "../../public/studiolive2.jpg";
import live3 from "../../public/studiolive3.jpg";
import live4 from "../../public/studiolive4.jpg";
import live5 from "../../public/studiolive5.jpg";
import live6 from "../../public/studiolive6.jpg";
import pa1 from "../../public/Pa1.jpg";
import pa2 from "../../public/Pa2.jpg";
import pa3 from "../../public/Pa3.jpg";
import pa4 from "../../public/pa4.jpg";
import pa5 from "../../public/pa5.jpg";
import sonus1 from "../../public/sonus1.jpg";
import sonus2 from "../../public/sonus2.jpg";
import sonus3 from "../../public/sonus3.jpg";
import sonus4 from "../../public/sonus4.jpg";
import behringer1 from "../../public/behringer1.jpg";
import behringer2 from "../../public/behringer2.jpg";
import behringer3 from "../../public/behringer3.jpg";
import behringer4 from "../../public/behringer4.jpg";
import pyle1 from "../../public/pyle1.jpg";
import pyle2 from "../../public/pyle2.jpg";
import pyle3 from "../../public/pyle3.jpg";
import pyle4 from "../../public/pyle4.jpg";
import pyle5 from "../../public/pyle5.jpg";
import deph1 from "../../public/Deph1.jpg";
import deph2 from "../../public/Deph2.jpg";
import deph3 from "../../public/Deph3.jpg";
import deph4 from "../../public/Deph4.jpg";
import deph5 from "../../public/Deph5.jpg";
import mack1 from "../../public/mack1.jpg";
import mack2 from "../../public/mack2.jpg";
import mack3 from "../../public/mack3.jpg";
import mack4 from "../../public/mack4.jpg";
import mack5 from "../../public/mack5.jpg";

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: StaticImageData;
  additionalImages: StaticImageData[];
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
    additionalImages: [live1, live2, live3, live4, live5, live6],
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
    additionalImages: [sonus1, sonus2, sonus3, sonus4],
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
    additionalImages: [behringer1, behringer2, behringer3, behringer4],
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
    additionalImages: [pre2, pre3, pre4],
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
    additionalImages: [pyle1, pyle2, pyle3, pyle4, pyle5],
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
    additionalImages: [deph1, deph2, deph3, deph4, deph5],
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
    additionalImages: [pa1, pa2, pa3, pa4, pa5],
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
    additionalImages: [mack1, mack2, mack3, mack4, mack5],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
];
