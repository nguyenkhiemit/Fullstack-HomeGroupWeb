import React, {Component} from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Provider from "../../components/Provider/Provider";
import ListProduct from "../../components/ListProduct/ListProduct";
import Vision from "../../components/Vision/Vision";
import Quote from "../../components/Quote/Quote";
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import Footer from "../../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Provider/>
                <ListProduct category={-1} />
                <Vision/>
                <Quote/>
                <ContactFooter/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
