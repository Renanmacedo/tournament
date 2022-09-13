import  React from 'react';
import { styled } from "../../theme/stitches.config"
export default styled('button', {
    outline: 0,
    border: 'none',    
    minHeight: 35,
    padding: '$4',
    fontSize: '$3',
    appearance: 'none',
    textDecoration: 'none',
    lineHeight: 1,
    cursor: 'pointer',
    variants: {
        color: {
            primary: {
                color: '#fff',
                backgroundColor: '$primary',
                border: '1px solid $primary'
            },
            light: {
                color: '$primaryDark',
                backgroundColor: '$primaryLight',
                border: '1px solid $primaryLight',
            }
        },
        pill: {
            true: {
                borderRadius: '$pill',
            }
        }
    },
})