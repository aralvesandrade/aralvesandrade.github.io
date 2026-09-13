import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { CloudProjects } from './components/CloudProjects'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <CloudProjects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}