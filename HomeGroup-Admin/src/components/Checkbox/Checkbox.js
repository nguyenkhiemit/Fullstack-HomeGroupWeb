import React, {Component} from 'react';
import './Checkbox.css'

class Checkbox extends Component {

    handleChange = (event) => {
        const target = event.target;
        if(target.type === 'checkbox') {
            let value = target.checked;
            console.log(value);
            this.changeState(value);
        }
    };

    changeState = (checked) => {
        this.props.changeState(checked);
    };

    render() {
        return (
            <label className="control control--checkbox">
                <input type="checkbox" checked={this.props.state} onChange={this.handleChange}/>
                <div className="control__indicator"/>
            </label>
        );
    }
}

export default Checkbox;
