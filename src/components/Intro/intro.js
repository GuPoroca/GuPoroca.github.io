import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="Ola">Olá, </span>
                <span className="int">Eu sou <span className="nome">Gustavo Poroca</span> <br /> Engenheiro da Computação</span>
                <p className="desc">Sou um estudante de computação com experiência em diversas áreas e uma grande vontade de aprender e resolver problemas.</p>
                <button className="btn" onClick={()=>{
                    document.getElementById('contatos').scrollIntoView({behavior: 'smooth'});
                }}>Entre em contato</button>
            </div>
        </section>
    );
}
    
export default Intro;