
const StoryPage = () => {
  return (
    <main className="w-full bg-transparent h-[400px] md:h-[700px] relative z-40">
        <div className="flex h-full">
            <div className="w-1/2 flex flex-col md:justify-center">
                <div className="w-1/2 m-5 md:m-10 md:ml-40">
                    <h1 className="text-sm xs:text-xl md:text-3xl xl:text-5xl font-semibold" style={{ fontFamily: 'Amarante'}}>OUR STORY</h1>
                    <p className="text-xs md:text-base xl:text-xl mt-5 w-40 md:w-[30rem]" style={{ fontFamily: 'Amarante'}}>Our story begins with a passion for capturing beauty in scent. Inspired by nature, we craft fragrances that transcend time, blending tradition with innovation. Each perfume is a masterpiece, inviting you to create unforgettable memories. Welcome to our world of luxury.</p>
                    <button className="w-28 xl:w-40 border-2 border-gold-1 text-gold-1 text-xs md:text-base xl:text-xl rounded-5 p-2 md:p-3 mt-5" style={{ fontFamily: 'Amarante'}}>Learn More</button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center relative">
                <div className="w-[150px] md:w-[250px] xl:w-300 h-[150px] md:h-[300px] xl:h-400 bg-white rounded-5 xs:mt-10 md:mt-5"></div>
                <div className="w-[150px] md:w-[250px] xl:w-300 h-[150px] md:h-[300px] xl:h-400 bg-gold-1 rounded-5 absolute top-[5rem] xs:top-[7rem] md:top-[12rem] right-[2rem] xs:right-[4rem] xl:right-[7rem] xl:top-[15rem]"></div>
            </div>
        </div>
    </main>
  )
}

export default StoryPage;