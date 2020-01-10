import React from 'react';
import './index.css';
import img from '../../../images/bry-art.png';

const Home = () => {
    return (
        <section className="presentation">
            <div className="cover">
                <img src={img} alt="Presentation" />
            </div>
            <div className="introduction">
                <div className="intro-text">
                    <h1>Feel The Beauty</h1>
                    <p>You can book appoitment now</p>
                </div>
                <div className="btn">
                    <button className="btn-select">Join Now</button>
                </div>
            </div>
        </section>
    );
}

export default Home;