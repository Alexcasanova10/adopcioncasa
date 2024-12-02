import React, { useState } from "react";
import "./App.css"; 

function MainApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    card: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [adopted, setAdopted] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const adoptPet = (petName) => {
    setAdopted(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>¡Felicidades, adoptaste a {petName}!</h2>
         <h1>✅</h1>
      </div>  );
  };

  if (isSubmitted && !adopted) {
    return (
      <div className="adoption">
        <h2 class="mb-4 text-center   text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Elige a tu nuevo amigo: </h2>     
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        name: "Juanito",
        img: "https://media.istockphoto.com/id/1482199015/es/foto/feliz-cachorro-gal%C3%A9s-corgi-14-semanas-de-edad-perro-gui%C3%B1ando-un-ojo-jadeando-y-sentado-aislado.jpg?s=612x612&w=0&k=20&c=lX65jf64HFLnR8XDD7pphv5KVRMmBCNTQBvzggRvQ14=",
      },
      {
        name: "Frijolito",
        img: "https://media.istockphoto.com/id/1589824836/es/foto/lindo-perro-marr%C3%B3n-que-sonr%C3%ADe-fondo-aislado.webp?s=1024x1024&w=is&k=20&c=bmCQ4tVPcbWupkQK_8uLRV1vkLyFtcC4nHxb6PXVPBk=",
      },
      {
        name: "Gatiski",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Gato_%282%29_REFON.jpg",
      },
      {
        name: "Catish",
        img: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ].map((pet) => (
      <div
        key={pet.name}
        onClick={() => adoptPet(pet.name)}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-48 object-cover"
          src={pet.img}
          alt={`Imagen de ${pet.name}`}
        />
        <div className="p-4 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {pet.name}
          </h5>
          <p className="mb-4 text-gray-700">¡Haz clic para adoptarme!</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Adoptar
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    
      </div>
    );
  }
  return (
    <div className="App">
    <h2 class="mb-4 text-center   text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Formulario de Adopción</h2>
      {adopted ? (
        <h2>{adopted}</h2>  

      ) : (
        
        
        <form className="max-w-md   mt-14 mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo electrónico
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="card"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.card}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Información bancaria
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="address"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dirección
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>

      )}
    </div>
  );
}
export default MainApp;
