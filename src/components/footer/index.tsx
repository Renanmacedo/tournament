import React from 'react'
import Box from '../box'
import { styled } from '../../theme/stitches.config'
const Content = styled(Box, {
    backgroundColor: '$primaryA100', 
    fw: '$full', 
    fh:'$full'
})
const Footer = ({ children}) => (
    <Content>
        <Box css={{ padding: '$4', background: 'transparent'}}>
            {children}
        </Box>
    </Content>
)
export default Footer