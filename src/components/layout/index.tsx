import React from 'react'
import Box from "../box"
import { styled } from "../../theme/stitches.config";
const Container = styled(Box, { padding: '$0'})
const Layout = ({children, ...rest }) => (
    <Container {...rest}>
        { children }
    </Container>
)
export default Layout