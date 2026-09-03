import React from 'react'
import useDate from '../hooks/useDate'

const DateBox = () => {
    const { day, month, year } = useDate()
  return (
    <div className='flex justify-center items-center mt-20 border-2 border-white w-90 h-15 p-5 rounded-2xl gap-4 text-2xl select-none bg-[#282929]'>
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
    </div>
  )
}

export default DateBox
