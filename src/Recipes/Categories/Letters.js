import './Letters.css'


const array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const Letters = ({onClickLetter}) => {
      

  return (

      <div className='letters'>
        {array.map((item) => 
              <button onClick={() => onClickLetter(item)}  className='clickable' >
                    {item}
              </button>
            )}    
      </div>

  )
}
export default Letters