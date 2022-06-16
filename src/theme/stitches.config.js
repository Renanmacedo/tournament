import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    prefix: 'tournament-',
    
    theme: {
        fontSizes: {
            1: '0.625rem',
            2: '0.75rem',
            3: '0.875rem',
            4: '1rem' 
        },
        space: {
            1: '0.5rem',
            2: '0.625rem',
            3: '0.75rem',
            4: '0.875rem',
            5: '1rem',
            full: '100%'
            
        },
        sizes:{
            1: '0.5rem',
            2: '0.625rem',
            3: '0.75rem',
            4: '0.875rem',
            5: '1rem',
            full: '100%'
        },
        colors: {
            primary: '#9999ff',
            primaryLight: '#e6ecff',
            primaryDark: '#6b7db3',
            primaryA100: '#ccd9ff',
            background: '#ffffff',
            boxColor: '#ffffff'
        },
        fonts: {},
        radii: {
            1: '4px',
            2: '8px',
            3: '12px',
            round: '50%',
            pill: '9999px'
        }
    },
    utils: {
        mb: (value) => ({ marginBottom: value }),
        mt: (value) => ({ marginTop: value }),
        mf: (value) => ({ marginLeft: value }),
        mr: (value) => ({ marginRight: value }),
        mx: (value) => ({ marginRight: value, marginLeft: value}),
        my: (value) => ({ marginTop: value, marginBottom: value}),
        pt: (value) => ({ paddingTop: value})
    }
})
export default theme;