import React, { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { useSelector } from 'react-redux'

const Firms = () => {

    const {getFirm}=useStockCall()
    const {firms} = useSelector()

    useEffect(()=>{
        getFirm()
    },[])

  return (
    <div>Firms</div>
  )
}

export default Firms