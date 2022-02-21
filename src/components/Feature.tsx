import React from 'react';

const Feature = (props: { icon: string ; title: string; text: string; }) => (
        <div className="feature-item">
            <img src={props.icon} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.text}</p>
          </div>
    );

export default Feature;