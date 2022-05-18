import '../styles/styles.scss'
import AppContext from '../AppContext';
import MainLayout from '../layout/MainLayout';
import '../../dist/output.css'
import { useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState("User")
  const [search, setSearch] = useState()

  return (
    <AppContext.Provider
    value={{
      state: {
        search: search,
        user: user
      },
      setUser: setUser,
      setSearch: setSearch,
    }}
  >
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </AppContext.Provider>)
}

export default MyApp