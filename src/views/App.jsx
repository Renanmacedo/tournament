import React from "react";
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'
import globalStyle from '../theme/global'
import * as themes from '../theme/'
import { getTheme } from '../utils/themeName';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";

const themeName = getTheme()
const theme = themes[themeName]


const App = () => {
    globalStyle()
    return (
        <Layout className={theme}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
            <Footer/>
        </Layout>
    )
};
export default App;