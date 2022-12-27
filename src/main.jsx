import React from 'react'
import ReactDom from 'react-dom'
import Useobject from './app'
import './main.css'


function Advanced(){

  return(
    <div className='cover-array'>
    <Useobject />
    </div>
  )
}

ReactDom.render(<Advanced/>,document.getElementById('root'))