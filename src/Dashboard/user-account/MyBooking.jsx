import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBooking = () => {
  const {
    data: appointments = [],  
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  
 
  
  return (
    <div> 
      {loading && !error && <Loading />}
    
      {!error && !loading && <Error errMessage={error} />} <br />

      {!loading  && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          appointments.map((doctor) => (<DoctorCard doctor={doctor} key={doctor._id}  />)
       ) }
       {!loading && !error && appointments.length===0 && <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold
        text-primaryColor"  >You did not book any doctor yet!</h2>}

      </div> } <br />
    </div>
  );
};

export default MyBooking;
 