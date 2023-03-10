import React from 'react'

const Card = ({name, location, phone, rating, website}) => {
  return (
        /*
         * Render out a card class
         *
         * It should display the name, location,
         * phone number, rating and a link to the website
         *
         * Some restaurants contain an empty website.
         * Use conditional rendering to prevent displaying 
         * the website in those cases
         * */
      
        <div className="Card">
        <h1 clasName="titulo">{name}</h1>
        <p className="localizacion">{location}</p>
        <p className="telefono">{phone}</p>
        <p className="rating">{rating}</p>
        {website ? <a href={website} className="web">{website}</a> : null}
        </div>
        
  )
}

export default Card