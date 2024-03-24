import React from 'react';
import './about.css';
import Webdev from '../../assets/webdev.png';
import Embarcados from '../../assets/embarcados.png';
import Code from '../../assets/code.png';

const About = () => {
    return (
        <section id ='about'>
            <span className="skillTitle">O que eu faço</span>
            <span className="skillDesc">Eu sou um Engenheiro da Computação em formação (8/10) com muita vontade de aprender e aplicar ideias inovadoras no mercado de trabalho. Sou proficiente em diversas tecnologias da área, mas acredito que meu ponto mais forte é a velocidade de aprendizado.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src ={Code} alt= "Code" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Engenharia de Software</h2>
                        <p>Domínio em linguagens de programação e metodologias ágeis para entregar soluções de software robustas e inovadoras.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src ={Embarcados} alt= "Embarcados" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Eletrônica e Embarcados</h2>
                        <p>Experiente em sistemas embarcados, capacitado para criar soluções eletrônicas inovadoras e confiáveis.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src ={Webdev} alt= "Webdev" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Desenvolvimento Web</h2>
                        <p>Profissional em desenvolvimento web, capacitado para transformar conceitos em websites dinâmicos e responsivos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;