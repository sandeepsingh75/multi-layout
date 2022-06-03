import React from 'react';
import ClientList from '../../components/Helpers/ClientList';
import HomeSlider from '../../components/Helpers/HomeSlider';
import ThmbGrid from '../../components/Helpers/ThmbGrid';
import Products from '../../components/Products/Products';
import ProductsInsta from '../../components/Products/ProductInsta';
import DefaultSection from '../../components/Section/DefaultSection';
import BrandBanner from './BrandBanner';

function Home(props) {
    return (
        <React.Fragment>
            <HomeSlider />
            <ClientList />
            <ThmbGrid />
            <DefaultSection />
            <BrandBanner />
             <Products />     
             <ProductsInsta />
        </React.Fragment>
    );
}

export default Home;