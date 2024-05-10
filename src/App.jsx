import './App.css'
import Navbar from './components/Shared/Navbar'

import { Container } from '@mui/material'

function App() {

  return (
    <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
      <Navbar />
    </Container>
  )
}

export default App
