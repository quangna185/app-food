import React from 'react'
import ChiefCard from './ChiefsCard'
const chiefs = [
    {
        name: "Juan Carlos",
        img: "/img/img_1 (1).jpg",
        recipesCount: "10",
        cuisine: "Mexican",
    },
    {
        name: "John Doe",
        img: "/img/img_2 (1).jpg",
        recipesCount: "05",
        cuisine: "Japanese",
    },
    {
        name: "Erich Maria",
        img: "/img/img_3 (1).jpg",
        recipesCount: "13",
        cuisine: "Italian",
    },
    {
        name: "Chris Brown",
        img: "/img/img_4 (1).jpg",
        recipesCount: "08",
        cuisine: "American"
    },
    {
        name: "Blake Lively",
        img: "/img/img_5 (1).jpg",
        recipesCount: "09",
        cuisine: "French"
    },
    {
        name: "Ben Affleck",
        img: "/img/img_6 (1).jpg",
        recipesCount: "04",
        cuisine: "Indian"
    }
]
const ChiefsSection = () => {
  return (
    <div className='section chiefs'>
        <h1 className='title'>Our Top Chiefs</h1>
        <div className='top-chiefs-container'>
            {
              chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) 
            }
        </div>
    </div>
  )
}
export default ChiefsSection
