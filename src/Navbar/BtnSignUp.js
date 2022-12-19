import React from 'react'
import { useState } from 'react'

const BtnSignUp = () => {
    const [signed, setSigned] = useState(false)
  return (
    <div>
        <button onClick={() => setSigned(!signed)} className='btn'>{signed ? "Log out" : "Sign Up / Log In"}</button>
    </div>
  )
}

export default BtnSignUp