import type * as Stitches from '@stitches/react';
import React from 'react'
import { createStitches } from '@stitches/react';


export type UaiKitVariants<T> = Stitches.VariantProps<T>
export type UaiKitPropsValue<T extends keyof Stitches.CSSProperties> = 
 | Stitches.PropertyValue<T>
 | string
 | number
 | Stitches.ScaleValue<T>

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
    prefix: 'uai-',
    
    theme: {
        fontSizes: {
            1: '0.625rem',
            2: '0.75rem',
            3: '0.875rem',
            4: '1rem' ,
            5: '1.12rem',
            6: '1.25rem',
            7: '1.37rem',
            8: '1.5rem',
            9: '1.65rem',
            10: '1.75rem',
            11: '1.85rem',
            12: '2rem'

        },
        space: {
            0: 'none',
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
        mb: (value: UaiKitPropsValue<'marginBottom'>) => ({ marginBottom: value }),
        mt: (value: UaiKitPropsValue<'marginTop'>) => ({ marginTop: value }),
        mf: (value: UaiKitPropsValue<'marginLeft'>) => ({ marginLeft: value }),
        mr: (value: UaiKitPropsValue<'marginRight'>) => ({ marginRight: value }),
        mx: (value: UaiKitPropsValue<'margin'>) => ({ marginRight: value, marginLeft: value}),
        my: (value: UaiKitPropsValue<'margin'>) => ({ marginTop: value, marginBottom: value}),
        pt: (value: UaiKitPropsValue<'paddingTop'>) => ({ paddingTop: value}),
        p: (value: UaiKitPropsValue<'padding'>) => ({ padding: value}),
        btrr: (value: UaiKitPropsValue<'borderTopRightRadius'>) => ({ borderTopRightRadius: value}),
        btfr: (value: UaiKitPropsValue<'borderTopLeftRadius'>) => ({ borderTopLeftRadius: value}),
        bbrr: (value: UaiKitPropsValue<'borderTopLeftRadius'>) => ({ borderTopLeftRadius: value}),
        bbfr: (value: UaiKitPropsValue<'borderBottomLeftRadius'>) => ({ borderTopLeftRadius: value}),
    }
})

export type CSS =  Stitches.CSS<typeof config>;


export default theme;