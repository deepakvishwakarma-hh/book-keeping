"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    business_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // API request
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          business_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      } else {
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="pb-10">
      <form onSubmit={handleSubmit} className="grid gap-2 font-semibold">
        <label className="mt-1">
          Name
          <input
            required
            className="w-full rounded-md py-2 px-5 bg-[#c5d8d5]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="mt-1">
          Business Name
          <input
            required
            className="w-full rounded-md py-2 px-5 bg-[#c5d8d5]"
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
          />
        </label>

        <label className="mt-1">
          Email
          <input
            required
            className="w-full rounded-md py-2 px-5 bg-[#c5d8d5]"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label className="mt-1">
          Phone Number
          <input
            required
            className="w-full rounded-md py-2 px-5 bg-[#c5d8d5]"
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </label>

        <label className="mt-1">
          Message
          <textarea
            required
            className="w-full rounded-md py-2 px-5 bg-[#c5d8d5]"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button
          className="bg-[#2f5653] text-white py-2 rounded-md hover:bg-[#24403f] transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
