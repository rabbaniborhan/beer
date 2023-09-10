import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/pricing1.jpg'
import img2 from '../../../public/pricing2.jpg'
import img3 from '../../../public/pricing3.jpg'
import img4 from '../../../public/pricing4.jpg'

const Pricing = () => {
  return (
    <div id='pricing'>

      <div className='text-white bg-black opacity-80 md:bg-none py-10 flex flex-col justify-center items-end'>
       <div className='flex flex-col justify-center items-start'>
       <div>
          <h1 className='font-semibold text-xl ml-4 font-serif text-lx text-yellow-500 border-b-2 pb-2 border-yellow-500 uppercase'>drink</h1>
        </div>
        <div className='flex items-center pb-8 border-b-2 border-dotted mt-6'>
          <Image className='rounded-full ml-2 md:mr-10' src={img1} alt=''></Image>
          <div className=' ml-5  md:mr-14'>
            <p className='md:font-medium  font-serif text-lg md:text-xl'>Narragansett Lager</p>
            <p className='md:font-normal text-sm md:text-base font-extralight mt-2'>Lager - North American Adjunct; 5.1% ABV</p>
          </div>
          <p className='md:mr-5 mr-3 font-semibold text-lg text-yellow-500'>$4.99</p>
        </div>
        <div className='flex items-center pb-8 border-b-2 border-dotted mt-6'>
          <Image className='rounded-full ml-2 md:mr-10' src={img2} alt=''></Image>
          <div className=' ml-5  md:mr-14'>
            <p className='md:font-medium  font-serif text-lg md:text-xl'>IPA - Imperial / Double; 8.4% ABV</p>
            <p className='md:font-normal text-sm md:text-base font-extralight mt-2'>Lager - North American Adjunct; 5.1% ABV</p>
          </div>
          <p className='md:mr-5 mr-3 font-semibold text-lg text-yellow-500'>$9.99</p>
        </div>
        <div className='flex items-center pb-8 border-b-2 border-dotted mt-6'>
          <Image className='rounded-full ml-2 md:mr-10' src={img3} alt=''></Image>
          <div className=' ml-5  md:mr-14'>
            <p className='md:font-medium  font-serif text-lg md:text-xl'>Schöfferhofer Grapefruit</p>
            <p className='md:font-normal text-sm md:text-base font-extralight mt-2'>Shandy / Radler; 2.5% ABV</p>
          </div>
          <p className='md:mr-5 mr-3 font-semibold text-lg text-yellow-500'>$7.99</p>
        </div>
        <div className='flex items-center pb-8 border-b-2 border-dotted my-6'>
          <Image className='rounded-full ml-2 md:mr-10' src={img4} alt=''></Image>
          <div className=' ml-5  md:mr-14'>
            <p className='md:font-medium  font-serif text-lg md:text-xl'>Guinness Draught</p>
            <p className='md:font-normal text-sm md:text-base font-extralight mt-2'>Lager - North American Adjunct; 5.1% ABV</p>
          </div>
          <p className='md:mr-5 mr-3 font-semibold text-lg text-yellow-500'>$8.99</p>
        </div>
       </div>
      </div>


    </div>
  )
}

export default Pricing