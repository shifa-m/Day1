import React from 'react'
import Home from './Components/Section1/home'
import BottomPage from './Components/Section2/BottomPage'
import Section3 from './Components/Section3/Section3'

const App = () => {

  const image = [
  'https://i.pinimg.com/736x/17/d9/7f/17d97fca193cc7117cbee99569dcc007.jpg',
  'https://i.pinimg.com/474x/a6/6a/e6/a66ae6ac99b08ed7cf135c330c939324.jpg',
  'https://i.pinimg.com/1200x/98/ec/ea/98ecea912462e04a34cb72518b39b34c.jpg',
  'https://i.pinimg.com/736x/05/eb/43/05eb43aa10652b8cb10bf022bdd490d5.jpg'
  
  
]
  return (
    <div className='bg-mist-900 '>
      <Home/>
      <BottomPage/>
      <Section3 images={image}/>
    </div>
  )
}

export default App
