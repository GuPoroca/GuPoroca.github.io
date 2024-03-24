import React from 'react';
import './contact.css';
import Linkedin from '../../assets/linkedin.png';
import Gmail from '../../assets/gmail.png';
import Github from '../../assets/github.png';

const Contact = () => {
    return(
        <section id ='contatos'>
            <span className="contatosTitle">Contatos</span>
            <span className="contatosDesc">Aqui estão algumas maneiras de entrar em contato comigo</span>
            <div className="contatosTabs">

                <div className="contatoUnic">
                    <a href="https://www.linkedin.com/in/gustavo-poroca/" target="_blank">
                    <img src ={Linkedin} alt= "Linkedin" className="contatoImg"></img>
                    </a>
                </div>
                <div className="contatoUnic">
                    <a href="mailto:gustavoporoca@gmail.com" target="_blank">
                    <img src ={Gmail} alt= "Gmail" className="contatoImg"></img>
                    </a>
                </div>
                <div className="contatoUnic">
                    <a href="https://github.com/GuPoroca" target="_blank">
                    <img src ={Github} alt= "Github" className="contatoImg"></img>
                    </a>
                </div>
            </div>
            <span className="contatosDesc">+55 (81) 99304-7544 | gustavoporoca@gmail.com</span>
        </section>
    );
}

export default Contact