import React from "react";
// import "../public/css/index.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Pagelist from "./pages/Pagelist";
import Aritcle from "./pages/Article";
import Study from "./pages/Study"
// import Home from "./pages/Page_Home";
// import Sub from "./pages/Page_Sub";

const App = () => {
    return (
        <div className="grid place-items-center">
            <Header />
            <Aritcle />
            <Pagelist />
            <Study />
            <Footer />

            
        </div> 
    );
};

export default App;