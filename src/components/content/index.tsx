
import React from 'react'
import Box from '../box'
import { styled, UaiKitVariants } from '../../theme/stitches.config'
import { forwardRef } from '../../utils/forwardRef'
import { UaiKitComponentWithAsCss } from '../../utils/types'

const ContentStyle = styled(Box, {
    fh: '$full',
    fw: '$full',
    pt: '85px'
})
type ContentProps = UaiKitComponentWithAsCss<'div'> & UaiKitVariants<typeof ContentStyle>;
const Content = forwardRef<'div', ContentProps>((props, ref) => (
    <ContentStyle {...props} ref={ref} />
))
export default Content