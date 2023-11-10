import React, {useEffect} from "react";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {check} from "../../http/userAPI";

const App = () => {

    useEffect(() => {
        check()
    }, [])

    return (
        <div className="app">
            <Header />
            <AppRoutes />
            <Footer />
        </div>
    );
};

export default App;