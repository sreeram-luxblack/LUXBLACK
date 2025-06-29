"use client";

import { useState } from "react";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    whatsapp: "",
    destination: "",
    dates: "",
    people: "",
    vacationType: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone || !/^\d{10,}$/.test(formData.phone))
      newErrors.phone = "Valid phone number required.";
    if (!formData.destination)
      newErrors.destination = "Destination is required.";
    if (!formData.dates) newErrors.dates = "Date of travel is required.";
    if (!formData.people) newErrors.people = "Please enter number of people.";
    if (!formData.vacationType)
      newErrors.vacationType = "Vacation type is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Your enquiry was sent successfully!");
        setFormData({
          name: "",
          city: "",
          email: "",
          phone: "",
          whatsapp: "",
          destination: "",
          dates: "",
          people: "",
          vacationType: "",
        });
      } else {
        setStatus("Failed to send enquiry. Please try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8F5F0] min-h-fit py-16 px-4 sm:px-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg max-w-xl w-full p-8 space-y-5"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-playfair text-[#2C2C2C] mb-4">
          Enquire Now
        </h2>

        <input
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="city"
          placeholder="City of Residence *"
          value={formData.city}
          onChange={handleChange}
          className="input"
        />
        {errors.city && <p className="error">{errors.city}</p>}

        <input
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className="input"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          name="whatsapp"
          placeholder="WhatsApp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="input"
        />

        <input
          name="destination"
          placeholder="Travel Destination *"
          value={formData.destination}
          onChange={handleChange}
          className="input"
        />
        {errors.destination && <p className="error">{errors.destination}</p>}

        <input
          name="dates"
          placeholder="Date of Travel *"
          value={formData.dates}
          onChange={handleChange}
          className="input"
        />
        {errors.dates && <p className="error">{errors.dates}</p>}

        <input
          name="people"
          placeholder="No. of People *"
          value={formData.people}
          onChange={handleChange}
          className="input"
        />
        {errors.people && <p className="error">{errors.people}</p>}

        <input
          name="vacationType"
          placeholder="Vacation Type *"
          value={formData.vacationType}
          onChange={handleChange}
          className="input"
        />
        {errors.vacationType && <p className="error">{errors.vacationType}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#C9B87A] text-white py-2 rounded-md hover:bg-[#bda865] transition-colors duration-300 font-semibold tracking-wide"
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </button>

        {status && (
          <p className="text-center text-sm text-green-600 mt-2">{status}</p>
        )}
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e0d7c4;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          background-color: #f8f5f0;
          outline: none;
        }
        .input:focus {
          border-color: #c9b87a;
        }
        .error {
          color: #dc2626;
          font-size: 0.875rem;
        }
      `}</style>
    </section>
  );
}
