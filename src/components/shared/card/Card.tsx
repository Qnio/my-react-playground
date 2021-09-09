import React from 'react';
import './Card.scss';

const Card: React.FC<any> = (props) => {
    return (
        <div className='main-card'>{props.children}</div>
    )
}

export default Card;
