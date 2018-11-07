import React, {Component} from 'react';
import icon from '../../icon.png'
import './Top.css'

class Top extends Component {
    render() {
        return (
            <div>
                <div id="top">
                    <div className="container">
                        <div className="address">
                            <h3>Công ty CP XD & Nội thất HOMEGROUP</h3>
                            <a>P.12A03 Toà A1 EcoLife - 58 Tỗ Hữu - Hà Nội</a>
                        </div>
                        <div className="search">
                            <form>
                                <input type="text" placeholder="search..." name="search"/>
                                <button type="submit"><i className="fa fa-search"/></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="contact">
                    <div className="container">
                        <img src={icon} alt="logo" className="logo"/>
                        <div className="right-contact">
                            <div className="phone">
                                <button className="btn btn-danger">
                                    <i className="fa fa-phone"/>
                                </button>
                                <div className="number">
                                    <h3 className="hotline-title">Hotline</h3>
                                    <p>01642 884 885</p>
                                </div>
                            </div>

                            <div className="divider"/>

                            <div className="email">
                                <button className="btn btn-danger">
                                    <i className="fa fa-envelope"/>
                                </button>
                                <div className="number">
                                    <h3 className="hotline-title">Email</h3>
                                    <p>nguyenkhiem7789@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;