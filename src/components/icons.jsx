import { GenIcon } from 'react-icons'

// SVG icon data carried over from the original seiretsu.io build.

export const CloseIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const ChevronDownIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const MailIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        },
        child: [],
      },
    ],
  })(props)

export const PhoneIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
        },
        child: [],
      },
    ],
  })(props)

export const MenuIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const ArrowRightIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const FacebookIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 320 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
        },
        child: [],
      },
    ],
  })(props)

export const InstagramIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
        },
        child: [],
      },
    ],
  })(props)

export const MapPinIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
        },
        child: [],
      },
    ],
  })(props)

export const ArrowUpIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const WhatsappIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
        },
        child: [],
      },
    ],
  })(props)

export const ClipboardIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
        },
        child: [],
      },
    ],
  })(props)

export const CardIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
        },
        child: [],
      },
    ],
  })(props)

export const QrCodeIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z',
        },
        child: [],
      },
    ],
  })(props)

export const WifiIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
        },
        child: [],
      },
    ],
  })(props)

export const StarIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
        },
        child: [],
      },
    ],
  })(props)

export const BoltCircleIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
        },
        child: [],
      },
    ],
  })(props)

export const PriceTagIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
        },
        child: [],
      },
    ],
  })(props)

export const SupportIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        },
        child: [],
      },
    ],
  })(props)

export const ShieldIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        },
        child: [],
      },
    ],
  })(props)

export const SimCardIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'rect',
        attr: { width: '14', height: '20', x: '5', y: '2', rx: '2', ry: '2' },
        child: [],
      },
      { tag: 'path', attr: { d: 'M12 18h.01' }, child: [] },
    ],
  })(props)

export const RouterIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      { tag: 'path', attr: { d: 'M4 10a7.31 7.31 0 0 0 10 10Z' }, child: [] },
      { tag: 'path', attr: { d: 'm9 15 3-3' }, child: [] },
      { tag: 'path', attr: { d: 'M17 13a6 6 0 0 0-6-6' }, child: [] },
      { tag: 'path', attr: { d: 'M21 13A10 10 0 0 0 11 3' }, child: [] },
    ],
  })(props)

export const ReceiptIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'rect',
        attr: { width: '20', height: '12', x: '2', y: '6', rx: '2' },
        child: [],
      },
      { tag: 'circle', attr: { cx: '12', cy: '12', r: '2' }, child: [] },
      { tag: 'path', attr: { d: 'M6 12h.01M18 12h.01' }, child: [] },
    ],
  })(props)

export const SlidersIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      { tag: 'path', attr: { d: 'M4.9 16.1C1 12.2 1 5.8 4.9 1.9' }, child: [] },
      {
        tag: 'path',
        attr: { d: 'M7.8 4.7a6.14 6.14 0 0 0-.8 7.5' },
        child: [],
      },
      { tag: 'circle', attr: { cx: '12', cy: '9', r: '2' }, child: [] },
      { tag: 'path', attr: { d: 'M16.2 4.8c2 2 2.26 5.11.8 7.47' }, child: [] },
      {
        tag: 'path',
        attr: { d: 'M19.1 1.9a9.96 9.96 0 0 1 0 14.1' },
        child: [],
      },
      { tag: 'path', attr: { d: 'M9.5 18h5' }, child: [] },
      { tag: 'path', attr: { d: 'm8 22 4-11 4 11' }, child: [] },
    ],
  })(props)

export const PaymentIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'rect',
        attr: { width: '20', height: '14', x: '2', y: '5', rx: '2' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '2', x2: '22', y1: '10', y2: '10' },
        child: [],
      },
    ],
  })(props)

export const ZapIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' },
        child: [],
      },
      {
        tag: 'path',
        attr: { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' },
        child: [],
      },
    ],
  })(props)

export const SmileIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'line',
        attr: { x1: '21', x2: '14', y1: '4', y2: '4' },
        child: [],
      },
      { tag: 'line', attr: { x1: '10', x2: '3', y1: '4', y2: '4' }, child: [] },
      {
        tag: 'line',
        attr: { x1: '21', x2: '12', y1: '12', y2: '12' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '8', x2: '3', y1: '12', y2: '12' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '21', x2: '16', y1: '20', y2: '20' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '12', x2: '3', y1: '20', y2: '20' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '14', x2: '14', y1: '2', y2: '6' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '8', x2: '8', y1: '10', y2: '14' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '16', x2: '16', y1: '18', y2: '22' },
        child: [],
      },
    ],
  })(props)

export const AntennaIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      { tag: 'path', attr: { d: 'M12 20h.01' }, child: [] },
      { tag: 'path', attr: { d: 'M2 8.82a15 15 0 0 1 20 0' }, child: [] },
      { tag: 'path', attr: { d: 'M5 12.859a10 10 0 0 1 14 0' }, child: [] },
      { tag: 'path', attr: { d: 'M8.5 16.429a5 5 0 0 1 7 0' }, child: [] },
    ],
  })(props)

export const CheckIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const MinusIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const PlusIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const QuoteIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z',
        },
        child: [],
      },
    ],
  })(props)

export const RatingStarIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
        },
        child: [],
      },
    ],
  })(props)

export const MobileIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
        child: [],
      },
    ],
  })(props)

export const DevicesIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        },
        child: [],
      },
    ],
  })(props)

export const SignalIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z',
        },
        child: [],
      },
    ],
  })(props)

export const GlobeIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
        },
        child: [],
      },
    ],
  })(props)

export const TvIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z',
        },
        child: [],
      },
    ],
  })(props)

export const CloudIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z',
        },
        child: [],
      },
    ],
  })(props)

export const SearchIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
        },
        child: [],
      },
    ],
  })(props)

export const MicIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '1.5',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z',
        },
        child: [],
      },
    ],
  })(props)

export const TeamIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        child: [],
      },
    ],
  })(props)

export const CallDropIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z',
        },
        child: [],
      },
    ],
  })(props)

export const CameraIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
        },
        child: [],
      },
    ],
  })(props)

export const BoltIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M13 10V3L4 14h7v7l9-11h-7z',
        },
        child: [],
      },
    ],
  })(props)

export const BuildingIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        },
        child: [],
      },
    ],
  })(props)

export const ChecklistIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
        },
        child: [],
      },
    ],
  })(props)

export const ClockIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        child: [],
      },
    ],
  })(props)

export const ArrowUpRightIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const ErrorIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        child: [],
      },
    ],
  })(props)

export const CheckCircleIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(props)

export const UserIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        },
        child: [],
      },
    ],
  })(props)

export const ServiceIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
        },
        child: [],
      },
    ],
  })(props)

export const MessageIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
        },
        child: [],
      },
    ],
  })(props)

export const ShareIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
        },
        child: [],
      },
    ],
  })(props)

export const SendIcon = (props) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z',
        },
        child: [],
      },
    ],
  })(props)
