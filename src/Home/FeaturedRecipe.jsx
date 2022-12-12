
import "./FeaturedRecipe.css";

export default function FeaturedRecipe(props) {
    return (
        <div className="recipe_container">

            <div className="recipe_text">
                <div className="recipe_title">
                    <h2 className="recipe_section">Featured Recipe </h2>
                    <h3>{props.meal}</h3>
                </div>
                <div className="recipe_p">
                    <p>{props.description}</p>
                </div>
                <button className='btn'>Detail</button>
            </div>  
            <div>
                <img component="img" className='recipe_img'
                    src={props.img}
                    alt={props.meal}
                />
            </div>
        </div>
    );
}