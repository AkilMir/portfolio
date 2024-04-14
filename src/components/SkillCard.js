import React from 'react';

const SkillCard = (props) => {
    return (
        <div className = "skill">
            <img className = "skill-image" src = {props.src} alt = {props.alt}></img>
            <p className = "skill-text">{props.text}</p>
        </div>
    );
}

export default SkillCard;