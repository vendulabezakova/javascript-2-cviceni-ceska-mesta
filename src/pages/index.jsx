import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { CityList } from '../components/CityList.jsx';
import { cities } from './czech-cities.js';

document.querySelector('#root').innerHTML = render(
  <>
    {cities.map((city) => (
      <div key={city.name}>
        <CityList name={city.name} population={city.population} area={city.area} district={city.district} photo={city.photo}
      />
      </div>
    ))}
  </>
);