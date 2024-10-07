import CommonForm from '@/components/common/form';
import { loginFormController, loginFormInputs } from '@/config';
import { LoginInputs } from '@/config/types';
import React, { useState, useTransition } from 'react'
import { Link } from 'react-router-dom';

function Login() {

  const [formData, setFormData] = useState<LoginInputs>(loginFormInputs);
  const [transition, setTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // useTransition(() => {

    // })
    // TODO: call API to register user
    // await registrationFormController.submitForm(formData);
  }

  return (
    <div className='mx-auto w-full max-w-md'>
      <h2 className='text-3xl text-center font-bold my-3'> Sign in to your account </h2>
      <CommonForm
        formControlls={loginFormController}
        formData={formData}
        setFormData={setFormData}
        onSumitText={"Register"}
        onSubmit={handleSubmit}
        loading={transition}
      />
      <p className='text-sm text-left text-gray-600 my-2'>
        Don't have an account? <Link to="/auth/register" className='text-primary font-bold'>Register</Link>
      </p>
    </div>
  )
}

export default Login