import React, {Component} from 'react';
import './ProviderItem.css'

class ProviderItem extends Component {
    render() {
        let {imageURL, title, desc} = this.props;
        return (
            <div className="col-md-3 category-item">
                <img
                    src={imageURL}
                    className=""
                    alt={title}
                />
                <a>
                    <h3>{title}</h3>
                </a>
                <p>{desc}</p>
            </div>
        );
    }
}

export default ProviderItem;
