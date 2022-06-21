import * as React from 'react'
import { CSS } from '../theme/stitches.config'

export type UaiKitCSS = { css?: CSS, as?: React.ElementType}

export type As<Props = any> = React.ElementType<Props>

export type UaiKitComponentWithAsCss<T extends As> = React.ComponentPropsWithRef<T> & UaiKitCSS