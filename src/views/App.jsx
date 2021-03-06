
import React from "react";
import Header from '../components/header'
import Layout from '../components/layout'
import Content from '../components/content'
import Footer from '../components/footer'
import { globalCss} from '../theme/stitches.config'
import * as themes from '../theme/'
import { getTheme } from '../utils/themeName';
import  { Card, CardContent, CardImage }  from '../components/card';
import  Text from '../components/text';
import Flex from "../components/flex";
const themeName = getTheme()
const theme = themes[themeName]

const globalStyle = globalCss({ '*': { margin: 0 }, '@font-face': [
    { fontFamily: 'Source Serif Pro, sans-serig,apple',fontWeight: '400' },
    { fontFamily: 'Source Serif Pro, sans-serig,apple',fontWeight: '600' },
    { fontFamily: 'Source Serif Pro, sans-serig,apple',fontWeight: '700' }],
    'body,html': {
        fontFamily: 'Source Serif Pro'
    }
})
const App = () => {
    globalStyle()
    return (
        <Layout className={theme}>
            <Header />
            <Content>
                <Flex>
                { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item,index) => (
                    <Card key={index.toString()}>
                        <CardImage src="https://via.placeholder.com/216"/>
                        <CardContent>
                            <Text variant="h4" css={{ fontWeight: '700'}}>Bem vindo</Text>
                        </CardContent>
                    </Card>
                )) }
            </Flex>
            </Content>
            <Footer>
            </Footer>
        </Layout>
    )
};
export default App;