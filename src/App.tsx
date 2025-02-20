import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import ImageStrip from './components/ImageStrip'
import Location from './components/Location'
import PropertyDescription from './components/PropertyDescription'
import PropertyDetails from './components/PropertyDetails'
import './index.css'

function App() {

  return (
    <div className='main-container-wrapper'>
      Main Component
      <Header />
      <HeroBanner />
      <ImageStrip />
      <PropertyDescription />
      <PropertyDetails />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
