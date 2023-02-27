import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [place, setPlaces] = useState(0);

  const {id, city, image, description} = data[place];

  const [showMore, setShowMore] = useState(false)

  const nextCity = () => {
    setPlaces ( (place) => {
      place++;
      if (place > data.length-1) {
        place=0;
      }
      return place;
    })
  }

  const prevCity = () => {
    setPlaces ( (place) => {
      place--;
      if (place < 0) {
        return data.length-1;
      }
      return place;
    })
  }

  return (
    <div>
      <div className='container'>
        <h1>{data.length} best places to live in the world</h1>
      </div>
      <div className='container'>
        <h3>{id}. {city}</h3>
      </div>
      <div className='container'>
        <button className='btn' onClick={prevCity}>Previous</button>
        <img src={image} alt='city' width='500px'/>
        <button className='btn' onClick={nextCity}>Next</button>
      </div>
      <div className='container'>
        <h4>{showMore ? description:description.substring(0,130)+'...'} <button className='btnMore' onClick={() => setShowMore(!showMore)}>
          {showMore ? 'show less' : 'show more'}</button></h4>
      </div>
    </div>
  )
}

export default App;
