import React from 'react'
import { styled, UaiKitVariants } from '../../theme/stitches.config'
import { UaiKitComponentWithAsCss } from '../../utils/types';
import { forwardRef } from '../../utils/forwardRef';
import Box from '../box';
const CardStyle = styled(Box, {
    width: '216px',
    border: '1px solid $primary',
    padding: '$0',
    margin: '$2',
    variants: {
        variant: {
            noBorder: {
                borderColor: 'transparent',
                border: 'none'
            },
            round: {
                borderRadius: '$1'
            }
        }
    },
    defaultVariants: {
        variant: 'round'
    }
})

type CardProps = UaiKitComponentWithAsCss<'div'> & UaiKitVariants<typeof CardStyle>;
const Card = forwardRef<'div', CardProps>((props, forward) => ( <CardStyle {...props} ref={forward} /> ))
Card.displayName = "CardComponent"
export default Card