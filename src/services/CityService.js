import axios from 'axios';
const GET_CITIES_URL='http://localhost:8080/get-all-cities'


export const getCities = async () =>{
try {
    const {data : {data}} = await axios.get(GET_CITIES_URL);
    return data ;
} catch (error) {
    console.log(error)
}
}