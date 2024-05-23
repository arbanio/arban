import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const Careerspage = () => {
  return (
    <main>
    <div className='w-full aboutBanner p-3'>
        <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>Careers</h1>
    </div>

    <div className='mt-10 w-[90%] m-auto' style={{ fontFamily: 'Montserrat'}}>
        <h6 className='font-bold text-2xl'>Career Opportunities at ARBAN</h6> 
        <p className='font-semibold text-lg mt-4'>Join the ARBAN team and embark on an exciting journey in the world of fragrance! At ARBAN, we offer diverse career opportunities for individuals who are passionate about sales, distribution, and affiliate marketing. Our dynamic work environment encourages creativity, innovation, and collaboration, empowering you to thrive and succeed in your role.</p>
            
        <h6 className='font-bold text-2xl mt-10'>Sales Representative</h6> 
        <p className='font-semibold text-lg mt-4'>Are you a dynamic and driven individual with a knack for sales? Join our team as a Sales Representative and play a key role in promoting and selling our exquisite range of perfumes. As a Sales Representative, you will be responsible for building and maintaining relationships with customers, identifying new sales opportunities, and achieving sales targets. With uncapped earning potential, your success as a Sales Representative is directly proportional to your sales performance.</p> 
        
        <h6 className='font-bold text-2xl mt-10'>Distributor</h6> 
        <p className='font-semibold text-lg mt-4'>Are you a natural leader with strong entrepreneurial skills? Become a Distributor for ARBAN and take charge of distributing our high-quality perfumes in your area. As a Distributor, you will have the opportunity to build and manage your own sales network, recruit and train sales representatives, and drive sales growth in your territory. With a flexible and rewarding commission-based structure, being a Distributor allows you to earn based on your sales achievements and leadership abilities.</p> 
        
        <h6 className='font-bold text-2xl mt-10'>Affiliate Marketer</h6> 
        <p className='font-semibold text-lg mt-4'>Are you tech-savvy and passionate about digital marketing? Join our affiliate program and become an Affiliate Marketer for ARBAN. As an Affiliate Marketer, you will promote ARBAN's products through your online channels, such as websites, blogs, and social media platforms. You will earn commissions for every sale generated through your unique affiliate links, giving you the flexibility to earn passive income based on your marketing efforts.</p>

        
        <h6 className='font-bold text-2xl mt-10'>Why Choose ARBAN?</h6> 
        <p className='font-semibold text-lg mt-4'>-  Flexible Work Environment: Enjoy the flexibility to work on your own schedule and from any location</p> 
        <p className='font-semibold text-lg mt-4'>-  Unlimited Earning Potential: With a commission-based structure, your earning potential is limitless.</p>
        <p className='font-semibold text-lg mt-4'>-  Ongoing Support and Training: Receive comprehensive training and ongoing support to help you succeed in your role.</p>
        <p className='font-semibold text-lg mt-4'>-  Exciting Growth Opportunities: Explore opportunities for career advancement and personal growth within ARBAN.</p>


        <p className='font-semibold text-lg mt-4'>Join us at ARBAN and be part of a dynamic team dedicated to delivering exceptional fragrances and unforgettable experiences to our customers worldwide. Take the first step towards an exciting and rewarding career with ARBAN today!</p> 
                
        <p className='font-semibold text-lg mt-4'>To apply for any of the above positions or to learn more about career opportunities at ARBAN, please contact us at <Link href={"Mailto:support@emoment.in"} className='underline text-blue-600'>support@emoment.in</Link> We look forward to welcoming you to our team!</p>
    </div>

    <div className='mt-20'>
      <Footer />
    </div>
</main>
  )
}

export default Careerspage