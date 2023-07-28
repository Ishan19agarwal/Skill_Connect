import { useState } from "react";
import "./ContactForm.css";
function DonorForm() {
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    city: "",
    country: "",
    zipCode: "",
    state: "",
    paymentMethod: "",
    creditCardNumber: "",
    billingAddressSameAsShipping: false,
    billingName: "",
    billingCountry: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setDonorInfo((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(donorInfo);
  };

  return (
    <div className='bg-gray-100 py-8'>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          Donor Information
        </h2>

        <form
          onSubmit={handleSubmit}
          className='bg-white shadow rounded-lg px-8 pt-6 pb-8 mb-4 form-container grid grid-cols-1 md:grid-cols-2 gap-4'
        >
          <div className='mb-4'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Donor Details
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* First Name */}
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='first-name'
                  placeholder='Enter your first name'
                  value={donorInfo.firstName}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Last Name */}
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='last-name'
                  placeholder='Enter your last name'
                  value={donorInfo.lastName}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  value={donorInfo.email}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Contact Number */}
              <div>
                <label
                  htmlFor='contact-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Contact Number
                </label>
                <input
                  type='text'
                  name='contactNumber'
                  id='contact-number'
                  placeholder='Enter your contact number'
                  value={donorInfo.contactNumber}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* City */}
              <div>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700'
                >
                  City
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  placeholder='Enter your city'
                  value={donorInfo.city}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Country */}
              <div>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country
                </label>
                <input
                  type='text'
                  name='country'
                  id='country'
                  placeholder='Enter your country'
                  value={donorInfo.country}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Zip/Postal Code */}
              <div>
                <label
                  htmlFor='zip-code'
                  className='block text-sm font-medium text-gray-700'
                >
                  Zip/Postal Code
                </label>
                <input
                  type='text'
                  name='zipCode'
                  id='zip-code'
                  placeholder='Enter your zip/postal code'
                  value={donorInfo.zipCode}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* State */}
              <div>
                <label
                  htmlFor='state'
                  className='block text-sm font-medium text-gray-700'
                >
                  State
                </label>
                <input
                  type='text'
                  name='state'
                  id='state'
                  placeholder='Enter your state'
                  value={donorInfo.state}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className='payment-method-section'>
            <h3 className='payment-method-label'>Payment Method</h3>
            <div className='payment-option-container'>
              <input
                type='radio'
                name='paymentMethod'
                value='test_gateway'
                checked={donorInfo.paymentMethod === "test_gateway"}
                onChange={handleInputChange}
                className='input-field'
              />
              <span className='payment-option-label'>Test Gateway</span>
            </div>
            <div className='payment-option-container'>
              <input
                type='radio'
                name='paymentMethod'
                value='credit_card'
                checked={donorInfo.paymentMethod === "credit_card"}
                onChange={handleInputChange}
                className='input-field'
              />
              <span className='payment-option-label'>Credit Card</span>
            </div>
            {/* Additional input fields for credit card (if needed) */}
          </div>

          <div className='mb-4'>
            <h3 className='text-xl font-semibold text-gray-800 mt-8 mb-6'>
              Billing Address
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Billing Name */}
              <div>
                <label
                  htmlFor='billing-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='billingName'
                  id='billing-name'
                  placeholder='Enter billing name'
                  value={donorInfo.billingName}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Billing Country */}
              <div>
                <label
                  htmlFor='billing-country'
                  className='block text-sm font-medium text-gray-700'
                >
                  Country
                </label>
                <input
                  type='text'
                  name='billingCountry'
                  id='billing-country'
                  placeholder='Enter billing country'
                  value={donorInfo.billingCountry}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Billing Address */}
              <div>
                <label
                  htmlFor='billing-address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Address
                </label>
                <input
                  type='text'
                  name='billingAddress'
                  id='billing-address'
                  placeholder='Enter billing address'
                  value={donorInfo.billingAddress}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Billing City */}
              <div>
                <label
                  htmlFor='billing-city'
                  className='block text-sm font-medium text-gray-700'
                >
                  City
                </label>
                <input
                  type='text'
                  name='billingCity'
                  id='billing-city'
                  placeholder='Enter billing city'
                  value={donorInfo.billingCity}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Billing State */}
              <div>
                <label
                  htmlFor='billing-state'
                  className='block text-sm font-medium text-gray-700'
                >
                  State
                </label>
                <input
                  type='text'
                  name='billingState'
                  id='billing-state'
                  placeholder='Enter billing state'
                  value={donorInfo.billingState}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
              {/* Billing Zip/Postal Code */}
              <div>
                <label
                  htmlFor='billing-zip-code'
                  className='block text-sm font-medium text-gray-700'
                >
                  Zip/Postal Code
                </label>
                <input
                  type='text'
                  name='billingZipCode'
                  id='billing-zip-code'
                  placeholder='Enter billing zip/postal code'
                  value={donorInfo.billingZipCode}
                  onChange={handleInputChange}
                  className='input-field'
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='submit-button' // Add the class name to the button
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonorForm;
