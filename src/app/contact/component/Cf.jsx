'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const countries = [
    'Italy', 'France', 'Japan', 'Greece', 'Morocco',
    'India', 'New Zealand', 'South Africa', 'Thailand',
    'Australia', 'Peru', 'Iceland', 'Egypt', 'Spain', 'Indonesia',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required.';
    if (!formData.phone || !/^\d{10,}$/.test(formData.phone))
      newErrors.phone = 'Valid phone number required.';
    if (!formData.destination) newErrors.destination = 'Select a destination.';
    if (!formData.dates) newErrors.dates = 'Provide travel dates.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatus('Your message was sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          dates: '',
          notes: '',
        });
      } else {
        setStatus('Failed to send message. Try again later.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server error. Try again later.');
    }
  };

  return (
    <section className="bg-[#F8F5F0] min-h-fit py-16 px-4 sm:px-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg max-w-xl w-full p-8 space-y-5"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-playfair text-[#2C2C2C] mb-4">
          Contact Us
        </h2>

        <div>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-[#e0d7c4] rounded-md px-4 py-2 focus:outline-none focus:border-[#C9B87A] bg-[#F8F5F0]"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#e0d7c4] rounded-md px-4 py-2 focus:outline-none focus:border-[#C9B87A] bg-[#F8F5F0]"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-[#e0d7c4] rounded-md px-4 py-2 focus:outline-none focus:border-[#C9B87A] bg-[#F8F5F0]"
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border border-[#e0d7c4] rounded-md px-4 py-2 text-[#2C2C2C] bg-[#F8F5F0] focus:outline-none focus:border-[#C9B87A]"
          >
            <option value="">Preferred Travel Destination</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className="text-sm text-red-500">{errors.destination}</p>
          )}
        </div>

        <div>
          <input
            name="dates"
            placeholder="Travel Dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full border border-[#e0d7c4] rounded-md px-4 py-2 focus:outline-none focus:border-[#C9B87A] bg-[#F8F5F0]"
          />
          {errors.dates && <p className="text-sm text-red-500">{errors.dates}</p>}
        </div>

        <div>
          <textarea
            name="notes"
            placeholder="Additional Notes / Preferences"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full border border-[#e0d7c4] rounded-md px-4 py-2 focus:outline-none focus:border-[#C9B87A] bg-[#F8F5F0]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#C9B87A] text-white py-2 rounded-md hover:bg-[#bda865] transition-colors duration-300 font-semibold tracking-wide"
        >
          Start Your Journey
        </button>

        {status && (
          <p className="text-center text-sm text-green-600 mt-2">{status}</p>
        )}
      </form>
    </section>
  );
}
