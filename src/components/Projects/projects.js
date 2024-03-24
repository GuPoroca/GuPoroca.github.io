import React from 'react';
import './projects.css';
import ESP from '../../assets/arduino.png';
import Nobel from '../../assets/NBl.jpg';
import Fourier from '../../assets/Frequencia.png';
import Port from '../../assets/Portifolio.png';


const Projects = () => {
    return(
        <section id ='projetos'>
            <span className="projetosTitle">Meus Projetos</span>
            <span className="projetosDesc">Aqui estão alguns dos meus projetos que desenvolvi ao longo do meu curso e do meu aprendizado como desenvolvedor e engenheiro</span>
            <div className="projetosTabs">

                
                <div className="projetosTab1">
                <a href="https://github.com/GuPoroca/Esp32-MPU6050" target="_blank">
                    <img src ={ESP} alt= "ESP" className="projetoImg"></img>
                </a>
                        <div className="projetoText">
                            <h2>Sensor Acelerômetro Giroscópio</h2>
                            <p>Criei um sensor de Acelerômetro e Giroscópio com ESP32 e MPU6050, oferecendo armazenamento de dados, simulação de movimento via servidor web e interface de preferências do usuário.</p>
                        </div>
                </div>
                

                
                <div className="projetosTab1">
                <a href="https://github.com/alanavasconcelos/Engenharia-de-Software" target="_blank">
                    <img src ={Nobel} alt= "Nobel" className="projetoImg"></img>
                </a>
                        <div className="projetoText">
                            <h2>Aplicativo Nobel Prize Winners</h2>
                            <p>Aplicativo para categorizar e acessar dados e curiosidades sobre o Prêmio Nobel, feito em React Native com um grupo de amigos.</p>
                        </div>
                </div>
                

                
                <div className="projetosTab2">
                <a href="https://github.com/GuPoroca/ProjetoFourier" target="_blank">
                    <img src ={Fourier} alt= "Fourier" className="projetoImg"></img>
                </a>
                        <div className="projetoText">
                            <h2>Transformada de Fourier</h2>
                            <p>Projeto para visualizar as frequências de uma imagem e editá-las através de transformadas de fourier.</p>
                        </div>
                </div>

                
                <div className="projetosTab2">
                <a href="https://github.com/GuPoroca/Portifolio2.0" target="_blank">
                    <img src ={Port} alt= "Port" className="projetoImg"></img>
                </a>
                        <div className="projetoText">
                            <h2>WebPortifolio em React</h2>
                            <p>Apresentando meu trabalho de forma dinâmica e interativa, destacando minha experiência e habilidades em desenvolvimento web.</p>
                        </div>
                </div>
                

            </div>
        </section>
        
        );
    }
        
    export default Projects;