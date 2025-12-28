import { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const {login} = useAuth();

    useEffect(() => {
        emailRef.current.focus();

    },[]);

    const handleLogin =(e) => {
        e.preventDefault();

        const vaildEmail = 'admin@gmail.com';
        const vaildPassword = 'admin1234';

        if(email === vaildEmail && password === vaildPassword){
            alert('Login success');
            login();

            navigate('/admin');
        }else{
            alert('wrong email or password');
        }
    };

    return(
        <div className='login-container'>
            <div className='login-box'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input 
                        type ="email"
                        ref ={emailRef}
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />

                    </div>
                    <button type='submit' className='login-btn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

