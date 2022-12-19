import "./FeaturedRecipe.css";
import {Link} from 'react-router-dom';


export default function FeaturedRecipe(props) {
    return (
        <div className="recipe_container">
            <div>
                <img component="img" className='recipe_img'
                    src={props.img}
                    alt={props.meal}
                />
            </div>
            <div className="recipe_text">
                <div className="recipe_title">
                    <h2 className="recipe_section">Featured Recipe </h2>
                    <h3>{props.meal}</h3>
                </div>
                <div className="recipe_p">
                    <p>{props.description}</p>
                </div>
                <Link to="/CompleteRecipe" state={{id: `${props.id}`}}>
                    <button className='btn'>Details</button>
                </Link>
            </div>
        </div>
    );
}