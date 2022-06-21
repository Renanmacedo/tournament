import React from 'react'
import { styled, UaiKitVariants } from '../../theme/stitches.config'
import { forwardRef } from '../../utils/forwardRef';
import { UaiKitComponentWithAsCss } from '../../utils/types';
import Image from '../image';
const CardImageStyled = styled(Image,{
    width: '216px',
    height: '184px',
    variants: {
        variant:{
            thumbnail: {},
            rouded: {
                btrr: '$1',
                btfr: '$1',
            }
        }
    },
    defaultVariants: {
        variant: 'rouded'
    }
})

type CardContentProps = UaiKitComponentWithAsCss<'img'> & UaiKitVariants<typeof CardImageStyled>
const CardContent = forwardRef<'img', CardContentProps>((props, ref) => <CardImageStyled {...props} ref={ref}/>)
CardContent.displayName = "CardContent"
export default CardContent