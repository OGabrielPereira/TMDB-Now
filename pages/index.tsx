import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import Image from 'next/image'

const Home: NextPage = () => {
  const [movies, setMovies] = useState([])
  const baseUrl = 'https://api.themoviedb.org/3'
  const apiKey = ''
  useEffect(() => {
    axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`)
    .then((response) => {
      setMovies(response.data.results);
    });
  }, [])

  return (
    <>
      <h1 className='flex justify-center text-black text-3xl font-bold'>Hello World!</h1>

      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-4'>
          
          {movies.map((movie) => (
      
            <div className='flex flex-col items-center'>
              <div className='flex flex-col justify-start'>
                <Image className='rounded-t-xl' src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.title} width={300} height={380} />
                  <div className='bg-black rounded-b-xl h-16 p-4'>
                    <h1 className='text-white font-bold'>{movie.title}</h1>
                    <p className='text-white text-sm'>{movie.release_date}</p>
                  </div>
              </div>
            </div>

          ))}
      </div>
    </div>
  </>
  )
}

export default Home
