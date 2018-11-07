import React, {Component} from 'react';
import './Design.css'
import ListProduct from "../../components/ListProduct/ListProduct";

class Design extends Component {
    render() {
        return (
            <div className="table-responsive">
                <ListProduct category={0}/>
            </div>
        );
    }
}

export default Design;
