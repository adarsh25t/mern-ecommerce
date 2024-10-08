import CommonForm from '@/components/common/form';
import { toastMessage } from '@/components/common/toast';
import { loginFormController, loginFormInputs } from '@/config';
import { LoginInputs } from '@/config/types';
import { loginUser } from '@/store/auth-slice';
import { AppDispatch, RootState } from '@/store/store';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [formData, setFormData] = useState<LoginInputs>(loginFormInputs);
  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (typeof data.payload === 'object') {
        if (data.payload?.success) {
          toastMessage(data.payload?.message, "green")
        }
        else {
          toastMessage(data.payload?.message, "red")
        }
      }
    })
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
        loading={userState.isLoading}
      />
      <p className='text-sm text-left text-gray-600 my-2'>
        Don't have an account? <Link to="/auth/register" className='text-primary font-bold'>Register</Link>
      </p>
    </div>
  )
}

export default Login