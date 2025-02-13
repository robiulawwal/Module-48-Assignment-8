
import PropTypes from 'prop-types';

const ShowReview = ({ review }) => {
    return (
        <div>
            <div className="p-4 bg-white rounded-2xl border border-[#09080f]/10 gap-4 flex items-center">
                <div className='flex items-center flex-wrap'>
                    <div className='max-w-40'>
                        <img className='w-full' src={review.product_image} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#8b34d3] mb-2">{review.product_title}</h3>
                        <p className="text-lg text-stone-600">{review.description}</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="1 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="3 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="5 star" defaultChecked />

                        </div>
                    </div>
                </div>
                <h3 className='ml-auto font-bold text-4xl'>{review.rating}</h3>
            </div>
        </div>
    );
};
ShowReview.propTypes ={
    review: PropTypes.object
}
export default ShowReview;