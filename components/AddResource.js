import React, { useState } from "react";
import Input from "./ui/Input";
const defaultState = {
  name: "",
  link: "",
  description: "",
};

export default function AddResourceForm() {
  const [formData, setFormData] = useState(defaultState);

  const inputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("submitting data", formData);

    // Submit here
    await fetch("/api/resource", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // TODO: Optimistic response / refetch when done

    setFormData(defaultState);
  };
  return (
    <div className="max-w-sm w-full shadow-2xl bg-white rounded-lg p-8 mt-8">
      <form onSubmit={submit}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1">
          <Input
            placeholder="The Web Developer Bootcamp 2021"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={inputChange}
          />
        </div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-gray-700"
        >
          Resource link
        </label>
        <div className="mt-1">
          <input
            value={formData.link}
            onChange={inputChange}
            type="text"
            name="link"
            id="link"
            className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="https://udemy.com/whatever"
          />
        </div>
        <div className="mt-1">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            value={formData.description}
            onChange={inputChange}
            type="text"
            name="description"
            id="description"
            className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="This was a great course"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
        >
          Add Resource
        </button>
      </form>
    </div>
  );
}
