import React from 'react'
import { styled, UaiKitVariants } from '../../theme/stitches.config'
import { UaiKitComponentWithAsCss } from '../../utils/types'
import { forwardRef } from '../../utils/forwardRef';

const TextStyled = styled('p', {
    variants: {
        variant: {
            h1: {
                fontSize: '$12'
            },
            h2: {
                fontSize: '$11'
            },
            h3: {
                fontSize: '$10'
            },
            h4: {
                fontSize: '$9'
            },
            h5: {
                fontSize: '$8'
            },
            h6: {
                fontSize: '$7'
            },
            p: {
                fontSize: '$4'
            },
            span: {
                fontSize: '$3'
            },
        }
    },
    defaultVariants: {
        variant: 'p'
    }
})

type TextProps = UaiKitComponentWithAsCss<'p'> & UaiKitVariants<typeof TextStyled>;

const Text = forwardRef<'p', TextProps>((props, ref) => <TextStyled {...props} ref={ref} /> )

Text.displayName = "Text"
export default Text