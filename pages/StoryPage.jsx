
const StoryPage = () => {
  return (
    <main className="w-full bg-black-2 h-[700px]">
        <div className="flex h-full">
            <div className="w-1/2 flex flex-col justify-center">
                <div className="w-1/2 ml-40">
                    <h1 className="text-5xl font-semibold" style={{ fontFamily: 'Amarante'}}>OUR STORY</h1>
                    <p className="text-xl mt-5 w-65" style={{ fontFamily: 'Amarante'}}>Our story begins with a passion for capturing beauty in scent. Inspired by nature, we craft fragrances that transcend time, blending tradition with innovation. Each perfume is a masterpiece, inviting you to create unforgettable memories. Welcome to our world of luxury.</p>
                    <button className="w-40 border-2 border-gold-1 text-gold-1 text-xl rounded-5 p-3 mt-5" style={{ fontFamily: 'Amarante'}}>Learn More</button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <div className="w-300  h-400 bg-white rounded-5 relative mt-5"></div>
                <div className="w-300 h-400 bg-gold-1 rounded-5 absolute right-[7rem] top-[70rem]"></div>
            </div>
        </div>
    </main>
  )
}

export default StoryPage;