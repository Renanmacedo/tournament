import React from 'react'
import Box from "../box"
import { styled, UaiKitVariants } from "../../theme/stitches.config";
import { forwardRef } from '../../utils/forwardRef'
import { UaiKitComponentWithAsCss } from '../../utils/types'
const HeaderStyle = styled(Box, {
    width: '100%',
    backgroundColor: '$background',
    height: '75px',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    boxShadow: '0 2px 10px 2px rgba(0,0,0,.18)'
})
type ContainerProps = UaiKitComponentWithAsCss<'header'> & UaiKitVariants<typeof HeaderStyle>;
const Header = forwardRef<'header', ContainerProps>((props, ref) => (
    <HeaderStyle {...props} ref={ref} />
))

export default Header