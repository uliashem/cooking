function RecipesComponents({label, image, ingredients, calories, cautions}) {
  return(<div className="container1 recipe">
    <div className="container">
      <h2>{label}</h2>
    </div>

    <div className="container">
      <img src={image} className="img" alt="Recipe"/>
    </div>

    <ul className="container list">
      {ingredients.map((ingredient, index) => (
        <li key={index}><img src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000" alt="icon" width="25px"/>{ingredient}</li>
      ))}
    </ul>

    <div className="container">
      <p className="bold">{calories.toFixed()} calories</p>
    </div>

    {cautions.length > 0 && (

      <div className="container">
        <p className="red bold"> Cautions: {cautions.join(', ')}</p>
      </div>

    )}

     


    
    
  </div>
  )
}

export default RecipesComponents;