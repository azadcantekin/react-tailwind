import React, { useState } from 'react'
import {Formik , Form} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import UserService from '../../services/UserService';

let isDisabled;
const SignInSchema = Yup.object().shape({
  
    password :Yup.string()
    .min(8,'To short!')
    .max(16,'To long')
    .required('Required')
    ,
  email: Yup.string().email('Invalid email').required('Required'),
  });
  


const Register = () => {
  const  userService = new UserService();
  const [token , setToken ] = useState([]);
  return (
    <div>
       <div class="w-full flex flex-wrap">


<div class="w-full md:w-1/2 flex flex-col">

<div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
<img
              className="block lg:hidden h-16 w-auto"
              src={require("../../assets/images/logo.png")}
              alt="HRMS"
            />
            <img
              className="hidden lg:block h-16 w-auto"
              src={require("../../assets/images/logo.png")}
              alt="HRMS"
            />
</div>

<div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
  <p class="text-center text-3xl">Welcome to HRMS application.</p>   
    <Formik
      initialValues={{
        id : 0 ,
        email :'',
        password:''
      }}
      validationSchema={SignInSchema}
      onSubmit={values=>{
        console.log(values);
        const user = {
          email : values.email,
          password : values.password
      };
        userService.signUp(user);

      }}
    > 
       
       {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => ( <Form>{
            (isDisabled =
                values.email === "" ||
                values.password === "" 
             )
            }

                   <div class="flex flex-col pt-4">
                       <label for="email" class="text-lg">Email</label>
                       <input type="email" id="email" placeholder="example@gmail.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" 
               value={values.email} onChange={handleChange} />
                   </div>

                   <div class="flex flex-col pt-4">
                       <label for="password" class="text-lg">Password</label>
                       <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
               value={values.password} onChange={handleChange}/>
                   </div>
   
                   <button type="submit" disabled ={isSubmitting}>Submit</button>
                   
          </Form>)}
         
     </Formik>
     <div class="text-center pt-12 pb-12">
                   <p>You have a account <Link to="/login"><a href="" class="underline font-semibold">Log in here.</a></Link></p>
               </div>
           </div>

       </div>

     
       <div class="w-1/2 shadow-2xl">
           <img class="object-cover w-full h-screen hidden md:block" src={require("../../assets/images/login.jpg")}/>
       </div>
   </div>
    </div>
  )
}

export default Register