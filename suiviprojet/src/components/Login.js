import React, { useState } from 'react';
import Link from 'next/link';
import userService from '../services/user.service';
import Modal from './Modal';
import { useRouter } from 'next/router';


const Login = () => {

    const router = useRouter();
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
   
    const submitLogin = (e) => {
        e.preventDefault();
        userService.login(user)
                .then((data) => { 
            localStorage.setItem('token', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));
            if(data.error){
                setShowModal(true)
            }
            else{
                router.push('/')
            }
            
          })
          .catch(err => console.log(err))
      }
      

    return (
        <div className='bg_img_login'>
        <Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
           <p>Identifiant ou password Incorrect</p>
        </Modal>
        
      
   <div className='card__login'>
       <h1 className='card__title'>Sign In</h1>

       <form className='auth_textfield' onSubmit={(e) => submitLogin(e)}>

           <input className='textfield' type="text" placeholder='Email' onChange={(e) => setUser({ ...user, identifier: e.target.value })}
           />

           <input className='textfield' type="password" placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })}
          
           />

           <button type="submit" className='login__btn' onClick={() => Login()}>Sign In</button>
           </form>

           <span className='login_signup'>
           <Link href="/register">
            <strong>Sign up now</strong>
            </Link>
            </span>
            </div>
            {/* : 
            
               <button className='logout__btn' onClick={() => Logout()}>
                   Se Déconnecter
               </button> */}
            
          
   </div>
    );
}

export default Login;
