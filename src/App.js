import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker, Space } from "antd";
import ShowBooking from "./components/showBooking";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [newBooking, setNewBooking] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, date);
    if (date) {
      axios
        .post("http://127.0.0.1:3000/api/v1/bookings", {
          name,
          email,
          date,
        })
        .then((data) => {
          console.log(data.data.data.booking, "ww");
          setNewBooking(data.data.data.booking);
          clearForm();
        })
        .catch((err) => {
          clearForm();
          alert(err.response.data.message);
        });
    } else {
      alert("Please enter a date");
    }
  };
  const onChange = (e) => {
    setDate(`${e.$y}-${parseInt(e.$M) + 1}-${e.$D}`);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setDate("");
  };
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <form
        onSubmit={submitHandler}
        className="w-[50%] shadow-xl rounded-2xl h-[20rem] flex flex-col items-center p-[2rem] justify-between"
      >
        <h2 className="font-bold text-[2rem]">Booking Form</h2>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full border-solid border-[1px] border-black rounded-xl p-[0.5rem]"
          placeholder="Name"
        ></input>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full border-solid border-[1px] border-black rounded-xl p-[0.5rem]"
          placeholder="Email"
        ></input>
        <DatePicker style={{ width: "100%" }} onChange={onChange} />
        <button
          type="submit"
          className="w-full bg-[orange] rounded-xl p-[1rem]"
        >
          Submit
        </button>
      </form>
      {newBooking && (
        <div className="mt-[2rem]">
          <ShowBooking bookingData={newBooking} />
        </div>
      )}
    </div>
  );
}

export default App;
