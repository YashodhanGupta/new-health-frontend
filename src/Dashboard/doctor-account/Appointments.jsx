import { formateDate } from "../../utils/formateDate";
import { useState } from "react";
import { useEffect } from "react";

const Appointments = () => {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const doctorId = localStorage.getItem("doctorId"); // ✅ Retrieve doctor ID

        if (!doctorId) {
            console.log("No doctor ID found. Showing no bookings.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/v1/bookings?doctorId=${doctorId}`);
            const result = await response.json();

            console.log("API Response:", result); // Debugging

            if (result.success) {
                setAppointments(result.data);
            } else {
                console.error("Failed to fetch bookings:", result.message);
            }
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    fetchData();
}, []);



  return (
    <table className="w-full text-left text-sm text-grey-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Booked on
          </th>
        </tr>
      </thead>
      <tbody>
      {appointments.length === 0 ? (
  <tr>
    <td colSpan="5" className="text-center text-gray-500 py-6">
      You don't have any appointments.
    </td>
  </tr>
) : (
  appointments.map((appointment) => (
    <tr key={appointment._id}>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
      >
        <img 
          src={appointment.user?.photo}
          className="w-10 h-10 rounded-full"
          alt="User"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{appointment.user?.name}</div>
          <div className="text-normal text-gray-500">
            {appointment.user?.email}
          </div>
        </div>
      </th>
      <td className="px-6 py-4">{appointment.user?.gender}</td>
      <td className="px-6 py-4">
        {appointment.isPaid ? (
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
            Paid
          </div>
        ) : (
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
            Unpaid
          </div>
        )}
      </td>
      <td className="px-6 py-4">{appointment.ticketPrice}</td>
      <td className="px-6 py-4">{formateDate(appointment.createdAt)}</td>
    </tr>
  ))
)}

      </tbody>
    </table>
  )
}

export default Appointments
