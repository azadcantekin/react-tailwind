import axios from 'axios'


  export  const  getCities = async ()=> {
         try {
             const {data: {data} } = await axios.get("http://localhost:8080/city/get-all-cities")
             return data ;
         } catch (error) {
             console.log(error);
         }
    }

