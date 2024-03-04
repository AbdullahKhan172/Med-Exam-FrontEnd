const ShowBooking = ({ bookingData }) => {
  console.log(bookingData, "wwwwwwwwwww");
  return (
    <div>
      <h2>Name:{bookingData.name}</h2>
      <h2>Email:{bookingData.email}</h2>
      <h2>Date:{bookingData.date.substring(0, 10)}</h2>
    </div>
  );
};

export default ShowBooking;
