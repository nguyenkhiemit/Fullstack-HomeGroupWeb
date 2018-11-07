import React, {Component} from 'react';
import './Construction.css'
import ListProduct from "../../components/ListProduct/ListProduct";

class Construction extends Component {
    render() {
        return (
            <div className="table-responsive">
                <ListProduct category={1}/>
            </div>
        );
    }
}

export default Construction;
