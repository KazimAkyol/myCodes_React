import React from 'react'

const counterReducer = (state={sayac:0, yazi:""},{type,payload1}) => {


switch (type) {
  case "OKE":
    return{sayac: state.sayac+1,yazi:payload1  }
   case"REDUZIEREN":
return

case "RESETLE":
  return
  default:
    return state;
}



}

export default counterReducer