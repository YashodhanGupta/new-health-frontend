import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full text-3xl font-bold">
            ✔
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for completing your secure online payment.  
          Your booking has been confirmed.
        </p>
        <p className="text-gray-500 mt-1">Have a great day!</p>

        <div className="mt-6">
          <Link
            to="/home"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
