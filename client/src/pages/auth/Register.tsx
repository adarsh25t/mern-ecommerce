import CommonForm from '@/components/common/form'
import { registerFormInputs, registrationFormController } from '@/config'
import { RegisterInputs } from '@/config/types'
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/auth-slice';
import { AppDispatch, RootState } from '@/store/store';
import { useState, useTransition } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const [formData, setFormData] = useState<RegisterInputs>(registerFormInputs);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { toast } = useToast()
  const userState = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      if (typeof data.payload === 'object' && data.payload?.success) {
        toast({
          type: 'foreground',
          title: data.payload?.message,
          style: {
            color: "green"
          }
        })
        navigate('/auth/login');
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