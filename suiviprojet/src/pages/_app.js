import '../styles/styles.scss'
import AppContext from '../AppContext';
import MainLayout from '../layout/MainLayout';
import '../../dist/output.css'
import { useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState("User")

  return (
    <AppContext.Provider
    value={{
      state: {
        user: user
      },
      setUser: setUser,
    }}
  >
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </AppContext.Provider>)
}

export default MyApp