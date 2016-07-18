import React from 'react';

import headStyle from '../../scss/header.scss';
import publicStyle from '../../scss/utils.scss';


const Header = () => (
    <header className={`${headStyle.header} ${publicStyle.clear}`}>
        <img src="./assets/snipper.png"/>
        <h3>Big data based talents hunting</h3>
    </header>
);

export default Header;
