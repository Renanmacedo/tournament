import { CSS } from './src/theme/stitches.config'

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSS
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSS
    }
    interface IntrinsicElements {
      "uai-header": any;
    }
  }
}

export {}