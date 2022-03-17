import React from 'react';
import Leftside from './Leftside';
import Rightside from './Rightside';
import './content.css'

const Content = () => {
    return (
        <div className='content'>
            <Leftside />
            <Rightside />
        </div>
    );
};

export default Content;