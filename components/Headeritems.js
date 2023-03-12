import React from 'react'

function Headeritems({title,Icon}) {
  return (
    <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
        <Icon  className="h-8 mb-1 group-hover:animate-bounce" />
        <p className='tracking-wider opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}

export default Headeritems