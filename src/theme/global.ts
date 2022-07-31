import { globalCss } from './stitches.config'

const  globalStyle = globalCss({ '*': { margin: 0 }, '@font-face': [
    { fontFamily: 'Source Serif Pro, sans-serig,apple',fontWeight: '400' },
    { fontFamily: 'Source Serif Pro, sans-serig,apple',fontWeight: '600' },
    { fontFamily: 'Source Serif Pro, sans-serig,apple',fontWeight: '700' }],
    'body,html': {
        fontFamily: 'Source Serif Pro'
    }
})
export default globalStyle