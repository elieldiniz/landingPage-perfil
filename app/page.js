import Image from 'next/image'

import Button from '@/component/button'

export default function Home() {
  return (
  <main className='w-screen h-screen  bg-slate-500 flex justify-center items-center '>
      <div className='bg-zinc-500 flex flex-col justify-center items-center w-80 h-3/5 gap-5 rounded-xl' >
            <div>
              <Image
              className='rounded-full '
                src="/avatar.png"
                alt="Perfil"
                width={200}
                height={200}
              />
            </div>

            <div className='border-b'>
              <h1 >Eliel Diniz</h1>
            </div>

          <div className='border-b' >
              <p >Front-and Developer</p>
          </div>

          <div className='border-b mt-2 '>
            <p href="https://github.com/elieldiniz ">Elielfantichelle@outllok.com</p>
          </div>
          <div>
              <Button button='GitHub ' className='className="text-red-800 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-base w-36 h-8'/>
          </div>

          <div >
              <Button button='Linkdin' className='className="text-red-800 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-base w-36 h-8'/>
          </div>

          <div>
              <Button button='Instagran' className='className="text-red-800 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-base w-36 h-8'/>
          </div>


      </div>
  </main>

  )
}
