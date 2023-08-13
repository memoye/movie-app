import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import { MovieCard } from './components'


function App() {

  const getMovies = async () => {
    try {
      const data = await axios.get('https://movies-app.prakashsakari.repl.co/api/movies')
      console.log(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // getMovies();
  }, [])
  return (
    <div className='App'>
      <MovieCard />
    </div>
  )
}

export default App
