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
            {nom : "AV Junior" , lien : "#" , src:av_junior},  
            {nom : "La varangue" , lien : "#" , src:lavarangue},
            {nom : "Location monte" , lien : "#" , src:location_monte},
            {nom : "Osthopathe" , lien : "#" , src:ostheopathe},
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
            beforeChange: function(currentSlide, nextSlide) {
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
            }
          };
        return (  
            <div id="portfolio_realisations">       
                <Slider {...settings}>
                    
                        {
                            this.state.realisations.map((item_realisation , key) => {
                                return (
                                    <>
                                        <div className="thumbnail">
                                            <img src={item_realisation.src}  alt={item_realisation.nom} title={item_realisation.nom} />
                                        </div>
                                        <div className="portfolio_name">
                                            {item_realisation.nom}
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
