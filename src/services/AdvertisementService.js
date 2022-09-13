import axios from 'axios'

export default class AdvertisementService{

     getAllAdvertisement(){
        return axios.get("http://localhost:8080/api/advertisement/get-all");
    }

    addAdvertisement(advertisementModel){
        return axios({
            method:"POST",
            url:`http://localhost:8080/api/advertisement/get-all`,
            data: advertisementModel,
            headers: "content-type: application/json",
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        });
    }

    getActiveAdvertisement(){
        return axios.get("http://localhost:8080/api/advertisement/get-all-active")
    }

    getAdvertisementByCompanyName(companyName){
        return axios.get(`http://localhost:8080/api/jobadverts/get-all-by-company?companyName=${companyName}`)
    }

    getAdvertisementByDate(){
        return axios.get("http://localhost:8080/api/advertisement/get-all-by-date")
    }
}