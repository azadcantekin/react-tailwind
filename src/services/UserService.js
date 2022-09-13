
const USER_URL = "http://localhost:8080/api/user/";
export default class UserService{


    signIn(){

    }

  async signUp(userModel){
    
            return await axios({
                method:"POST",
                url:USER_URL + `sign-up­`,
                data:userModel,
                headers:{"Content-Type":"application/json;charset-UTF-8"}
            }).then((res)=>{
                return res.data.message
            }).catch((err)=>{
                return err.error.error
            })
        
    }

}