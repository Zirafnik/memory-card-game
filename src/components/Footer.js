import React from 'react';
import githubImg from '../images/github.png';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>Zirafnik</p>
            <a target='_blank' href='https://github.com/Zirafnik/memory-card-game'><img className='github-image' src={githubImg} /></a>
        </footer>
    )
}

export default Footer;