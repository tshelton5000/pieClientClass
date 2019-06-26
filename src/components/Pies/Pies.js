import React, {useState, useEffect} from 'react';

import Pie from './Pie/Pie';
import './Pies.css';

const hardCodedPies = [
  {
    nameOfPie: 'pumpkin',
    baseOfPie: 'pumpkin puree',
    crust: 'pastry',
    timeToBake: 50,
    servings: 8,
    rating: 4.2
  }, 
  {
    nameOfPie: 'apple',
    baseOfPie: 'jam',
    crust: 'graham cracker',
    timeToBake: 30,
    servings: 6,
    rating: 4.0
  }, 
  {
    nameOfPie: 'rhoubarb',
    baseOfPie: 'jam filling',
    crust: 'pastry',
    timeToBake: 45,
    servings: 8,
    rating: 4.5
  }
]

const Pies = () => {
  const [pies, setPies] = useState([]);

  const pieRows = () => {
    return hardCodedPies.map(pieInfo => 
      {
        return <Pie pie={pieInfo} />
      }
    )
  }

  return (
    <table>
      <tbody>
        {pieRows()}
      </tbody>
    </table>
  )
}

export default Pies;