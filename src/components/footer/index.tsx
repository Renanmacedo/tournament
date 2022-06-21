import React from 'react'
import Box from '../box'
import { styled,UaiKitVariants } from '../../theme/stitches.config'
import { UaiKitComponentWithAsCss } from '../../utils/types'
import { forwardRef } from '../../utils/forwardRef'
const FooterStyled = styled(Box, {
    backgroundColor: '$primaryA100', 
    fw: '$full', 
    fh:'$full'
})

type FooterProps = UaiKitComponentWithAsCss<'footer'> & UaiKitVariants<typeof FooterStyled>

const Footer = forwardRef<'footer',FooterProps>((props, ref) => <FooterStyled {...props} ref={ref}/>)
export default Footer