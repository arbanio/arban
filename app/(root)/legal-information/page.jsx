import Footer from "@/components/Footer";
import Link from "next/link";

const LegalInformationPage = () => {
    return(
        <main>
        <div className='w-full aboutBanner p-3'>
            <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>Legal Information</h1>
        </div>

        <div className='mt-10 w-[90%] m-auto' style={{ fontFamily: 'Montserrat'}}>
            <h6 className='font-bold text-2xl mt-10'>Terms of Service</h6> 
            <p className='font-semibold text-lg mt-4'>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the arban.io website (the "Service") operated by Arban, a brand owned by Emoment Pvt Ltd ("us", "we", or "our").Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p> 

            
            <h6 className='font-bold text-2xl mt-10'>Content</h6> 
            <p className='font-semibold text-lg mt-4'>Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.</p> 
            <p className="font-semibold text-lg mt-4">We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
            
            <h6 className='font-bold text-2xl mt-10'>Changes</h6> 
            <p className='font-semibold text-lg mt-4'>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            
            <h6 className='font-bold text-2xl mt-10'>Privacy Policy</h6> 
            <p className='font-semibold text-lg mt-4'>Your privacy is important to us. It is Arban's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to arban.io (hereinafter, "us", "we", or "arban.io"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>

            
            <h6 className='font-bold text-2xl mt-10'>Security</h6> 
            <p className='font-semibold text-lg mt-4'>We value your trust in providing us with your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p> 
                
            <h6 className='font-bold text-2xl mt-10'>Links to Other Sites</h6> 
            <p className='font-semibold text-lg mt-4'>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p> 

            <h6 className='font-bold text-2xl mt-10'>Childrens Privacy</h6> 
            <p className='font-semibold text-lg mt-4'>Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p> 

            <h6 className='font-bold text-2xl mt-10'>Changes to This Privacy Policy</h6> 
            <p className='font-semibold text-lg mt-4'>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>

            <h6 className='font-bold text-2xl mt-10'>Contact Us</h6> 
            <p className='font-semibold text-lg mt-4'>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>

            <h6 className='font-bold text-2xl mt-10'>Contact Information</h6> 
            <p className='font-semibold text-lg mt-4'>If you have any questions about these Services, please contact us at <Link href={"mailto:support@emoment.in"} className='text-blue-500 underline'>support@emoment.in</Link> .</p>
            
            <div className="border-t-2 border-gray-400 mt-10 w-full h-1"></div>

            <p className='font-semibold text-lg mt-4'>Feel free to adjust any details to better fit your specific privacy practices and contact information.</p>
          
        </div>

        <div className='mt-20'>
          <Footer />
        </div>

        </main>
    )
};

export default LegalInformationPage;