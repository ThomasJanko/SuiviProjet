import '../styles/styles.scss'
import MainLayout from '../layout/MainLayout';
import '../../dist/output.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>)
}

export default MyApp