import React, { Component , Fragment } from "react";
import content from "../css/content.css";
import Portfolio from "./Portfolio";
import Services from "./Services";
class Content extends Component {
    state = {
        task : "Tâche a faire"
    }
    render () {
        return (
            <>
                <div className="title_intro">
                    introduction
                </div>
                <div className="title_subject">
                    Développeur front-end
                </div>
                <div className="ct_b">
                    <div className="text_hero">
                        <p>
                        Créateur d'un site internet , passionné par les nouvelles technologie et les tendances d'un site.
                         Je suis à la disposition pour une mission de développement interface (Front) de votre site web.
                        </p>
                    </div>
                    <div className="signature">Tsinjo Elie RAJOTIANA</div>
                </div>
                    <div className="title_intro">
                        A propos
                    </div>
                    <div className="title_subject">
                        Biographie
                    </div>
                    <div className="about_me ct_b">
                    <div className="text_hero">
                        <p>
                        Avec quelques sites réalisés et des expériences sur le développement d'interface d'un site web , 
                        je suis à votre disposition pour construire votre site.
                        </p>
                    </div>
                    <table>
                        <tbody>
                            <tr><th>Nom</th><th>RAJOTIANA Tsinjo Elie</th></tr>
                            <tr><th>Rôle</th><th>Developpeur Front end</th></tr>
                            <tr><th>Localisation</th><th><a href="https://www.google.com/maps/place/Talatamaty/@-18.8392498,47.4626233,193m/data=!3m1!1e3!4m5!3m4!1s0x21f081da746f8f1d:0xafe7d2a007a3066e!8m2!3d-18.8402631!4d47.4539427" target="_blank">Madagascar</a></th></tr>
                            <tr><th>Téléphone</th><th><a href="tel:++261346999410">(+261) 34 69 994 10</a></th></tr>
                            <tr><th>Facebook</th><th><a href="https://www.facebook.com/tsinjoelie/" target="_blank">Tsinjo Elie</a></th></tr>
                            <tr><th>Email</th><th><a href="mailto:elie.tsinjo@gmail.com">elie.tsinjo@gmail.com</a></th></tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="title_intro">
                        Expériences
                    </div>
                    <div className="title_subject">
                        Mes expériences
                    </div>
                    <div className="section_experience ct_b">
                    <div class="single_experience_">
                        <span className="date_experience">Actuellement</span>
                        <span className="societe_experience">Integrateur Web chez Neoticon</span>
                        <div class="task_list">
                            <div>{this.state.task} : </div>
                            <ul>
                                <li>Création site web a partir de HTML CSS BOOTSTRAP JAVASCRIPT JQUERY</li>
                                <li>Création site web sur wordpress et thème premium [Divi , Elementor]</li>
                                <li>Création design d'une application web</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div className="section_experience ct_b">
                    <div class="single_experience_">
                        <span className="date_experience">2020 - 2022</span>
                        <span className="societe_experience">Integrateur web chez Creativedev Madagascar</span>
                        <div class="task_list">
                            <div>{this.state.task} : </div>
                            <ul>
                                <li>Création site web a partir de HTML CSS BOOTSTRAP JAVASCRIPT JQUERY</li>
                                <li>Dynamisation des contenus dans le Back-office client et moteur de template Smarty</li>
                                <li>Travail en collaboration avec un developpeur</li>
                                <li>Correction bug d'un site web existant</li>
                                <li>Refonte site web</li>
                                <li>Découpage maquette PSD en squelette HTML CSS et JAVASCRIPT</li>
                                <li>Transformation du site WORDPRESS en HTML et CSS</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div className="section_experience ct_b">
                    <div class="single_experience_">
                        <span className="date_experience">2019 - 2020</span>
                        <span className="societe_experience">Integrateur Web chez Iloo Tech Madagascar</span>
                        <div class="task_list">
                            <div>{this.state.task} : </div>
                            <ul>
                                <li>Travail en collaboration avec des chefs de projets</li>
                                <li>Integration contenus web sous Wordpress et thème premium [Divi , Elementor , Bakery]</li>
                                <li>Découpage maquette PSD et XD sur Wordpress</li>
                                <li>Création site e-commerce</li>
                                <li>Création site vitrine</li>
                                <li>Création site sur mesure</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div className="title_intro">
                        Portfolio
                    </div>
                    <div className="title_subject">
                        Mes dernières réalisations
                    </div>
                    <div className="text_hero">
                        <p>
                        Toutes mes dernières réalisations, n'hésitez pas à voir le site et me contactez si vous êtes intéressé.
                        </p>
                    </div>
                    <div className="ct_b">
                        <Portfolio />
                    </div>
                    <div className="title_intro">
                        services
                    </div>
                    <div className="title_subject">
                        Mes services
                    </div>
                    <div className="text_hero">
                        <p>
                        En tant que développeur front end , Je m'occupe la partie interface d'un site web.</p>
                        <p> Voici mes outils de developpement : </p>
                        
                    </div>
                    <div>
                        <Services />
                    </div>
            </>
        )
    }
}

export default Content;
