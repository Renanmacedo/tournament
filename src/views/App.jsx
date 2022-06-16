
import React from "react";
import Header from '../components/header'
import Layout from '../components/layout'
import Content from '../components/content'
import Footer from '../components/footer'
import { globalCss } from '../theme/stitches.config'
const globalStyle = globalCss({ '*': { margin: 0}})
const App = () => {
    globalStyle()
    return (
        <Layout>
            <Header>
            </Header>

            <Content>
                {/* content */}
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )
};
export default App;