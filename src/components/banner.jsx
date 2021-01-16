import React, { PureComponent } from "react";
import './banner.css'


export default class Banner extends PureComponent {
    render() {
        return (
            <div className="component-banner ">
                <div className="container-fluid imgBg">
                    <div className="row">
                        <div className="col-xs-6 col-md-6">
                            <img
                                loading="eager" src="https://giantbomb1.cbsistatic.com/uploads/scale_small/0/1992/2222705-2222317_stonecoldsteveaustin.png"
                                alt="Stone Cold" className="primary-img" />
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <h1 className="tit"> Steve Austin</h1>
                            <h3 className="sub"> WWE Superstar</h3>
                            <span className="w-col">
                                "Stone Cold" Steve Austin is a retired American professional wrestler who appears in WWE and WCW
                                games.He was inducted in the WWE Hall of Fame in 2009.
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}