import React, { Component } from "react";
import myimage from "../images/tsinjo.png";
class Sidebar extends Component {
    render () {
        return (
            <div className="profil_images">
                <img src={myimage} alt="Image" title="Tsinjo Elie"/>
            </div>
        )
    }
}

export default Sidebar;
