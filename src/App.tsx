import Nav from './components/Nav'
import Hero from './components/Hero'
import Circle from './components/BgCircle'
import './App.css';

function App() {

  return (
    <>
      <Circle top="-300px" right="-1000px" size="2000px" color='#F2C94C90'/>
      <Circle top="-700px" left="-500px" size="2000px" color='#F2C94C80'/>
      <Circle top="-1500px" left="100px" size="2000px" color='#E5E50180'/>
      <Circle top="500px" left="-500px" size="1500px" color='#685FD479'/> 
      <Nav />
      <Hero />
    </>
  )
}

export default App
