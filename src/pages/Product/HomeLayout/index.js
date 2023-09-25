import React from 'react'
import HomeSection from '../../../component/HomeSection'

const HomeLayout = () => {
    return (
        <>
        
            <HomeSection title={"New Arrivals"}   speed={3000} autoplaySpeed={2000} link={"/new-arrivals"}/>
            <HomeSection title={"Top selling"} speed={1000} autoplaySpeed={3000} link={"/top-selling"}/>
            <HomeSection title={"Offers"} speed={2000} autoplaySpeed={2000} link={"/offers"}/>
            <HomeSection title={"All Products"} speed={2500} link={"/products"}/>
        </>
    )
}

export default HomeLayout