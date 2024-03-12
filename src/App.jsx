import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    window.setTimeout(() => {
      navigate("/auth");
    }, 3000)
  })

  return (
    <>
     <h1>Welcome</h1>
    </>
  )
}

export default App
