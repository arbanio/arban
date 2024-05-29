const { default: Footer } = require("@/components/Footer")
const { default: Link } = require("next/link")

const OurSevicesPage = () => {
    return(
        <main>
        <div className='w-full aboutBanner p-3'>
            <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>Our Services</h1>
        </div>

        <div className='mt-10 w-[90%] m-auto' style={{ fontFamily: 'Montserrat'}}>
            <h5 className='font-bold text-4xl'>Our Services</h5>
            <h6 className='font-semibold text-lg mt-4'>At Arban, we pride ourselves on offering exquisite perfumes crafted with precision and passion. As a brand owned by Emoment Pvt Ltd, we bring you an array of services designed to cater to your olfactory desires. Our commitment to quality, innovation, and customer satisfaction is evident in every product and service we provide.</h6> 

            <h6 className='font-bold text-2xl mt-10'>1. Perfume Creation Consultation</h6> 
            <p className='font-semibold text-lg mt-4'>Embark on a journey of scent exploration with our perfume creation consultation service. Whether you're seeking a signature fragrance for yourself or developing a custom scent for a special occasion, our experienced perfumers are here to guide you through the creative process. From selecting the perfect notes to refining the blend to perfection, we ensure that your fragrance reflects your unique personality and style.</p> 

            
            <h6 className='font-bold text-2xl mt-10'>2. Custom Perfume Development</h6> 
            <p className='font-semibold text-lg mt-4'>Elevate your brand or event with our custom perfume development service. Collaborate with our team to conceptualize and create a bespoke fragrance tailored to your specifications. Whether it's a corporate gift, wedding favor, or promotional product, we'll work closely with you to capture the essence of your brand or occasion in a one-of-a-kind scent that leaves a lasting impression.</p>
            
            <h6 className='font-bold text-2xl mt-10'>3. Scent Marketing Solutions</h6> 
            <p className='font-semibold text-lg mt-4'>Harness the power of scent to enhance your brand identity and create memorable experiences for your customers. Our scent marketing solutions leverage the science of fragrance to evoke emotions, influence behavior, and strengthen brand connections. Whether you're looking to create a welcoming atmosphere in your retail space or leave a lasting impression at an event, our customized scent strategies will help you stand out from the crowd.</p>

            
            <h6 className='font-bold text-2xl mt-10'>4. Fragrance Workshops and Events</h6> 
            <p className='font-semibold text-lg mt-4'>Immerse yourself in the art of perfumery with our fragrance workshops and events. Perfect for individuals, groups, and corporate teams, our interactive sessions offer a hands-on experience where participants can learn about fragrance composition, ingredient selection, and perfume history. Whether you're a novice or a connoisseur, our workshops are designed to inspire creativity and deepen your appreciation for the world of scent.</p> 
                
            <h6 className='font-bold text-2xl mt-10'>5. Product Development and Private Labeling</h6> 
            <p className='font-semibold text-lg mt-4'>Expand your product line or launch your own brand with our product development and private labeling services. From conceptualization to production, we offer end-to-end support to bring your vision to life. Whether you're interested in developing a line of perfumes, candles, or home fragrances, our team will work tirelessly to ensure that your products meet the highest standards of quality and craftsmanship.</p> 

            <h6 className='font-bold text-2xl mt-10'>6. Scented Product Development</h6> 
            <p className='font-semibold text-lg mt-4'>Extend your brand's reach with our scented product development services. From scented skincare products to aromatic home goods, we specialize in infusing a touch of luxury into every aspect of your product line. Our team of experts will collaborate with you to create custom fragrances that complement your existing offerings and captivate your target audience. Elevate your brand's sensory experience and leave a lasting impression with Arban's scented product solutions.</p> 

            <h6 className='font-bold text-2xl mt-10'>7. Fragrance Branding and Packaging</h6> 
            <p className='font-semibold text-lg mt-4'>Make a lasting impression with our fragrance branding and packaging services. Our talented designers will work closely with you to develop branding elements and packaging designs that reflect the essence of your fragrance and resonate with your target audience. Whether you're launching a new perfume line or refreshing an existing brand, our creative team will ensure that your packaging stands out on the shelves and leaves a memorable impression with every unboxing.</p>

            <h6 className='font-bold text-2xl mt-10'>8. Fragrance Testing and Evaluation</h6> 
            <p className='font-semibold text-lg mt-4'>Ensure the quality and efficacy of your fragrances with our fragrance testing and evaluation services. Our state-of-the-art testing facilities and experienced perfumers will rigorously assess the performance, stability, and sensory characteristics of your formulations to ensure they meet the highest standards of excellence. Whether you're a budding perfumer or an established brand, trust Arban to provide accurate and insightful evaluations that will elevate the quality of your fragrances.</p>

            <h6 className='font-bold text-2xl mt-10'>9. Fragrance Education and Training</h6> 
            <p className='font-semibold text-lg mt-4'>Deepen your understanding of perfumery with our fragrance education and training programs. From introductory courses to advanced workshops, we offer comprehensive training designed to enhance your knowledge and skills in the art of scent creation. Learn about fragrance chemistry, ingredient sourcing, blending techniques, and more from industry experts who are passionate about sharing their craft. Whether you're a hobbyist or a professional perfumer, our educational programs offer something for everyone.</p>

            <h6 className='font-bold text-2xl mt-10'>Experience the Art of Scent with Arban</h6> 
            <p className='font-semibold text-lg mt-4'>At Arban, we're dedicated to providing unparalleled fragrance experiences that delight the senses and inspire creativity. With our wide range of services, we invite you to explore the world of scent in all its beauty and complexity. Whether you're looking to create a custom perfume, elevate your brand with scented products, or enhance your fragrance knowledge, Arban is here to help you unlock the power of scent and create unforgettable olfactory experiences.</p>

            <h6 className='font-bold text-2xl mt-10'>Contact Information</h6> 
            <p className='font-semibold text-lg mt-4'>If you have any questions about these Services, please contact us at <Link href={"mailto:support@emoment.in"} className='text-blue-500 underline'>support@emoment.in</Link> .</p>
            
            <div className="border-t-2 border-gray-400 mt-10 w-full h-1"></div>

            <p className='font-semibold text-lg mt-4'>Feel free to adjust this content to better align with your brand's messaging and objectives!</p>
          
        </div>

        <div className='mt-20'>
          <Footer />
        </div>

        </main>
    )
};

export default OurSevicesPage;