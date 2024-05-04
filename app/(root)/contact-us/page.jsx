import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

const Contactpage = () => {
  return (
    <>
      <main className='w-full h-[800px] bg-black-2 flex justify-center items-center mt-40 md:mt-0'>
        <div className='w-[90vw] md:w-[70vw] h-[920px] md:h-[600px] rounded-50 flex flex-col md:flex-row mb-40 md:mb-0 contactdiv'>
          <div className='w-full md:w-1/2 flex flex-col items-center'>
            <h1 className='w-40 text-center mt-10 text-sm md:text-xl border-4 border-white p-2 tracking-widest' style={{ fontFamily: "Montserrat"}}>CONTACT</h1>

            <form className='flex flex-col gap-6 w-4/5 mt-10'>
              <input className='p-2 mt-3 border-l-4 border-b-4 border-white inputfield' type='text' name='name' placeholder='ENTER YOUR NAME*' style={{ fontFamily: "Montserrat"}} required />
              <input className='p-2 mt-3 border-l-4 border-b-4 border-white inputfield' type='email' name='email' placeholder='ENTER YOUR EMAIL*' style={{ fontFamily: "Montserrat"}} required/>
              <input className='p-2 mt-3 border-l-4 border-b-4  border-white inputfield' type='number' name='number' placeholder='PHONE NUMBER' style={{ fontFamily: "Montserrat"}} />
              <textarea className='p-2 mt-3 border-l-4 border-b-4 border-white inputfield' rows={3} cols={6} name='message' placeholder='YOUR MESSAGE*' required style={{ fontFamily: "Montserrat"}} ></textarea>

              <button type='submit' className='w-40 text-sm md:text-xl border-l-4 border-r-4 border-white p-2 tracking-widest m-auto mt-5'  style={{ fontFamily: "Montserrat"}}>SUBMIT</button>
            </form>
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <Image src={"/assets/contactProduct.svg"} alt='contactproduct' width={500} height={500} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Contactpage