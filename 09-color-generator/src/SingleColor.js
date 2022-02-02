import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article 
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={()=> {
        setAlert(true);
        navigator.clipboard.writeText(hex); //copy color to clipboard

      }}
    >
      <p>{weight}%</p>
      <p>{hex}</p>
      {alert && <h3>copied to clipboard</h3>}
    </article>
  )
}
export default SingleColor
