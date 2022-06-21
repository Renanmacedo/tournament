import React from 'react'
import { styled, UaiKitVariants } from '../../theme/stitches.config'
import { forwardRef } from '../../utils/forwardRef';
import { UaiKitComponentWithAsCss } from '../../utils/types';
import Box from '../box';
const CardActionsStyled = styled(Box, {
    p: '$2',
    display:'flex',
    variants: {}
})

type CardContentProps = UaiKitComponentWithAsCss<'div'> & UaiKitVariants<typeof CardActionsStyled>
const CardContent = forwardRef<'div', CardContentProps>((props, ref) => <CardActionsStyled {...props} ref={ref}/>)
CardContent.displayName = "CardActions"
export default CardContent