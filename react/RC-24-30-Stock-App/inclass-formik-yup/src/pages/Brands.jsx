import React, { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'

const Brands = () => {

    const {getStockData} = useStockCall()

    useEffect(()=>{
        getStockData("brands")
    }
    ,[])
  return (
    <div>Brands</div>
  )
}

export default Brands