import { Formik, Form } from "formik";
import React from "react";

const AddJobAdvertisement = () => {

  return (
    <Formik>
      <Form  className="w-full max-w-lg m-auto py-10 mt-10 px-10 border">
 
  <div>
    <label className="text-gray-600 font-medium">Job Title</label>
    <input className="border-solid border-gray-300 border py-2 px-4 w-full
    rounded text-gray-700" name="title" placeholder="Full Stack Developer,
    Backend Engineer, etc." autoFocus /> 
  </div>

  <button
    className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
    type="submit"
  >
    Submit
  </button>

      </Form>
    </Formik>
  );
};

export default AddJobAdvertisement;
