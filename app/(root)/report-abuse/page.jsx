import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const ReportAbusepage = () => {
  return (
    <main>
    <div className='w-full aboutBanner p-3'>
        <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>Report Abuse</h1>
    </div>

    <div className='mt-10 w-[90%] m-auto' style={{ fontFamily: 'Montserrat'}}>
        <h6 className='font-bold text-2xl'>Introduction</h6> 
        <p className='font-semibold text-lg mt-4'>At ARBAN, we are committed to maintaining a safe and respectful online environment for all users. If you encounter any content or behavior on our website that you believe violates our policies or is abusive, please report it to us. This Report Abuse page outlines the process for reporting abuse and our commitment to addressing such reports promptly and appropriately.</p>
            
        <h6 className='font-bold text-2xl mt-10'>Reporting Abuse</h6> 
        <p className='font-semibold text-lg mt-4'>If you believe that any content on our website violates our policies or is abusive, please report it to us immediately. You can report abuse by contacting our customer support team at support@emoment.in or by using the reporting feature available on our website.</p> 
        <p className='font-semibold text-lg mt-4'>When reporting abuse, please provide as much detail as possible, including: </p> 
        <p className='font-semibold text-lg mt-4'>- Description of the abusive content or behavior</p>
        <p className='font-semibold text-lg mt-4'>- URLs or links to the specific content</p>
        <p className='font-semibold text-lg mt-4'>- Any additional information that may be relevant to the report</p>
        
        <h6 className='font-bold text-2xl mt-10'>Our Response</h6> 
        <p className='font-semibold text-lg mt-4'>Once we receive a report of abuse, we will investigate the matter promptly and take appropriate action. This may include removing the abusive content, warning or suspending the user responsible for the behavior, or taking other corrective actions as necessary.</p> 
        <p className='font-semibold text-lg mt-4'>We take all reports of abuse seriously and are committed to addressing them in a timely and effective manner. However, please note that we may not be able to provide specific details about the actions taken in response to a report, as we prioritize the privacy and security of all users involved.</p>
        
        <h6 className='font-bold text-2xl mt-10'>Confidentiality</h6> 
        <p className='font-semibold text-lg mt-4'>We understand the sensitive nature of reporting abuse and will treat all reports with the utmost confidentiality. Your identity will be kept confidential to the extent permitted by law, and we will not disclose your information without your consent unless required by law.</p>
        
        <h6 className='font-bold text-2xl mt-10'>False Reports</h6> 
        <p className='font-semibold text-lg mt-4'>Please note that making false reports of abuse is a violation of our policies and may result in disciplinary action, including suspension or termination of your account. We encourage users to report abuse in good faith and to provide accurate and truthful information.</p> 
        
        
        <h6 className='font-bold text-2xl mt-10'>Contact Us </h6> 
        <p className='font-semibold text-lg mt-4'>If you have any questions or concerns about our Report Abuse process, please contact our customer support team at<Link href={"Mailto:support@emoment.in"} className='underline text-blue-600'>support@emoment.in</Link>  We are here to assist you and ensure a safe and positive experience for all users of our website.</p>
        
        <p className='font-semibold text-lg mt-4'>Thank you for helping us maintain a safe and respectful online community at ARBAN</p>
    
    </div>

    <div className='mt-20'>
      <Footer />
    </div>
</main>
  )
}

export default ReportAbusepage