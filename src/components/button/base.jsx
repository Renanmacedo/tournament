import  React from 'react';
import { styled } from "../../theme/stitches.config"
export default styled('button', {
    outline: 0,
    border: 'none',    
    height: 35,
    padding: '$2',
    fontSize: '$3',
    appearance: 'none',
    textDecoration: 'none',
    lineHeight: 1,
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