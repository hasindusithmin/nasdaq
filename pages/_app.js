import '../styles/w3.css'
import '../styles/oswald.css'
import '../styles/open-sans.css'
import '../styles/globals.css'
import '../styles/autoComplete.min.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='w3-content' style={{maxWidth:'1600px'}}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
