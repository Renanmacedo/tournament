import React from 'react'
import { styled, UaiKitVariants } from '../../theme/stitches.config'
import { forwardRef } from '../../utils/forwardRef';
import { UaiKitComponentWithAsCss } from '../../utils/types';
import Box from '../box';
const CardContentStyled = styled(Box, {
    padding: '$1',
    backgroundColor: 'transparent',
    variants: {}
})

type CardContentProps = UaiKitComponentWithAsCss<'div'> & UaiKitVariants<typeof CardContentStyled>
const CardContent = forwardRef<'div', CardContentProps>((props, ref) => <CardContentStyled {...props} ref={ref}/>)
CardContent.displayName = "CardContent"
export default CardContent