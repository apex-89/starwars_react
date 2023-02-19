import React, { useState, useEffect } from 'react'
import GetAllStarships from '../../services/sw-api'


const StarShipCard = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    const makeRequest = async () => {
      let response = await GetAllStarships()
      let result = response.results
      
      let ships = result.map((starship, index) => {
        return (
          <div className='ship-card' key={index}>
            <h5>{starship.name}</h5>
          </div>
        )
      })
      setStarships(ships)
    }
    makeRequest()
  }, [])



  return (
    <div className='ship-container'>
      {starships}
    </div>
  )
}

export default StarShipCard