import React from 'react'


const News = () => {
  return (
    <div className='flex flex-col items-center my-20 font-poppins lg:my-[150px]'>
        <div className='flex flex-col text-center gap-[15px] md:w-[600px]'>
            <h1 className='font-bold text-2xl md:text-4xl'>Get Connected to our efforts and Be a part of this Change</h1>
            <p className='font-semibold text-slate-500 mb-[40px]'>Subscribe to our NEWSLETTER</p>
        </div>
        <div className='flex justify-center mb-8 md:mb-[100px]'>
          <button
            type='button'
            className='font-bold bg-blue text-sm text-black border-[1px] pb-[10px] px-[20px] rounded-full md:text-base hover:drop-shadow-xl'
          >
            Subscribe
          </button>
          <button
            type='button'
            className='font-bold text-sm text-blue underline-offset-auto py-[5px] px-[20px] md:text-base hover:drop-shadow-xl'
          >
            Become A Donor
          </button>
        </div>
    
    </div>
  )
}

export default News