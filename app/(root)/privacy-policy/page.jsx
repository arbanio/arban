import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
        <div className='w-full aboutBanner p-3'>
            <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>Privacy Policy</h1>
        </div>

        <div className='mt-10 w-[90%] m-auto' style={{ fontFamily: 'Montserrat'}}>
            <h6 className='font-bold text-2xl'>Introduction</h6> 
            <p className='font-semibold text-lg mt-4'>At ARBAN, a brand owned and operated by Emoment India Private Ltd. (“Emoment India Pvt. Ltd.”, “we”, “us”), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website and services.</p>
                
            <h6 className='font-bold text-2xl mt-10'>Information We Collect</h6> 
            <p className='font-semibold text-lg mt-4'>1. Personal Information: When you register an account, place an order, or communicate with us, we may collect personal information such as your name, email address, shipping address, and payment information.</p> 
            <p className='font-semibold text-lg mt-4'>2. Usage Information: We may collect information about how you use our website, including your browsing activities, the pages you visit, and the links you click on. </p> 
            <p className='font-semibold text-lg mt-4'>3. Device Information: We may collect information about the device you use to access our website, such as your IP address, browser type, and operating system. </p>
            
            <h6 className='font-bold text-2xl mt-10'>How We Use Your Information</h6> 
            <p className='font-semibold text-lg mt-4'>1. To Provide Services: We use your personal information to process your orders, provide customer support, and improve our products and services. </p> 
            <p className='font-semibold text-lg mt-4'>2. To Communicate: We may send you emails about your account, orders, and promotional offers. You can opt-out of promotional emails at any time. </p>
            <p className='font-semibold text-lg mt-4'>3. To Improve User Experience: We analyze usage data to understand how our website is used and to make improvements. </p>
            
            <h6 className='font-bold text-2xl mt-10'>Information Sharing</h6> 
            <p className='font-semibold text-lg mt-4'>1. Service Providers: We may share your information with third-party service providers who assist us in providing our services, such as payment processors and shipping companies.</p>
            <p className='font-semibold text-lg mt-4'>2. Legal Compliance: We may disclose your information when required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</p> 
            <p className='font-semibold text-lg mt-4'>3. Business Transfers: If Emoment India Pvt. Ltd. is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. Data Security We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>  
            
            <h6 className='font-bold text-2xl mt-10'>Your Choices</h6> 
            <p className='font-semibold text-lg mt-4'>1. Account Information: You can update or delete your account information at any time by logging into your account settings.</p> 
            <p className='font-semibold text-lg mt-4'>2. Cookies: You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. However, if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. </p>
                
            <h6 className='font-bold text-2xl mt-10'>Children's Privacy </h6> 
            <p className='font-semibold text-lg mt-4'>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information. </p> 
            
            <h6 className='font-bold text-2xl mt-10'>Changes to This Privacy Policy </h6> 
            <p className='font-semibold text-lg mt-4'>We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy periodically for any updates or changes. </p> 
            
            <h6 className='font-bold text-2xl mt-10'>Contact Us </h6> 
            <p className='font-semibold text-lg mt-4'>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <Link href={"Mailto:support@emoment.in"} className='underline text-blue-600'>support@emoment.in</Link></p>
        </div>
    </main>
  )
}

export default page