import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certificates'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
function App()
{
  return (
    <div>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}
export default App