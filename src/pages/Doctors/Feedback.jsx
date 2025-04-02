import { useState, useMemo } from 'react';
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';
import avatar from '../../assets/images/avatar-icon.png';

const Feedback = ({ totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // Full list of reviews (6-8 reviews)
  const allReviews = [
    { user: { name: "John Doe", photo: "" }, createdAt: "2024-04-01T12:00:00Z", reviewText: "Great experience!", rating: 5 },
    { user: { name: "Jane Smith", photo: "" }, createdAt: "2024-03-25T15:30:00Z", reviewText: "Very professional!", rating: 4 },
    { user: { name: "Alex Johnson", photo: "" }, createdAt: "2024-03-20T14:15:00Z", reviewText: "Good service!", rating: 3 },
    { user: { name: "Emma Brown", photo: "" }, createdAt: "2024-03-18T10:00:00Z", reviewText: "Highly recommend!", rating: 5 },
    { user: { name: "Michael Lee", photo: "" }, createdAt: "2024-03-15T09:45:00Z", reviewText: "Very helpful.", rating: 4 },
    { user: { name: "Sophia Wilson", photo: "" }, createdAt: "2024-03-12T13:30:00Z", reviewText: "Could be better.", rating: 3 },
    { user: { name: "David Miller", photo: "" }, createdAt: "2024-03-10T08:20:00Z", reviewText: "Fantastic doctor!", rating: 5 },
    { user: { name: "Olivia Martinez", photo: "" }, createdAt: "2024-03-05T11:10:00Z", reviewText: "Very kind and patient.", rating: 4 },
  ];

  // Select 2 random reviews on each refresh
  const reviews = useMemo(() => {
    const shuffled = [...allReviews].sort(() => Math.random() - 0.5); // Shuffle array
    return shuffled.slice(0, 2); // Get first 2 elements
  }, []); // Runs only on first render

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          Random Reviews ({totalRating})
        </h4>

        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className='flex justify-between gap-10 mb-[30px]'>
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                  <img className="w-full rounded-full" 
                       src={review.user.photo || avatar} 
                       alt="User Avatar" />
                </figure>

                <div>
                  <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                    {review.user.name}
                  </h5>
                  <p className="text-[14px] leading-6 text-textColor">
                    {formateDate(review.createdAt)}
                  </p>
                  <p className="text__para mt-2 font-medium text-[15px]">
                    {review.reviewText}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <AiFillStar key={i} color="#0067ff" />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews available</p>
        )}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
