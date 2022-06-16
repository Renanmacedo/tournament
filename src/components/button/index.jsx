import  React from 'react';
import { styled } from "../../theme/stitches.config";
import Base from './base'
const Button = styled(Base)

export default ({ onClick, children, ...rest}) => (
    <Button onClick={onClick} {...rest}>
        {children}
    </Button>
)