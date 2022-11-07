import React from "react";

function Form({ client }) {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Name
        </label>
        <input
          className="mt-2 block w-full p-3 bg-gray-50"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          defaultValue={client?.name}
        />
      </div>
      <div className="mt-5 w-full">
        <label className="text-gray-800">Email</label>
        <input
          className="mt-2 block w-full p-3 bg-gray-50"
          type="text"
          id="email"
          name="email"
          placeholder="email@gmail.com"
          defaultValue={client?.email}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800">Company</label>
        <input
          className="mt-2 block w-full p-3 bg-gray-50"
          type="text"
          id="company"
          name="company"
          placeholder="Empresa"
          defaultValue={client?.company}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800">Telefon</label>
        <input
          className="mt-2 block w-full p-3 bg-gray-50"
          type="text"
          id="telefon"
          name="telefon"
          placeholder="000 000 000"
          defaultValue={client?.telefon}
        />
      </div>
    </>
  );
}

export default Form;
