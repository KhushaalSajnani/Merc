'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './contactUsFormCSS.css';

const CareersForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <form action="" method="" className="contactUsForm w-full" onSubmit={handleSubmit}>
        <fieldset className="fieldGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" placeholder="Full Name" />

          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email" placeholder="Email Address" />

          <label>
            Phone Number:
            <PhoneInput
              country={'ae'}
              className="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </label>
          {!valid && <p>Please enter a valid phone number.</p>}
        </fieldset>

        <fieldset className="fieldGroup">
          <label htmlFor="cv">Cover Letter:</label>
          <textarea id="cv" name="cv" placeholder="Share your expertise in brief"></textarea>
        </fieldset>

        <fieldset className="fieldGroup">
          <label htmlFor="file-upload">Attach Your CV:</label>
          <input
            className="fileUpload"
            id="file-upload"
            name="attachment"
            type="file"
            accept="application/pdf"
            data-parsley-excluded="true"
          />
        </fieldset>

        <button className='w-full bg-black p-4 rounded-md text-white' type="submit">Send Your Application</button>
      </form>
    </>
  );
};

export default CareersForm;
