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
import synth1 from "../../public/synth1.jpg";
import synth2 from "../../public/synth2.jpg";
import synth3 from "../../public/synth3.jpg";
import synth4 from "../../public/synth4.jpg";
import roland1 from "../../public/roland1.webp";
import roland2 from "../../public/roland2.jpg";
import roland3 from "../../public/roland3.jpg";
import roland4 from "../../public/roland4.jpg";
import roland5 from "../../public/roland5.jpg";
import nova1 from "../../public/nova1.webp";
import nova2 from "../../public/nova2.jpg";
import nova3 from "../../public/nova3.jpg";
import nova4 from "../../public/nova4.jpg";
import Gia1 from "../../public/Gia1.webp";
import Gia2 from "../../public/Gia2.jpg";
import Gia3 from "../../public/Gia3.jpg";
import Gia4 from "../../public/Gia4.jpg";
import rode1 from "../../public/rode1.jpg";
import rode2 from "../../public/rode2.jpg";
import rode3 from "../../public/rode3.jpg";
import rode4 from "../../public/rode4.jpg";
import shure from "../../public/shuremain.jpg";
import shure1 from "../../public/shure1.jpg";
import shure2 from "../../public/shure2.jpg";
import shure3 from "../../public/shure3.jpg";
import shure4 from "../../public/shure4.jpg";
import shurer1 from "../../public/shurer1.jpg";
import shurer2 from "../../public/shurer2.jpg";
import shurer3 from "../../public/shurer3.jpg";
import shurer4 from "../../public/shurer4.jpg";
import focus1 from "../../public/focus1.webp";
import focus2 from "../../public/focus2.jpg";
import focus3 from "../../public/focus3.jpg";
import focus4 from "../../public/focus4.jpg";
import sonusc1 from "../../public/sonusc1.jpg";
import sonusc2 from "../../public/sonusc2.jpg";
import sonusc3 from "../../public/sonusc3.jpg";
import audiot1 from "../../public/audiot1.webp";
import audiot2 from "../../public/audiot2.jpg";
import audiot3 from "../../public/audiot3.jpg";
import audiot4 from "../../public/audiot4.jpg";
import apollot1 from "../../public/apollot1.jpg";
import apollot2 from "../../public/apollot2.jpg";
import apollot3 from "../../public/apollot3.jpg";
import apollot4 from "../../public/apollot4.jpg";
import apollo1 from "../../public/apollo1.jpg";
import apollo2 from "../../public/apollo2.jpg";
import apollo3 from "../../public/apollo3.jpg";
import apollo4 from "../../public/apollo4.jpg";
import apollo5 from "../../public/apollo5.jpg";
interface ProductBase {
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

export const ProductDatas: ProductBase[] = [
  {
    id: 1,
    title:
      "PreSonus StudioLive 32SC Compact 32-channel/26-bus digital mixer with AVB networking and dual-core FLEX DSP Engine",
    price: 1150.0,
    description:
      "Portable, rack-mountable, and flexible digital console for installed sound, mobile, and recording with dual-core FLEX DSP Engine powering 286 simultaneous processors, Fully recallable 32-channel digital mixing console, Built-in AVB networking to create a complete ecosystem with PreSonus NSB stage boxes, EarMix 16M personal monitor mixers, and SW5E AVB switch, Built-in 128-channel (64x64) USB interface—the most of any mixer, Onboard multitrack SD Card recorder with true Virtual Soundcheck, 16 FlexMixes (aux mixes, subgroups, or matrix mixes), FLEX FX multi-effects processor with 4 slots to load legendary reverb emulations and delays with 4 dedicated effects buses.Complete professional solution: suite of integrated software, including Studio One Artist DAW and Capture",
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
    price: 1250.0,
    description:
      "AVB stage box for StudioLive Series III consoles with simple stage box mode and stage box + monitor mixer mode, Fully recallable, 32-channel, Series III digital rack mixer, 34 total inputs, including 32 locking combo mic/line channel inputs with recallable XMAX Class A mic preamps, 16 FlexMixes (Aux mixes, Subgroups, or Matrix mixes) and 4 dedicated subgroups, 40x40 USB 2. 0 recording interface and 55x55 AVB recording interface, Scene management with Scene Safe, 4 internal effects buses (combination of reverbs and delays with modern and vintage options)",
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
    description:
      "25-total-bus Digital Mixer with 32 Gain-Programmable Mic Preamps.25 Motized Faders. Virtual FX Rack. 7 Col TFT. 40-input",
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
    price: 495.0,
    description:
      "Mix with precision via 16 100 mm touch-sensitive motorized faders and 89 buttons covering 104 different functions, all in a compact chassis that easily sits on any desk. Features 16 high-definition Scribble Strip displays so you can identify channels at a glance. Contains complete recording-transport controls, general session controls, marker navigation controls, channel controls, and automation controls. Innovative Session Navigator provides quick control over Track and Timeline Scrolling, Zooming, Master fader control, and much more. Faders also have alternative modes to control plug-ins, bus sends, and pan position.",
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
    id: 8,
    title: "Mackie DL16S Digital Rack Mixer",
    price: 750.0,
    description:
      "16-channel Digital Rack Mixer with Integrated 16-in/16-out USB 2.0 Audio Interface. Built-in Wi-Fi Netwking. 4 Stereo FX Processs. 16 Input Channels. 13 Output Buses",
    brand: "Mackie",
    category: "Electronic",
    image: DL16S,
    additionalImages: [mack1, mack2, mack3, mack4, mack5],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },

  {
    id: 6,
    title:
      "Depusheng DT12 Studio Audio Mixer 12-Channel DJ Sound Controller Interface w/USB Drive for Computer Recording Input, XLR Microphone Jack, 48V Power, RCA Input/Output for Professional and Beginners",
    price: 100.0,
    description:
      "12-Channel DJ Mixer: The mixer is ideal for multi-device connections as it has 12 channels, each with an mix XLR mic and 6.35mm inputs. Plus XLR outputs, 1/4'' (L/R) outputs, each pair of RCA (L/R) inputs and outputs. 12 channel mixer, with MUTE , MP3 function with USB and DSP digital effects, rotary compressor for easy control, stronger bass and cleaner vocals. 256 kinds of reverberation effect adjustment can be adjusted at any time according to the needs of the scene, and the required reverberation effect can be adjusted through the reverberation knob. The package comes with USB to USB cable. Easily connect to computer recording to achieve professional computer recording and multi-functional stage use",
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
    description:
      "nputs: 16x Combo XLR/TRS mic/line level inputs 2x 1/4 (6.3 mm) TRS line inputs. Outputs: 6x XLR Aux outputs 2x XLR main outputs 1x 1/4 (6.3 mm) headphone output 1x Ultranet personal monitor Ethernet port. MIDI: 1x 5-pin DIN MIDI input1x 5-pin DIN MIDI output. Remote Connection: 1x Ethernet port",
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
    id: 5,
    title:
      "Pyle 6 Channel Mixer DJ Controller with Bluetooth, Professional Sound Digital Mixing System with LED Illumination, Slider Controls, Speed Control, 10 Band Equalizer 5U Rack Mount System",
    price: 100.0,
    description:
      "BLUETOOTH: the Bluetooth DJ controller allows you to wirelessly transmit your entire MP3 library right into your mix from devices like your iPad, iPhone, Android smartphone or tablet. UPGRADE YOUR VOICE: the DJ mixer controller manipulates your voice with high, mid, and bass mic adjustments, then use the kill switch to cancel specific frequencies of your two microphone inputs for added special voice effects. QUICK & EASY REMIXING: the mixer digital gives you the freedom to move any source to any channel or even the same source to multiple channels for quick and easy remixing. FULL SOUND CONTROL: the 6-Channel mixer gives you complete control over your sound with 10 band Graphic equalizer, echo, delay, repeat and added digital sound effects",
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
    id: 8,
    title: "Mackie DL16S Digital Rack Mixer",
    price: 750.0,
    description:
      "16-channel Digital Rack Mixer with Integrated 16-in/16-out USB 2.0 Audio Interface. Built-in Wi-Fi Netwking. 4 Stereo FX Processs. 16 Input Channels. 13 Output Buses",
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

export const MusicalDatas: ProductBase[] = [
  {
    id: 9,
    title:
      "Arturia - MicroFreak Synthesizer Keyboard - 25-Key Hybrid Synth with PCB Keyboard, Wavetable & Digital Oscillators, Analog Filters",
    price: 280.0,
    description:
      "EXPERIMENTAL HYBRID SYNTH: MicroFreak packs so much into such a compact instrument, you'll wonder how we did it. From physical modeling to wavetable synthesis, it features 17 awesome paraphonic oscillator modes, including 7 bespoke Arturia engines, 7 modes from Mutable Instruments, and 3 modes designed with Noise Engineering. Its digital engines are combined with a lush-sounding resonant analog filter for true hybrid sound design.",
    category: "Electronic",
    image: synth1,
    additionalImages: [synth2, synth3, synth4],
    brand: "Arturia",
    rating: {
      rate: 4,
      count: 120,
    },
  },
  {
    id: 10,
    title: "Roland Tabletop Synthesizer (JX-08)",
    price: 220.0,
    description:
      "Authentic JX-8P sound and behavior PG-800 programmer functions included, including 32 presets from the original JX-8P plus 111 new presets ,17 new effect types including JUNO-106 chorus, SDD-320 reverb, lo-fi comp, super filter, pitch shifter, and more, Two-part, 64-step, eight-note (per part) polyphonic sequencer with motion recording, random pattern generator, and memory for 128 patterns , Onboard arpeggiator, Expanded polyphony compared to the original hardware, up to 20 voices.",
    brand: "Roland",
    category: "Electronic",
    image: roland1,
    additionalImages: [roland2, roland3, roland4, roland5],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 14,
    title:
      "Shure MV6 Gaming Microphone, Dynamic USB PC Mic for Gaming & Streaming - Desktop Stand, Background Noise Cancellation, Tap-to-Mute & 3.5mm Output for Real-Time Headphone Monitoring",
    price: 100.0,
    description:
      "EASY SETUP - Plug-and-play with USB-C for laptops and computers. Start streaming or recording instantly without hassle.. AUTO LEVEL MODE - Real-time gain adjustment ensures consistent sound quality, whether gaming intensely or chatting quietly on stream. Perfect audio levels guaranteed.. DIGITAL POPPER STOPPER - Eliminate harsh plosive sounds with advanced technology for clear, distraction-free audio, no need for a physical pop filter.. REAL-TIME DENOISER - Intelligent DSP technology removes unwanted background noise, capturing only your voice for pristine audio quality.. VOICE ISOLATION TECHNOLOGY - Dynamic capsule and cardioid pattern ensure no unwanted background noise for crystal-clear audio every time.. TAP-TO-MUTE BUTTON - Privacy control at your fingertips. Instantly mute your microphone with a simple touch when you need a moment of silence. USB-C AND 3.5MM OUTPUT - Modern design features USB-C for easy computer connection and 3.5mm output for real-time headphone monitoring.",
    brand: "Shure",
    category: "Electronic",
    image: shure,
    additionalImages: [shure2, shure3, shure4, shure1],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 10,
    title: "Universal Audio Apollo Solo USB Heritage Edition",
    price: 350.0,
    description:
      "A special edition of UA's popular Apollo Solo USB interface — with a premium suite of 5 award-winning plug-in titles from Teletronix, Pultec, and UA — a $1,300 value. UAD SOLO Core Processing for tracking through vintage compressors, EQs, tape machines, mic preamps, and guitar amp plug-ins with near-zero latency. Unison mic preamp and guitar amp emulations from Neve, API, Avalon, Manley, Marshall, Fender, and more. Runs UAD Powered Plug-Ins via VST, AU, and AAX 64 formats in major DAWs. Compatible with Pro Tools, Cubase, Ableton Live, and more (not compatible with LUNA Recording System)",
    brand: "Apollo",
    category: "Electronic",
    image: apollo1,
    additionalImages: [apollo2, apollo3, apollo4, apollo5],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 12,
    title: "Roland Gaia 2 Advanced Sonic Capabilities Synthesizer",
    price: 488.0,
    description:
      "Powerful Roland synthesizer with advanced sonic capabilities, Intuitive panel layout and hands-on workflow make it easy to learn synthesis and sound design, Newly developed hybrid sound engine with one wavetable oscillator and two virtual analog oscillators , Attractive aluminum panel filled with high-quality knobs and sliders, Freely assignable modulation routings for fast sound creation, Motional Pad for adding real-time movement and expression to sounds, Sequencer with real-time and step-recording options, MFX section with 53 unique effect types.",
    brand: "Roland",
    category: "Electronic",
    image: Gia1,
    additionalImages: [Gia2, Gia3, Gia4],
    rating: {
      rate: 4,
      count: 15,
    },
  },
  {
    id: 13,
    title:
      "RØDE NT1 Signature Series Condenser Microphone with SM6 Shockmount and Pop Filter - Black",
    price: 100.0,
    description:
      "Large-diaphragm cardioid condenser microphone ideal for music production, vocal recording, streaming and podcasting, HF6 1-inch true condenser capsule with a smooth frequency response, high sensitivity and extremely high SPL handling, Exceptionally low noise (4dBA) – the world’s quietest studio condenser microphone, Studio-grade shock mount, pop filter and premium XLR cable included, Built to the highest standard from premium components in RØDE’s precision facilities in Sydney, Australia and backed by a 10-year warranty.",
    brand: "Rode",
    category: "Electronic",
    image: rode1,
    additionalImages: [rode2, rode3, rode4],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 10,
    title: "Roland Tabletop Synthesizer (JX-08)",
    price: 220.0,
    description:
      "Authentic JX-8P sound and behavior PG-800 programmer functions included, including 32 presets from the original JX-8P plus 111 new presets ,17 new effect types including JUNO-106 chorus, SDD-320 reverb, lo-fi comp, super filter, pitch shifter, and more, Two-part, 64-step, eight-note (per part) polyphonic sequencer with motion recording, random pattern generator, and memory for 128 patterns , Onboard arpeggiator, Expanded polyphony compared to the original hardware, up to 20 voices.",
    brand: "Roland",
    category: "Electronic",
    image: roland1,
    additionalImages: [roland2, roland3, roland4, roland5],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 14,
    title:
      "Shure MV6 Gaming Microphone, Dynamic USB PC Mic for Gaming & Streaming - Desktop Stand, Background Noise Cancellation, Tap-to-Mute & 3.5mm Output for Real-Time Headphone Monitoring",
    price: 100.0,
    description:
      "EASY SETUP - Plug-and-play with USB-C for laptops and computers. Start streaming or recording instantly without hassle.. AUTO LEVEL MODE - Real-time gain adjustment ensures consistent sound quality, whether gaming intensely or chatting quietly on stream. Perfect audio levels guaranteed.. DIGITAL POPPER STOPPER - Eliminate harsh plosive sounds with advanced technology for clear, distraction-free audio, no need for a physical pop filter.. REAL-TIME DENOISER - Intelligent DSP technology removes unwanted background noise, capturing only your voice for pristine audio quality.. VOICE ISOLATION TECHNOLOGY - Dynamic capsule and cardioid pattern ensure no unwanted background noise for crystal-clear audio every time.. TAP-TO-MUTE BUTTON - Privacy control at your fingertips. Instantly mute your microphone with a simple touch when you need a moment of silence. USB-C AND 3.5MM OUTPUT - Modern design features USB-C for easy computer connection and 3.5mm output for real-time headphone monitoring.",
    brand: "Shure",
    category: "Electronic",
    image: shure,
    additionalImages: [shure2, shure3, shure4, shure1],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 19,
    title: "Universal Audio Apollo Twin X DUO Heritage Edition",
    price: 620.0,
    description:
      "A special edition of UA's acclaimed Apollo Twin X interface — with a premium suite of 5 award-winning plug-in titles from Teletronix, Pultec, and UA — a $1,300 value. Elite-class A/D and D/A conversion derived from Apollo X rackmount interfaces paired with 2 Unison mic preamps deliver stunning models of classic tube and transformer-based mic preamps and guitar amps. 2 Unison mic preamps offer stunning models of classic tube and transformer-based mic preamps and guitar amps. UAD DUO Core Processing for tracking through vintage compressors, EQs, tape machines, mic preamps, and guitar amp plug-ins with near-zero latency. Produce with LUNA Recording System — a fully-integrated recording application made for Apollo (Mac only)",
    brand: "Apollo",
    category: "Electronic",
    image: apollot1,
    additionalImages: [apollot2, apollot3, apollot4],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 15,
    title:
      "Shure SM7B Microphone - Vocal Dynamic Studio Mic for Broadcast, Podcast, Recording, Gaming & Streaming, XLR, Rugged Construction, Detachable Windscreen, Smooth Sound, Warm Vocals, Wide-Range Frequency",
    price: 300.0,
    description:
      "PROFESSIONAL XLR CONNECTION - The XLR Connection Along With An Audio Interface Allows You More Control Over The Sound — Thus A Better Overall Sound Quality.. CLASSIC CARDIOID PATTERN WITH UNIFORM CAPTURE - The SM7B Cardioid Pattern Is Designed To Reject Off-axis Audio, So You Can Sing Or Speak At A Comfortable Angle And It Captures The Sound, Just As You Want It, With Minimum Coloration.. SHIELD YOUR SOUND - We Added Advanced Electromagnetic Shielding To Defeat Hum From Computer Monitors And Other Studio Equipment.",
    brand: "Shure",
    category: "Electronic",
    image: shurer1,
    additionalImages: [shurer2, shurer3, shurer4],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 13,
    title:
      "RØDE NT1 Signature Series Condenser Microphone with SM6 Shockmount and Pop Filter - Black",
    price: 100.0,
    description:
      "Large-diaphragm cardioid condenser microphone ideal for music production, vocal recording, streaming and podcasting, HF6 1-inch true condenser capsule with a smooth frequency response, high sensitivity and extremely high SPL handling, Exceptionally low noise (4dBA) – the world’s quietest studio condenser microphone, Studio-grade shock mount, pop filter and premium XLR cable included, Built to the highest standard from premium components in RØDE’s precision facilities in Sydney, Australia and backed by a 10-year warranty.",
    brand: "Rode",
    category: "Electronic",
    image: rode1,
    additionalImages: [rode2, rode3, rode4],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
  {
    id: 16,
    title:
      "Focusrite Scarlett Solo 3rd Gen USB Audio Interface for Guitarists, Vocalists, Podcasters or Producers to record and playback studio quality sound",
    price: 65.0,
    description:
      "Pro performance with great pre-amps - Achieve a brighter recording thanks to the high performing mic pre-amps of the Scarlett 3rd Gen. A switchable Air mode will add extra clarity to your acoustic instruments when recording with your Solo 3rd Gen. Get the perfect guitar and vocal take with - With two high-headroom instrument inputs to plug in your guitar or bass so that they shine through. Capture your voice and instruments without any unwanted clipping or distortion thanks to our Gain Halos.Studio quality recording for your music & podcasts - Achieve pro sounding recordings with Scarlett 3rd Gen’s high-performance converters enabling you to record and mix at up to 24-bit/192kHz. Your recordings will retain all of their sonic qualities.Low-noise for crystal clear listening - 2 low-noise balanced outputs provide clean audio playback with 3rd Gen. Hear all the nuances of your tracks or music from Spotify, Apple & Amazon Music. Plug-in headphones for private listening in high-fidelity.",
    brand: "Focusrite",
    category: "Electronic",
    image: focus1,
    additionalImages: [focus2, focus3, focus4],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },

  {
    id: 17,
    title:
      "PreSonus Studio 24c 2x2, 192 kHz, USB Audio Interface with Studio One Artist and Ableton Live Lite DAW Recording Software",
    price: 90.0,
    description:
      "Mobile-ready, bus-powered 2-in or 2-out USB-C audio interface; no power supply needed (USB-C to C and USB-C to A cables included).Loaded with 2 pristine XMAX-L solid-state mic preamps to capture every detail.Studio-grade converters allow for up to 24-bit or 96 kHz recording and playback.Stay on top of your recording levels with ladder-style LED monitoring and low-latency direct monitoring.Studio One Artist and Ableton Live Lite DAW Recording Software included.Comes with Studio Magic Plug-In Suite - over 1,000 USD worth of computer recording software plug-ins.",
    brand: "PreSonus",
    category: "Electronic",
    image: sonusc1,
    additionalImages: [sonusc2, sonusc3],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },

  {
    id: 18,
    title:
      "Audio-Technica AT2020 Cardioid Condenser Studio XLR Microphone, Ideal for Project/Home Studio Applications,Black",
    price: 65.0,
    description:
      "The price/performance standard in side address studio condenser microphone technology. Ideal for project/home studio applications; The noise level is 20 dB SPL.High SPL handling and wide dynamic range provide unmatched versatility, Custom engineered low mass diaphragm provides extended frequency response and superior transient response, Cardioid polar pattern reduces pickup of sounds from the sides and rear, improving isolation of desired sound source. Output connector: integral 3 pin XLRM type",
    brand: "Audio-Technica",
    category: "Electronic",
    image: audiot1,
    additionalImages: [audiot4, audiot2, audiot3],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
];

export const LimitedDatas: ProductBase[] = [
  {
    id: 11,
    title:
      "Novation MiniNova Analogue Modelling Compact 37 Mini-key Synth – Tough, compact, powerful mini-synth with pitch-correcting effect vocoder, 256 onboard sounds and five effects per voice layering Blue",
    price: 350.0,
    description:
      "Make Huge Sounds- Create deep, gritty bass, soaring leads, lush pads, and vintage sounds with up to 18 voices and powerful effects.. Built By a Legend- MiniNova’s synth engine was conceived, shaped, and refined by British synth legend Chris Huggett and has his five decades of passion, experience, and expertise behind it.. Gently Tweak or Instantly Warp- Subtly tweak your sounds with the knobs, or totally warp them with the Animate buttons, pitch, and modulation wheels. Create Unique Vocals - Talk or sing into the mic and run your voice through the keyboard and effects engine. Use MiniNova’s secret weapon for the perfect vocal – VocalTune. Your voice will automatically be tuned to the notes you play on the keyboard.",
    brand: "Novation",
    category: "Electronic",
    image: nova1,
    additionalImages: [nova2, nova3, nova4],
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
    description:
      "BLUETOOTH: the Bluetooth DJ controller allows you to wirelessly transmit your entire MP3 library right into your mix from devices like your iPad, iPhone, Android smartphone or tablet. UPGRADE YOUR VOICE: the DJ mixer controller manipulates your voice with high, mid, and bass mic adjustments, then use the kill switch to cancel specific frequencies of your two microphone inputs for added special voice effects. QUICK & EASY REMIXING: the mixer digital gives you the freedom to move any source to any channel or even the same source to multiple channels for quick and easy remixing. FULL SOUND CONTROL: the 6-Channel mixer gives you complete control over your sound with 10 band Graphic equalizer, echo, delay, repeat and added digital sound effects",
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
    id: 16,
    title:
      "Focusrite Scarlett Solo 3rd Gen USB Audio Interface for Guitarists, Vocalists, Podcasters or Producers to record and playback studio quality sound",
    price: 65.0,
    description:
      "Pro performance with great pre-amps - Achieve a brighter recording thanks to the high performing mic pre-amps of the Scarlett 3rd Gen. A switchable Air mode will add extra clarity to your acoustic instruments when recording with your Solo 3rd Gen. Get the perfect guitar and vocal take with - With two high-headroom instrument inputs to plug in your guitar or bass so that they shine through. Capture your voice and instruments without any unwanted clipping or distortion thanks to our Gain Halos.Studio quality recording for your music & podcasts - Achieve pro sounding recordings with Scarlett 3rd Gen’s high-performance converters enabling you to record and mix at up to 24-bit/192kHz. Your recordings will retain all of their sonic qualities.Low-noise for crystal clear listening - 2 low-noise balanced outputs provide clean audio playback with 3rd Gen. Hear all the nuances of your tracks or music from Spotify, Apple & Amazon Music. Plug-in headphones for private listening in high-fidelity.",
    brand: "Focusrite",
    category: "Electronic",
    image: focus1,
    additionalImages: [focus2, focus3, focus4],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },

  {
    id: 17,
    title:
      "PreSonus Studio 24c 2x2, 192 kHz, USB Audio Interface with Studio One Artist and Ableton Live Lite DAW Recording Software",
    price: 90.0,
    description:
      "Mobile-ready, bus-powered 2-in or 2-out USB-C audio interface; no power supply needed (USB-C to C and USB-C to A cables included).Loaded with 2 pristine XMAX-L solid-state mic preamps to capture every detail.Studio-grade converters allow for up to 24-bit or 96 kHz recording and playback.Stay on top of your recording levels with ladder-style LED monitoring and low-latency direct monitoring.Studio One Artist and Ableton Live Lite DAW Recording Software included.Comes with Studio Magic Plug-In Suite - over 1,000 USD worth of computer recording software plug-ins.",
    brand: "PreSonus",
    category: "Electronic",
    image: sonusc1,
    additionalImages: [sonusc2, sonusc3],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },

  {
    id: 18,
    title:
      "Audio-Technica AT2020 Cardioid Condenser Studio XLR Microphone, Ideal for Project/Home Studio Applications,Black",
    price: 65.0,
    description:
      "The price/performance standard in side address studio condenser microphone technology. Ideal for project/home studio applications; The noise level is 20 dB SPL.High SPL handling and wide dynamic range provide unmatched versatility, Custom engineered low mass diaphragm provides extended frequency response and superior transient response, Cardioid polar pattern reduces pickup of sounds from the sides and rear, improving isolation of desired sound source. Output connector: integral 3 pin XLRM type",
    brand: "Audio-Technica",
    category: "Electronic",
    image: audiot1,
    additionalImages: [audiot4, audiot2, audiot3],
    rating: {
      rate: 4.5,
      count: 15,
    },
  },
];

// {
//   id: 10,
//   title: "Mackie DL16S Digital Rack Mixer",
//   price: 800.0,
//   description: "DL16S",
//   brand: "Mackie",
//   category: "Electronic",
//   image: DL16S,
//   additionalImages: [mack1, mack2, mack3, mack4, mack5],
//   rating: {
//     rate: 4.5,
//     count: 15,
//   },
// },

// Merging the two datasets into one
export const AllProductDatas: ProductBase[] = [
  ...ProductDatas,
  ...MusicalDatas,
  ...LimitedDatas,
];
