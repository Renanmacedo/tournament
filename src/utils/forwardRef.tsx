
import React, {ForwardRefRenderFunction}  from 'react'
import { As, UaiKitCSS } from './types'

export  const forwardRef = <Component extends As, ComponentProps extends object = {}>(
    component: ForwardRefRenderFunction<any,UaiKitCSS & ComponentProps>
) => React.forwardRef<Component,ComponentProps>(component)
