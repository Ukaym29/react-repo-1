import React from 'react'
import Logo from '../assets/react-core-concepts.png'
const reactDescriptions = ["Fundamental", "Core", "Crucial"]



//  Take note of this function, generateRandomIndex() which generates a random number from 0 to 1
function generateRandomIndex(maxLength) {
  return Math.floor(Math.random() * maxLength)
}

const description = reactDescriptions[generateRandomIndex(reactDescriptions.length)]
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      {/* {Math.floor(Math.random() *3)} */}
    </header>
  )
}

export default Header