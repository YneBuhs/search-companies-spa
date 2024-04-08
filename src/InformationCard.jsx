import React from 'react';
import Address from "./Address"
import classNames from "classnames"
import './InformationCard.css'

const InformationCard = ({ id, name, starred, description, address, image, updateStarred }) => {
  const cardClasses = classNames('information-card', { 'starred': starred });
  const buttonClasses = starred ? 'btn__starred' : 'btn__primary'
  
  return (
    <article className={cardClasses}>
      <figure className="card-image">
        {image ? 
          <img src={image} alt={name} /> :
          <section className="img__placeholder" data-testid="img-placeholder"></section>
        }
      </figure>
      <section className="card-details">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <Address {...address} />
        <button className={buttonClasses} role="star-button" onClick={() => updateStarred(id, !starred)}>{starred ? 'Starred' : 'Not Starred'}</button>
      </section>
    </article>
  );
};

export default InformationCard;