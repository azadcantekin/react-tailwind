import React, { useState, useEffect } from "react";
import {getCities} from "../../services/CityService";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddJobAdvertisement = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
  const response = getCities();
  setCities(response);


  }, []);

  return (
    
    <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <select
        class="form-select appearance-none
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding bg-no-repeat
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
      {console.log(cities)}
          
      </select>
    </div>
  </div>
  );
 
};

export default AddJobAdvertisement;
