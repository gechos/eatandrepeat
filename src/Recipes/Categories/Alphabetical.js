import image from './letters.png'
import './Category.css'

const Alphabetical = () => {
    return (

        <button className='btn-category clickable2'>
            <div className='category'>
                <img width='35px' src={image} alt="picture-category" />
                <h6>Alphabetical</h6>
            </div>
        </button>
    )
}

export default Alphabetical