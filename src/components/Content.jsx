import React from 'react';
import Leftside from './Leftside';
import Rightside from './Rightside';

const Content = () => {
    return (
        <div className="d-flex">
            <Leftside />
            <Rightside />
        </div>
    );
};

export default Content;