import React from 'react';
import githubPic from '../images/github.png';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>Zirafnik</p>
            <a target='_blank' href='https://github.com/Zirafnik'><img className='github-image' src={githubPic}/></a>
        </footer>
    )
}

export default Footer;