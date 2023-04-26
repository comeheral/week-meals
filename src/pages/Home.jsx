import { useState, useEffect } from 'react'
import { mealsData } from '../mealsData'
import '../scss/pages/Home.scss';

import MealItem from '../components/MealItem';

function Home(){
  const [weekMeals, setWeekMeals] = useState([]);
  const [mealsNumber, setMealsNumber] = useState(7);

  function generateMeals(){
    let meals = [...mealsData];
    let newMeals = meals.sort(() => Math.random() - 0.5).slice(0, mealsNumber);

    // Re-generate if the list didn't change
    if(JSON.stringify(newMeals) == JSON.stringify(weekMeals)){
      generateMeals();
    }else{
      setWeekMeals(newMeals);
    }
  }

  function range(start, end){
    let output = [];
    for(let i = start; i <= end; i++){
      output.push(i);
    }
    return output;
  }

  return (
    <>
      <h1 className="title">Plats de la semaine</h1>
      <div className="actions">
        <select className="actions__select" value={mealsNumber} onChange={(e) => setMealsNumber(e.target.value)}>
          {range(1,10).map((i) => <option key={`option-${i}`}>{i}</option>)}
        </select>
        <button className="button actions__button" onClick={generateMeals}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 16.7V19C3 19.2652 2.89464 19.5196 2.70711 19.7071C2.51957 19.8946 2.26522 20 2 20C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V14C1 13.7348 1.10536 13.4804 1.29289 13.2929C1.48043 13.1054 1.73478 13 2 13H7C7.26522 13 7.51957 13.1054 7.70711 13.2929C7.89464 13.4804 8 13.7348 8 14C8 14.2652 7.89464 14.5196 7.70711 14.7071C7.51957 14.8946 7.26522 15 7 15H4.1C5.08451 15.965 6.33205 16.6178 7.68615 16.8766C9.04024 17.1353 10.4406 16.9885 11.7115 16.4545C12.9825 15.9205 14.0675 15.0231 14.8304 13.8748C15.5933 12.7266 16.0002 11.3786 16 10C16 9.73478 16.1054 9.48043 16.2929 9.29289C16.4804 9.10536 16.7348 9 17 9C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10C17.9984 11.7367 17.4944 13.4358 16.5487 14.8925C15.6031 16.3491 14.2562 17.501 12.6705 18.2093C11.0848 18.9176 9.32805 19.152 7.61214 18.8841C5.89623 18.6163 4.29445 17.8578 3 16.7ZM15 3.3V1C15 0.734784 15.1054 0.48043 15.2929 0.292893C15.4804 0.105357 15.7348 0 16 0C16.2652 0 16.5196 0.105357 16.7071 0.292893C16.8946 0.48043 17 0.734784 17 1V6C17 6.26522 16.8946 6.51957 16.7071 6.70711C16.5196 6.89464 16.2652 7 16 7H11C10.7348 7 10.4804 6.89464 10.2929 6.70711C10.1054 6.51957 10 6.26522 10 6C10 5.73478 10.1054 5.48043 10.2929 5.29289C10.4804 5.10536 10.7348 5 11 5H13.9C12.9155 4.03499 11.6679 3.38216 10.3139 3.12341C8.95976 2.86465 7.55941 3.01149 6.28845 3.54551C5.01749 4.07953 3.93251 4.97695 3.16959 6.1252C2.40668 7.27345 1.9998 8.62141 2 10C2 10.2652 1.89464 10.5196 1.70711 10.7071C1.51957 10.8946 1.26522 11 1 11C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0.00158243 8.26332 0.505598 6.56418 1.45125 5.10754C2.39691 3.65089 3.74382 2.49896 5.32951 1.79069C6.9152 1.08241 8.67195 0.848044 10.3879 1.11585C12.1038 1.38366 13.7056 2.14221 15 3.3Z" fill="black"/>
          </svg>
          <span>Générer les plats</span>
        </button>
      </div>

      {weekMeals.map((meal, index) => (
        <MealItem key={`meal-${index}`} name={meal.name} index={index}/>
      ))}
    </>
  )
}

export default Home;