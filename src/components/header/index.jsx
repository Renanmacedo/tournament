import React from 'react'
import Box from "../box"
import { styled } from "../../theme/stitches.config";

const Container = styled(Box, {
    width: '100%',
    backgroundColor: '$primary',
    height: '75px',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0
})
const Header = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )
}
export default Header