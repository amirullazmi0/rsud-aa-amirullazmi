import Image from 'next/image'
import Navbar from './Component/Navbar'
import Section1 from './Section1'
import Section2 from './Section2'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-5 gap-3 mt-4 p-4">
        <div className="col-span-3">
          <Section1 />
        </div>
        <div className="col-span-2">
          <Section2 />
        </div>
      </div>
    </main>
  )
}
