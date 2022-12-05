
import "./FeaturedRecipe.css";

 function FeaturedRecipe(props) {
  return (
        <div className="recipe-container">
            <div className="recipe_text">
                <div className="recipe_title">
                    <h3>Featured Recipe </h3> 
                    <h4>{props.meal}</h4>
                </div>
                    <div className="recipe_des">
                        <p>{props.description}</p>
                    </div>     
                <button className='btn'>Detail</button>            
            </div>
            <div className='recipe_img'>
                <img component="img"
                    src={props.img}
                    alt={props.meal}
                />
            </div> 
        </div>
    );
}

export default FeaturedRecipe;