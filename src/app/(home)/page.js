import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import HomeBanner from '@/components/HomeBanner/HomeBanner'
import Pricing from '@/components/Pricing/Pricing'
import Sponser from '@/components/Sponser/Sponser'
import Card from '../../components/Card/Card';
import {BsChevronUp} from "react-icons/bs"
import Link from 'next/link'
import Team from '@/components/Team/Team'




export default function Home() {
  return (
    <main className="flex min-h-screen pt-16 flex-col bg-white  justify-between ">
      < div className=''>
      <HomeBanner></HomeBanner>
      <span className="fixed bottom-16 hidden rounded-full md:block right-8 bg-red-600 hover:bg-yellow-500 transition-all duration-500 p-5"><Link href="/#home"><BsChevronUp color='white' size={26}></BsChevronUp></Link></span>
     <About></About>
     <Sponser></Sponser>
     <Card></Card>
     <Pricing></Pricing>
     <Team></Team>
     <Contact></Contact>
      </div>

      

      
    </main>
  )
}
