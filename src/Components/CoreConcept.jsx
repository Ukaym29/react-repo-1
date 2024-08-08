import React from 'react'

const CoreConcept = ({ image, title, description }) => {
  return (
    //  Now we hav created a component returning a list of image title and description
    <li>
      <img src={image} alt={title} />
      <h3>
        {title}
        <p>
          {description}
        </p>
      </h3>
    </li>
  )
}

export default CoreConcept