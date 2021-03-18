import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>Zirafnik</p>
            <a target='_blank' href='https://github.com/Zirafnik/memory-card-game'><img className='github-image' src={`/images/github.png`}/></a>
        </footer>
    )
}

export default Footer;