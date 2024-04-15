import React from 'react'
import { useContext,useState, useEffect } from 'react'
import { dashboardContext, profileContext } from '../context/context'

const Goal_Card = (props) => {
  const balance=useContext(profileContext)
  const lists=useContext(dashboardContext)
  const [collected, setcollected] = useState(props.collected)
  // const value = useContext(dashboardContext)
  // console.log(Math.floor(props.percentage).toString(),props.percentage-Math.floor(props.percentage),((props.percentage-Math.floor(props.percentage)).toString()).toString().slice(1,4))


  



  return (
    <>
    {collected>props.limit
    ?
    <div className='px-6 flex items-center justify-between card bg-green-300 w-[40vw] h-[8vh] mb-3'>
      <div>{props.goal}</div>
      <div>{(props.percentage-Math.floor(props.percentage)).toString().length>3?(Math.floor(props.percentage).toString()+((props.percentage-Math.floor(props.percentage)).toString()).toString().slice(1,4)):(props.percentage).toString()}</div>
      <div>{(collected-Math.floor(collected)).toString().length>3?(Math.floor(collected).toString()+((collected-Math.floor(collected)).toString()).toString().slice(1,4)):(collected).toString()}</div>
      <div>{props.limit}</div>
    </div>
    :
    <div className='px-6  hover:bg-gray-100 flex items-center justify-between card bg-white w-[40vw] h-[8vh] mb-3'>
      <div>{props.goal}</div>
      <div>{(props.percentage-Math.floor(props.percentage)).toString().length>3?(Math.floor(props.percentage).toString()+((props.percentage-Math.floor(props.percentage)).toString()).toString().slice(1,4)):(props.percentage).toString()}</div>
      <div>{(collected-Math.floor(collected)).toString().length>3?(Math.floor(collected).toString()+((collected-Math.floor(collected)).toString()).toString().slice(1,4)):(collected).toString()}</div>
      <div>{props.limit}</div>
    </div>
    }
    </>
  )
}

export default Goal_Card
