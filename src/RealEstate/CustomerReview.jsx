import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

let CustomerReview = () => {
  let [currentIndex, setCurrentIndex] = useState(0);

  let reviews = [
    { id: 1, name: "John Doe", review: "Excellent service and beautiful home!" },
    { id: 2, name: "Jane Smith", review: "Amazing experience, highly recommend this property!" },
    { id: 3, name: "Alice Johnson", review: "Love the neighborhood and the house." },
    { id: 4, name: "Michael Brown", review: "Best property in town, will consider buying again." },
    { id: 5, name: "Emily Davis", review: "Friendly staff and great amenities." },
    { id: 6, name: "David Wilson", review: "Perfect place for family living." }
  ];

  let handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 3 : prevIndex - 1));
  };

  let handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto p-4 py-10">
        <h1 className="text-center text-3xl font-semibold mb-4">Customer Reviews</h1>
        <div className="flex overflow-hidden">
          {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
            <div key={review.id} className="flex-none w-full sm:w-1/3 p-2 ">
              <div className="border-b-4 border-teal-700 bg-white rounded-lg shadow p-4 h-48 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <p className="text-lg font-bold text-teal-700 gap-2 flex items-center"><CgProfile className='text-2xl'/>{review.name}</p>
                <hr className='border-2 border-estate-secondary mt-2 rounded'></hr>
                <p className="mt-2 text-gray-600 overflow-hidden overflow-ellipsis">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-4 justify-end">
          <button onClick={handlePrev} className="text-estate-secondary border-2 border-estate-secondary hover:bg-estate-primary font-bold p-4 rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="text-estate-secondary border-2 border-estate-secondary hover:bg-estate-primary font-bold py-4 px-4 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
