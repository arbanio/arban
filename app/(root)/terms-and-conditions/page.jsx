import Link from 'next/link';
import React from 'react';

const TermsAndConditionspage = () => {
  return (
    <main>
        <div className='w-full aboutBanner p-3'>
            <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>Terms & Conditions</h1>
        </div>

        <div className='mt-10 w-[90%] m-auto' style={{ fontFamily: 'Montserrat'}}>
            <h5 className='font-bold text-4xl'>Terms and Conditions</h5>
            <h6 className='font-bold text-2xl mt-4'>Introduction</h6> 
            <p className='font-semibold text-lg mt-4'>Welcome to the ARBAN website, a brand owned and operated by Emoment India Private Ltd. (“Emoment India Pvt. Ltd.”, “we”, “us”). By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions (the “Terms”). Please read these Terms carefully, and do not use our website if you do not agree to any part of these Terms.</p>
                
            <h6 className='font-bold text-2xl mt-10'>Changes to Terms</h6> 
            <p className='font-semibold text-lg mt-4'>We reserve the right to update and change these Terms from time to time without prior notice. Any amendments, modifications, enhancements, or changes to our website or services shall be subject to these Terms. Continued use of the website after any such changes shall constitute your consent to such changes.</p> 

            
            <h6 className='font-bold text-2xl mt-10'>Account Registration</h6> 
            <p className='font-semibold text-lg mt-4'>1. Eligibility: You must be at least 18 years old to use our website and services. </p> 
            <p className='font-semibold text-lg mt-4'>2. Information: You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. </p>
            <p className='font-semibold text-lg mt-4'>3. Security: You are responsible for maintaining the confidentiality of your account password and are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
            
            <h6 className='font-bold text-2xl mt-10'>Use of the Website</h6> 
            <p className='font-semibold text-lg mt-4'>1. Legal Compliance: You agree to use the website in compliance with all applicable laws, rules, and regulations.</p>
            <p className='font-semibold text-lg mt-4'>2. Prohibited Activities: You must not use the website for any illegal or unauthorized purpose. You agree not to, in the use of the website, violate any laws in your jurisdiction.</p> 

            
            <h6 className='font-bold text-2xl mt-10'>Intellectual Property</h6> 
            <p className='font-semibold text-lg mt-4'>1. Ownership: All content on the ARBAN website, including but not limited to text, graphics, logos, images, and software, is the property of Emoment India Pvt. Ltd. and is protected by copyright, trademark, and other intellectual property laws.</p> 
            <p className='font-semibold text-lg mt-4'>2. Usage Rights: You may access, view, and print the content on the website solely for personal, non-commercial use. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance of the content on this website is strictly prohibited without our prior written consent.</p>
                
            <h6 className='font-bold text-2xl mt-10'>Product Information and Availability</h6> 
            <p className='font-semibold text-lg mt-4'>Accuracy: We strive to ensure that the information on our website is accurate, complete, and current. However, there may be instances where information about our products, including pricing and availability, may be inaccurate or incomplete.</p> 
            <p className='font-semibold text-lg mt-4'>Right to Change: We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>

            <h6 className='font-bold text-2xl mt-10'>Orders and Payments</h6> 
            <p className='font-semibold text-lg mt-4'>Acceptance: By placing an order, you are offering to purchase a product subject to these Terms. All orders are subject to availability and confirmation of the order price.</p> 
            <p className='font-semibold text-lg mt-4'>Payment: We accept payments through various methods as provided on our website. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.</p> 

            
            <h6 className='font-bold text-2xl mt-10'>Shipping and Delivery</h6> 
            <p className='font-semibold text-lg mt-4'>1. Policy: Our shipping and delivery terms are as provided on our website. Please review them carefully. </p>
            <p className='font-semibold text-lg mt-4'>2. Delays: We are not responsible for delays caused by the carrier or any external factors beyond our control. </p>

            <h6 className='font-bold text-2xl mt-10'>Returns and Refunds</h6> 
            <p className='font-semibold text-lg mt-4'>Policy: Please review our return and refund policy provided on our website for detailed information on how to return products and request refunds.</p>

            <h6 className='font-bold text-2xl mt-10'>Limitation of Liability</h6> 
            <p className='font-semibold text-lg mt-4'>To the fullest extent permitted by law, Emoment India Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our website; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our website; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website by any third party; or (e) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the website, whether based on warranty, contract, tort, or any other legal theory, and whether or not we have been advised of the possibility of such damages.</p>

            <h6 className='font-bold text-2xl mt-10'>Governing Law</h6> 
            <p className='font-semibold text-lg mt-4'>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Bhubaneswar, Odisha, India.</p>

            <h6 className='font-bold text-2xl mt-10'>Contact Information</h6> 
            <p className='font-semibold text-lg mt-4'>If you have any questions about these Terms, please contact us at <Link href={"mailto:support@emoment.in"} className='text-blue-500 underline'>support@emoment.in</Link> .</p>
            
            <h6 className='font-bold text-2xl mt-10'>Force Majeure</h6> 
            <p className='font-semibold text-lg mt-4'>We will not be liable for any failure or delay in performance due to any cause beyond our control, including, but not limited to, acts of war, acts of God, earthquake, flood, embargo, riot, sabotage, labor shortage or dispute, governmental act, or failure of the Internet.</p>

            <h6 className='font-bold text-2xl mt-10'>Severability</h6> 
            <p className='font-semibold text-lg mt-4'>If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be severed from the remainder of these Terms, which will remain in full force and effect.</p>

            <h6 className='font-bold text-2xl mt-10'>Entire Agreement</h6> 
            <p className='font-semibold text-lg mt-4'>These Terms constitute the entire agreement between you and Emoment India Pvt. Ltd. regarding the use of our website and services and supersede any prior agreements between you and us relating to such subject matter.</p>
            <p className='font-semibold text-lg mt-4'>By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
        </div>
    </main>
  )
}

export default TermsAndConditionspage