import React from 'react'
import { styled } from '../../theme/stitches.config'
import { forwardRef } from '../../utils/forwardRef';
import { UaiKitComponentWithAsCss } from '../../utils/types';

const ImageStyled = styled('img', {

    maxWidth: '$full',
})

type ImageComponentProps = UaiKitComponentWithAsCss<'img'>
const Image = forwardRef<'img', ImageComponentProps>((props, ref) => <ImageStyled {...props} ref={ref} />)
Image.displayName = "Image"
export default Image