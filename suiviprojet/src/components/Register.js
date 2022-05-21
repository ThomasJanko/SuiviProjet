import { useState } from 'react';
import Link from 'next/link';
import userService from '../services/user.service';
import { useRouter } from "next/router";

const Register = () => {

    const router = useRouter();
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
   
    const submitRegister = (e) => {
        e.preventDefault();
        userService.register(user)
                .then((data) => { 
            localStorage.setItem('token', data.jwt);
           
            if(data.error){
                console.log("error")
            }
            else{
                router.push('/')
            }
                
            
            
          })
          .catch(err => console.log(err))
      }
      

    return (
        <div className='bg_img_login'>
        
        
      
   <div className='card__login'>
       <h1 className='card__title'>Register</h1>

       <form className='auth_textfield' onSubmit={(e) => submitRegister(e)}>

          <input className='textfield' type="text" placeholder='Username' onChange={(e) => setUser({ ...user, username: e.target.value })}
          
          />

           <input className='textfield' type="text" placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })}
           />

           <input className='textfield' type="password" placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })}
          
           />

            

           <button type="submit" className='login__btn' onClick={() => Register()}>Enregistrer</button>
           </form>

           <span className='login_signup'>
           <Link href="/account">
            <strong>Login</strong>
            </Link>
            </span>
            </div>
            
            
          
   </div>
    );
}

export default Register;
