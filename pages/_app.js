import '../styles/w3.css'
import '../styles/oswald.css'
import '../styles/open-sans.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
