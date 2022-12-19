import { useRef } from "react";
import {useReactToPrint} from 'react-to-print';
import {Link} from 'react-router-dom';
//import CompleteRecipe from "../Recipes/CompleteRecipe";



const MenuPrint = ({select}) => { 
  console.log('print',{select});
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrinter: () => alert ('Print Menu')
  })

  return (
    <>
      <div className='meals'>
        <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
          {select.map((key) => key[0]
              /*<Link to="/CompleteRecipe" key={key[0]} state={id: {key[0]}}/>*/
              )}
        </div>
      </div>
      <div>
        <button className='btn' onClick={handlePrint}>Printer select</button>
      </div>
      </>
  )
}

export default MenuPrint