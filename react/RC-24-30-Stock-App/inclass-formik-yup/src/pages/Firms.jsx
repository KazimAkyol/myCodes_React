import React, { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { useSelector } from 'react-redux'

const Firms = () => {

    const {getFirm}=useStockCall()
    const {firms} = useSelector((state)=>state.stock)
    console.log(firms)

    useEffect(()=>{
        getFirm()
    },[])

  return (
    <div>Firms</div>
  )
}

export default Firms