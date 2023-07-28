import React, { useState } from "react";
import { firestore } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    enrolled: "",
    job: "",
    program: "",
    sessions: "",
    campaign: "",
    aadhar: "",
  });
  const [isJobReady, setIsJobReady] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleJobStatusChange = (event) => {
    setIsJobReady(event.target.value === "ready");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
    alert("Submitted Successfully");
    await setDoc(
      doc(firestore, "Programs", formData.campaign, "users", formData.aadhar),
      {
        name: formData.name,
        age: formData.age,
        contact: formData.contact,
        aadhar: formData.aadhar,
        enrolled: formData.enrolled,
        job: formData.job,
        program: formData.program,
        sessions: formData.sessions,
        campaign: formData.campaign,
      }
    );
    console.log("Job status:", isJobReady ? "Ready" : "Not Ready");
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white rounded-lg shadow-md p-6 w-96'>
        <h1 className='text-3xl font-bold mb-6'>Form</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='age' className='text-gray-700'>
              Age
            </label>
            <input
              type='text'
              id='age'
              name='age'
              value={formData.age}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='contact' className='text-gray-700'>
              Contact
            </label>
            <input
              type='text'
              id='contact'
              name='contact'
              value={formData.contact}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='age' className='text-gray-700'>
              Aadhar Number
            </label>
            <input
              type='text'
              id='aadhar'
              name='aadhar'
              value={formData.aadhar}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
            <button class='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>
              Validate
            </button>
          </div>
          <div className='mb-4'>
            <label htmlFor='enrolled' className='text-gray-700'>
              Enrolled
            </label>
            <input
              type='text'
              id='enrolled'
              name='enrolled'
              value={formData.enrolled}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='job' className='text-gray-700'>
              Job
            </label>
            <input
              type='text'
              id='job'
              name='job'
              value={formData.job}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='sessions' className='text-gray-700'>
              Sessions
            </label>
            <input
              type='text'
              id='sessions'
              name='sessions'
              value={formData.sessions}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='campaign' className='text-gray-700'>
              Campaign
            </label>
            <select
              id='campaign'
              name='campaign'
              value={formData.campaign}
              onChange={handleInputChange}
              className='border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            >
              <option value=''>Select Campaign</option>
              <option value='skilldevelopment'>Skill Development</option>
              <option value='womenempowerment'>Women Empowerment</option>
              <option value='agriculturedevelopment'>
                Agriculture Development
              </option>
              <option value='communitydevelopment'>
                Community Development
              </option>
            </select>
          </div>
          <button
            type='submit'
            onClick={handleSubmit}
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
