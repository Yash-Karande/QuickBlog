import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => { // Renamed to "Footer" for standard React component naming
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row justify-between items-start py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
          <img src={assets.logo} alt='logo' className='w-32 sm:w-44'/>
          <p className='max-w-[410px] mt-6'>
            {/* You can add some descriptive text here if you want */}
          </p>
        </div>
        <div className='flex flex-wrap justify-center w-full md:w-auto gap-10 mt-10 md:mt-0'>
           {footer_data.map((section, index)=> (
            <div key={index}>
              {/* THIS IS THE CORRECTED LINE */}
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 © - All Rights Reserved.</p>
    </div>
  )
}

export default Footer; 
