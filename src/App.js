import './App.css';
import { useEffect, useState } from 'react';
import video from './cooking.mp4';
import RecipesComponents from './RecipesComponents';

function App() {

  const MY_ID = "b28dd9c2";
  const MY_KEY = "d1b9837dae36e90730a85e287b9713ea";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, SetWordSubmitted] = useState("cucumber");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits)
    }

    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    SetWordSubmitted(mySearch);
  }

  return (
    <div>
      <div className='container container1'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>      
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <form onSubmit={finalSearch}>
        <div className='container container1'>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </div>

        <div className='container container1'>
          <button>
            <img src="https://img.icons8.com/?size=100&id=14079&format=png&color=000000" alt='Icon' width="30px"/>  
        </button>
      </div>

      </form>
      

      
      {myRecipes.map((element, index) => (
        <RecipesComponents key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        ingredients={element.recipe.ingredientLines}
        calories={element.recipe.calories}
        cautions={element.recipe.cautions}/>
      ))}
      
    </div>
  );
}

export default App;
