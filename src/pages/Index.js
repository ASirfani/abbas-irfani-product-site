
import React from "react";
import TopMenu from "./TopMenu";
import SearchMenu from "../container/SearchMenuContainer"
import Menu from "./Menu";
import Footer from "./Footer";


const Home = () => {

    return (
        <>
            <TopMenu />
            <SearchMenu />
            <Menu />
            <Footer />
        </>
    )

}

export default Home;