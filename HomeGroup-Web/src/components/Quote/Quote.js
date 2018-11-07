import React, {Component} from 'react';
import './Quote.css'

class Quote extends Component {
    render() {
        return (
            <div id="quote">
                <div className="background">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <i className="fa fa-quote-left quocte-icon"/>
                                <p className="verse">"If you want to succeed you should strike out on new paths,
                                    rather than travel the
                                    worn paths of accepted success."</p>
                                <p className="line"><span className="divider"/></p>
                                <p className="grand">John D. Rockefeller</p>
                            </div>
                            <div className="carousel-item">
                                <i className="fa fa-quote-left quocte-icon"/>
                                <p className="verse">"Technology is nothing. What's important is that you have a
                                    faith in people, that they're basically good and smart, and if you give them
                                    tools, they'll do wonderful things with them."</p>
                                <p className="line"><span className="divider"/></p>
                                <p className="grand">Steve Jobs</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;
