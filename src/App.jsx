import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { MainPage } from './components/MainPage.jsx'
import { Menu } from './components/Menu.jsx'

function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='*' element={<h1 style={{ height: '95vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>404 Not Found</h1>} />
      </Routes>
      <footer style={{
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        width: '100%',
        height: '50px',
        bottom: '0'
      }}
      >
        <p>All rights reserved &copy; 2022</p>
      </footer>
    </>
  )
}

export default App
