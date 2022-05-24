import '../styles/styles.scss'
import AppContext from '../AppContext';
import MainLayout from '../layout/MainLayout';
import '../../dist/output.css'
import { useState } from 'react';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState("User")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")


  return (
    // <Router>
    <AppContext.Provider
    value={{
      state: {
        search: search,
        user: user,
        category: category,
      },
      setUser: setUser,
      setSearch: setSearch,
      setCategory: setCategory,
    }}
  >
    {/* <Switch> */}

      {/* <Route path="/login">
        <h1>Login Page ! </h1>
      </Route>

      <Route path="/">
        <h1>HomePage ! </h1>
      </Route>

      <Route path="login">
        <h1>Login Page ! </h1>
      </Route> */}
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    {/* </Switch> */}
  </AppContext.Provider>
  // </Router>
  )
}

export default MyApp