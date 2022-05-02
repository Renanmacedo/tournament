import React from "react";
import Button from '../components/button'
import '@aquino/web-components'
const App = () => {
    return (
        <div>
            <ra-header title="Nome"></ra-header>
            <section>
                <Button color="primary" pill>Settings</Button>
                <p>Template React with Webpack + Module Federation</p>
            </section>
        </div>
    )
};
export default App;