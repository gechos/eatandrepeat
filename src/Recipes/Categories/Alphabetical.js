import image from './letters.png'
import './Category.css'

const Alphabetical = () => {
    return (
        <div className='category'>
            <button className='category clickable2'>
            <img width='35px' src={image} alt="picture-category" />
            <h6>Alphabetical</h6>
            </button>
        </div>
    )
}

export default Alphabetical