import Navigation from '../modules/NavBar'
import Hero from '../HeroPage'
import SectionDate from '../section1'
import Carousel from '../section2'
import Popup from '../modules/popup'
import InvitationDetails from '../section3'
import Footer from '../Footer'

export default function Home() {
  return (
    <>
      <Popup />
      <Navigation />
      <Hero />
      <SectionDate />
      <Carousel />
      <InvitationDetails />
      <Footer />
    </>
  )
}