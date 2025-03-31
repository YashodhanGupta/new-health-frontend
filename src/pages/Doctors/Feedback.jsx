import { useState } from 'react';
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';
import avatar from '../../assets/images/avatar-icon.png';

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (273)
        </h4>

        <div className="flex gap-3 items-start mb-[30px]">
          {/* Avatar */}
          <figure className="w-10 h-10 rounded-full flex-shrink-0">
            <img className="w-full" src={avatar} alt="" />
          </figure>

          {/* Review Content */}
          <div className="w-full">
            {/* Name and Stars */}
            <div className="flex justify-between items-center">
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ali Ahmed
              </h5>

              {/* Star Ratings */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} color="#0067ff" />
                ))}
              </div>
            </div>

            {/* Date */}
            <p className="text-[14px] leading-6 text-textColor">
              {formateDate("02-14-2023")}
            </p>

            {/* Review Text */}
            <p className="text__para mt-2 font-medium text-[15px]">
              Good Services, highly recommended
            </p>
          </div>
        </div>
      </div>
      { !showFeedbackForm && <div className='text-center'>
        <button className='btn' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}

      {showFeedbackForm && <FeedbackForm/>}
    </div>
  );
};

export default Feedback;
