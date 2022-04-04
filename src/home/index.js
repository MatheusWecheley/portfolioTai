import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import woman from '../imgs/teste.png'
import tainara from '../imgs/tai.jpg'
import './style.css'
import { GrInstagram, GrFacebookOption} from 'react-icons/gr'
import {MdOutlineEmail} from 'react-icons/md'

const Home = () => {
    let navigate = useNavigate()


    
    return (
        <div className="container">
            <div className="portfolio">
                <div className='woman'>
                    <img className='woman1' src={woman}></img>
                </div>
                <div className='description'>
                    <div className='socialmedias'>
                        <ul>
                            <li><GrInstagram /><a href='https://www.instagram.com/taibeatriz_/'>  Instagram</a></li>
                            <li><GrFacebookOption/><a href='https://www.facebook.com/tainara.stevens'> Facebook </a></li>
                            <li><MdOutlineEmail/><a href='mailto:taibeatriz@gmail.com'>Email</a></li>
                        </ul>
                        <hr></hr>
                    </div>
                    <img className='imgTai' width="300" height='300' src={tainara} ></img>
                    <h1>Tainara Beatriz</h1>
                    <h3>Estética e Cosméticos! </h3>
                    <p>Olá, eu sou a Tainara Beatriz Stevens, tenho 20 anos, sou residente de Toledo, Paraná. Atualmente estou cursando estética e cosmético na UNIPAR - Toledo.</p>
                    <div className='buttons'>
                    <nav>
                        <ul>
                            <li><button onClick={ () =>{
                                navigate('/projects');
                            }}>Projetos</button></li>
                            <li><button onClick={ () =>{
                                navigate('/about');
                            }}>Sobre mim</button></li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
