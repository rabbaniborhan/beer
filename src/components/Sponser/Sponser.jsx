import Image from 'next/image'
import img1 from '../../../public/sponsors1.png'
import img2 from '../../../public/sponsors2.png'
import img3 from '../../../public/sponsors3.png'

const Sponser = () => {
  return (
    <div className='sponser text-white py-10 bg-fixed'>
       <div className='md:ml-8 mx-4 '>
       <p className='font-medium text-xl font-serif'>SPECIAL PROMOTION</p>
        <h1 className='font-bold text-7xl my-2 font-serif '>For This Month!</h1>
        <p className='my-4 font-medium text-lg'>Alienum phaedrum torquatos nec eu, vis detraxit <br className='hidden md:block' /> periculis ex, nihil expetendis in mei. Mei an pericula <br className='hidden md:block' /> euripidis</p>
       </div>
       <span className='text-transparent hidden md:block ml-4 border-b-8 border-yellow-500'>jkasdfoiwrjhgfvcnjxkmlsdeijrwufdjosdkcnjbfhrwiueoqkdsamngh</span>
        <div className='flex mb-4 mt-8'>
            <Image src={img1} alt=''></Image>
            <Image src={img2} alt=''></Image>
            <Image src={img3} alt=''></Image>
        </div>
        <span className='' ><button className='font-semibold uppercase border-4 px-3 py-2 mt-4 ml-16 text-black border-white bg-red-500 rounded'>Read more</button></span>
    </div>
  )
}

export default Sponser