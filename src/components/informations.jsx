import React, { useState } from 'react'
import "./informations.css"

function Informations({ item, handleDelete }) {
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    setShow(!show)
  }

  return (
    <div key={item.id} className="item">
      <div className="item-container">
        <img className="image" src={item.image} alt={item.name} />
        <div className="image-overlay">
          <div className="price">{item.price}$</div>
        </div>
      </div>
      <div className="text" key={item.id}>{item.name}</div>
      <div>
        <button className="button" onClick={() => handleDelete(item.id)}>Not Interested</button>
        {show ? (
          <div>
            {item.info}
            <button className='moreLess' onClick={handleToggle}>Read Less</button>
          </div>
        ) : (
          <div>
            {item.info.slice(0, 50)}
            <button className='moreLess' onClick={handleToggle}>Read More</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Informations
