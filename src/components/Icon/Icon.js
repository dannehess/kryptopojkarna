import React from 'react';
import './Icon.scss';

const Icon = props => {
  return(
    <>
    <a href={props.url} target="_blank" className="navlink" rel="noopener noreferrer"><i className={props.icon} alt={props.name}></i></a>
    </>
  )
}

export default Icon;