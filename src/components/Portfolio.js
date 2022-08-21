import React, { Component , Fragment } from "react";
import portfolio from "../css/portfolio.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import av_junior from "../images/av_junior.png";
import dashboard_ahome from "../images/dashboard_ahome.png";
import lavarangue from "../images/lavarangue.png";
import location_monte from "../images/location_monte.png";
import ostheopathe from "../images/ostheopathe.png";
class Portfolio extends Component {
    state = {
        realisations : [
            {nom : "Location monte" , lien : "https://location-monte.gazolinecommunication.com" , src:location_monte},
            {nom : "Cabinet Osthopathe" , lien : "#" , src:ostheopathe},
            {nom : "AV Junior" , lien : "#" , src:av_junior},  
            {nom : "La varangue" , lien : "https://hotel-restaurant-lavarangue.com" , src:lavarangue},   
            {nom : "Dashboard aHome Cloud" , lien : "#" , src:dashboard_ahome},
          ]
        }
    render () {
        const settings = {
            false: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function(currentSlide, nextSlide) {},
            afterChange: function(currentSlide) {}
          };
        return (  
            <div id="item_realisation">       
                <Slider {...settings}>   
                        {
                            this.state.realisations.map((item_realisation , key) => {
                                return (
                                    <>
                                        <div className="thumbnail">
                                            <img src={item_realisation.src}  alt={item_realisation.nom} title={item_realisation.nom} />
                                        </div>
                                        <div className="portfolio_name">
                                            <a href={item_realisation.lien} target="_blank">Voir {item_realisation.nom}</a>
                                        </div>
                                    </>
                                )
                            })
                        }
                </Slider>
            </div>
        )
    }
}

export default Portfolio;
