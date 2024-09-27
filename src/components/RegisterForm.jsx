  // import { useState } from "react";
  // const RegisterForm = () => {
  //   const [name, setName] = useState("");
  //   const [number, setNumber] = useState("");

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setName("");
  //     setNumber("");
  //     const form = event.currentTarget;
  //     const formData = new FormData(form);
  //     const formUrl =
  //       "https://script.google.com/macros/s/AKfycbyZbUvxx1cac0meOL3a3a_232WHYwLgS8kzf8uE5mKQNpnZaZ8Y45veqLfCVNp1Q25qww/exec";
  //     try {
  //       fetch(formUrl, {
  //         method: "POST",
  //         body: formData,
  //       });
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   };

  //   return (
  //     <>
  //       <div className="flex justify-center items-center h-screen">
  //         <form
  //           id="about"
  //           onSubmit={handleSubmit}
  //           className="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm transition-transform transform hover:scale-105 duration-300"
  //         >
  //           <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
  //             Imkoniyatni qoldan boy bermang, hoziroq talaba boling
  //           </h2>

  //           <div className="mb-4">
  //             <label
  //               htmlFor="name"
  //               className="block text-gray-700 font-semibold mb-2"
  //             >
  //               Ism Familiya
  //             </label>
  //             <input
  //               id="name"
  //               name="first_name"
  //               type="text"
  //               required
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //               className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
  //               placeholder="Ism Familiya"
  //             />
  //           </div>

  //           <div className="mb-6">
  //             <label
  //               htmlFor="number"
  //               className="block text-gray-700 font-semibold mb-2"
  //             >
  //               Telefon raqam
  //             </label>
  //             <input
  //               id="number"
  //               name="phone_number"
  //               type="tel" // Changed from 'number' to 'tel'
  //               required
  //               value={number}
  //               onChange={(e) => setNumber(e.target.value)}
  //               className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
  //               placeholder="+998 99 123 45 67"
  //               pattern="[+0-9]*" // Allows only numbers and +
  //               inputMode="numeric" // Suggests a numeric keypad on mobile
  //             />
  //           </div>


  //           {/* <div className="mb-6">
  //             <label
  //               htmlFor="number"
  //               className="block text-gray-700 font-semibold mb-2"
  //             >
  //               Telefon raqam
  //             </label>
  //             <input
  //               id="number"
  //               name="phone_number"
  //               type="number"
  //               required
  //               value={number}
  //               onChange={(e) => setNumber(e.target.value)}
  //               className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
  //               placeholder="+998 99 123 45 67"
  //             />
  //           </div> */}

  //           <button
  //             type="submit"
  //             className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105"
  //           >
  //             Ariza Qoldirish
  //           </button>
  //         </form>
  //       </div>
  //     </>
  //   );
  // };

  // export default RegisterForm;


  import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importing toastify CSS

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setName("");
    setNumber("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formUrl =
      "https://script.google.com/macros/s/AKfycbyZbUvxx1cac0meOL3a3a_232WHYwLgS8kzf8uE5mKQNpnZaZ8Y45veqLfCVNp1Q25qww/exec";
    try {
      await fetch(formUrl, {
        method: "POST",
        body: formData,
      });
      toast.success("Arizanggiz qabul qilindi, tez orada siz bilan aloqaga chiqamiz", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Malumotlaringiz qabul qilinishda xatolik yuz berdi.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          id="about"
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm transition-transform transform hover:scale-105 duration-300"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Imkoniyatni qoldan boy bermang, hoziroq talaba boling
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Ism Familiya
            </label>
            <input
              id="name"
              name="first_name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Ism Familiya"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="number"
              className="block text-gray-700 font-semibold mb-2"
            >
              Telefon raqam
            </label>
            <input
              id="number"
              name="phone_number"
              type="tel" // Changed from 'number' to 'tel'
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="+998 99 123 45 67"
              pattern="[+0-9]*" // Allows only numbers and +
              inputMode="numeric" // Suggests a numeric keypad on mobile
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            Ariza Qoldirish
          </button>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer outside the form */}
    </>
  );
};

export default RegisterForm;
