import React, {Component} from 'react';
import './Loading.css'

class Loading extends Component {
    render() {
        let {isLoading} = this.props;
        return (
            <div className={isLoading ? 'bg-loading show' : 'hidden'}>
                <div className="loading"/>
            </div>
        );
    }
}

export default Loading;
