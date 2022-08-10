import React, { Component , Fragment } from "react";
import html from "../images/services/html.png";
import css from "../images/services/css.png";
import bootstrap from "../images/services/bootstrap.png";
import materialize from "../images/services/materialize.png";
import js from "../images/services/js.png";
import jquery from "../images/services/jquery.png";
import react from "../images/services/react.png";
import node from "../images/services/node.png";
import express from "../images/services/express.png";
import ejs from "../images/services/ejs.png";
import git from "../images/services/git.png";
import mysql from "../images/services/mysql.png";
import wordpress from "../images/services/wordpress.png";
import services from '../css/services.css';
class Services extends Component {
    state = {
        servcesList : [
            {services_name : "html" , title: "html" , imagesource:html},
            {services_name : "css" , title: "css" , imagesource:css},
            {services_name : "bootstrap" , title: "bootstrap" , imagesource:bootstrap},
            {services_name : "javascript" , title: "javascript" , imagesource:js},
            {services_name : "jquery" , title: "jquery" , imagesource:jquery},
            {services_name : "react" , title: "react" , imagesource:react},
            {services_name : "git" , title: "git" , imagesource:git},
            {services_name : "mysql" , title: "mysql" , imagesource:mysql},
            {services_name : "wordpress" , title: "wordpress" , imagesource:wordpress},
        ]
    }
    render () {
        return (
            <div className="box">
                {
                    this.state.servcesList.map((item_service , key) => {
                        return (
                            <>
                                <div className="box_item_services_list">
                                    <div className="item_service_image">
                                        <img src={item_service.imagesource}  alt={item_service.services_name} title={item_service.title} />
                                    </div>
                                    <div className="item_service_nom">
                                        <span>{item_service.services_name}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default Services;