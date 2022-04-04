import  React from 'react';
import { styled } from "../../theme/stitches.config";
import BaseButton from './base'
const Button = styled(BaseButton, {
    
})

export default ({ onClick, children, ...rest}) => (
    <Button onClick={onClick} {...rest}>
        {children}
    </Button>
)