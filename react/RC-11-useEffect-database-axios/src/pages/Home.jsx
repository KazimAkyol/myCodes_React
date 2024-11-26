import React, { useEffect, useState } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET (READ)

const getBilgiler = async () => {
   const res = await axios.get(url);

   console.log(res.data);

   setTutorials(res.data);
}

useEffect(()=> {
    getBilgiler();
}, [])



 

  //! POST (create database e veri gönderme)



 

  //! DELETE (database den silme)





  return <>

 <BilgiList tutorials={tutorials}  />


  </>;
};

export default Home;
