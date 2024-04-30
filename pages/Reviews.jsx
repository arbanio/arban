import ReviewCard from "@/components/ReviewCard";



const Reviews = () => {
  
    const reviewData = [
    {
        name: "Eshika Rawat",
        description: "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating."
    },

    {
        name: "Mukesh Sahu",
        description: "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating."
    },

    {
        name: "Priyanshu",
        description: "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating."
    }
  ];

  return (
    <main className="w-full h-screen bg-transparent relative z-40">
        <div className="w-full flex flex-col justify-center">
            <h1 className="text-4xl font-semibold mt-20 xl:mt-40 flex justify-center" style={{ fontFamily: 'Amarante'}}>REVIEWS</h1>

            <div className="mt-10 xl:mt-20 flex justify-around">
                {reviewData.map((data) => (
                    <ReviewCard name={data.name} key={data.name} description={data.description} />
                ))}
            </div>
        </div>
    </main>
  )
}

export default Reviews;