import CommonForm from '@/components/common/form'
import { toastMessage } from '@/components/common/toast';
import { registerFormInputs, registrationFormController } from '@/config'
import { RegisterInputs } from '@/config/types'
import { registerUser } from '@/store/auth-slice';
import { AppDispatch, RootState } from '@/store/store';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const [formData, setFormData] = useState<RegisterInputs>(registerFormInputs);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userState = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      if (typeof data.payload === 'object') {
        if (data.payload?.success) {
          toastMessage(data.payload?.message, "green")
          navigate('/auth/login');
        }
        else {
          toastMessage(data.payload?.message, "red")
        }
      }
    })
  }
  return (
    <div className='mx-auto w-full max-w-md'>
      <h2 className='text-3xl text-center font-bold my-3'>Create new account</h2>

      <CommonForm
        formControlls={registrationFormController}
        formData={formData}
        setFormData={setFormData}
        onSumitText={"Register"}
        onSubmit={handleSubmit}
        loading={userState.isLoading}
      />
      <p className='text-sm text-left text-gray-600 my-2'>
        Already have an account? <Link to="/auth/login" className='text-primary font-bold'>Login</Link>
      </p>
    </div>
  )
}

export default Register