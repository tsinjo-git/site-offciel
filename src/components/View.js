import React, { Component, Fragment } from "react";
import Information from "./Information";
import Content from "./Content";
import Sidebar from "./Sidebar";
import view from "../css/view.css";
class View extends Component {
    render () {
        return (
            <>
                <Information />
                <section>
                    <div className="inner_root">
                        <div className="container">
                            <div className="grid-template">
                                <div className="content_scroll_root">
                                    <Content />
                                </div>
                                <div className="content_fixed_root">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default View;
