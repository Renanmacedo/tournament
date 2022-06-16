
import React from 'react'
import Box from '../box'
import { styled } from '../../theme/stitches.config'
const Container = styled(Box, {
    fh: '$full',
    fw: '$full',
    pt: '72px'
})
const Content = ({ children}) => (

    <Container>
        {children}
    </Container>
)
export default Content