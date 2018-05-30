import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = props => (
    <div>
        <img style={{width: '75px'}} src={loaderSrc}  alt="Loader"/>
    </div>
);

export default Loader;