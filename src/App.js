import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCatsFetch } from './catState';

import './App.css';

function App() {
  const cats =useSelector(state=>state.cats.cats)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])
  console.log(cats);
  return (
    <div className="App">
      <h1>Cats Species Gallary</h1>
      <p>lots of cats for you to select from</p>
      <hr/>
      <div className='Gallery'>
        {
          cats.map((cat)=>(
            <div key={cat?.id} className='row'>
              <div className='column column-left'><img alt={cat?.name} src={`https://cdn2.thecatapi.com/images/${cat?.reference_image_id}.jpg`} width='200' height='200'/>
              </div>
              <div className='column column-right'>
                <h2>{cat?.name}</h2>
                <h5>{cat?.temperament}</h5>
                <p>{cat?.description}</p>
              </div>
              </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
