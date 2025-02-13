import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedStateContext } from '../dataContexts/DataContexts';
import ShowReview from '../showReview/ShowReview';

const Reviews = () => {
    const { reviews, setReviews } = useContext(SharedStateContext);
    console.log(reviews)
    return (
        <div className='max-w-[1300px] mx-auto w-11/12 md:w-full'>
            <div>
                <h2 className="font-bold text-5xl text-center my-10">Product Reviews By Ratings</h2>
                <div className="space-y-6">
                    {
                    reviews.length > 0 ? 
                        reviews.map((review, idx) =><ShowReview key={idx} review={review}></ShowReview>
                    )
                     : 
                        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-[#09080f]/10">
                            <h3 className="text-3xl font-bold text-[#8b34d3] mb-4">No reviews available</h3>
                           <div className='rating mb-2'>
                           <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="1 star" defaultChecked />
                           </div>
                                <p className="font-semibold text-center w-1/2">
                                    no ratings available go to to home and select any item if you want add a review.Press the button below to go home.
                                </p>
                            <Link to='/'><button className="mt-6 py-3 px-6 bg-[#8b34d3] text-white text-lg font-bold rounded-4xl hover:bg-[#7a2db9] transition-colors"> Go To Home </button></Link>
                        </div>
                    }
                </div>
            </div>
          <div className='text-center'>
          {reviews.length >0 ?
            <button onClick={()=>setReviews([])} className='mt-4 text-2xl p-8 btn btn-soft btn-warning'>clear Ratings</button>:""
            }
          </div>
        </div>
    );
};

export default Reviews;
