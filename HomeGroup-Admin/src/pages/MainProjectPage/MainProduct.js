import React, {Component} from 'react';
import ListProduct from "../../components/ListProduct/ListProduct";

class MainProduct extends Component {

    render() {
        return (
            <div>
                <ListProduct category={-1}/>
            </div>
        );
    }
}

export default MainProduct;
