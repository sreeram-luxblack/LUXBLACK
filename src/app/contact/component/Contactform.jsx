// "use client";

// import { useState } from "react";

// export default function Contactform() {
//   const [formData, setFormData] = useState({
//     name: "",
//     city: "",
//     email: "",
//     phone: "",
//     whatsapp: "",
//     destination: "",
//     dates: "",
//     people: "",
//     vacationType: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required.";
//     if (!formData.city) newErrors.city = "City is required.";
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Valid email is required.";
//     if (!formData.phone || !/^\d{10,}$/.test(formData.phone))
//       newErrors.phone = "Valid phone number required.";
//     if (!formData.destination)
//       newErrors.destination = "Destination is required.";
//     if (!formData.dates) newErrors.dates = "Date of travel is required.";
//     if (!formData.people) newErrors.people = "Please enter number of people.";
//     if (!formData.vacationType)
//       newErrors.vacationType = "Vacation type is required.";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});
//     setIsSubmitting(true);
//     setStatus("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setStatus("Your enquiry was sent successfully!");
//         setFormData({
//           name: "",
//           city: "",
//           email: "",
//           phone: "",
//           whatsapp: "",
//           destination: "",
//           dates: "",
//           people: "",
//           vacationType: "",
//         });
//       } else {
//         setStatus("Failed to send enquiry. Please try again later.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setStatus("Server error. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-[#F8F5F0] min-h-fit py-16 px-4 sm:px-8 flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-xl shadow-lg max-w-xl w-full p-8 space-y-5"
//       >
//         <h2 className="text-center text-2xl sm:text-3xl font-playfair text-[#2C2C2C] mb-4">
//           Enquire Now
//         </h2>

//         <input
//           name="name"
//           placeholder="Name *"
//           value={formData.name}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.name && <p className="error">{errors.name}</p>}

//         <input
//           name="city"
//           placeholder="City of Residence *"
//           value={formData.city}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.city && <p className="error">{errors.city}</p>}

//         <input
//           name="email"
//           placeholder="Email *"
//           value={formData.email}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         <input
//           name="phone"
//           placeholder="Phone Number *"
//           value={formData.phone}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.phone && <p className="error">{errors.phone}</p>}

//         <input
//           name="whatsapp"
//           placeholder="WhatsApp"
//           value={formData.whatsapp}
//           onChange={handleChange}
//           className="input"
//         />

//         <input
//           name="destination"
//           placeholder="Travel Destination *"
//           value={formData.destination}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.destination && <p className="error">{errors.destination}</p>}

//         <input
//           name="dates"
//           placeholder="Date of Travel *"
//           value={formData.dates}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.dates && <p className="error">{errors.dates}</p>}

//         <input
//           name="people"
//           placeholder="No. of People *"
//           value={formData.people}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.people && <p className="error">{errors.people}</p>}

//         <input
//           name="vacationType"
//           placeholder="Vacation Type *"
//           value={formData.vacationType}
//           onChange={handleChange}
//           className="input"
//         />
//         {errors.vacationType && <p className="error">{errors.vacationType}</p>}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-[#C9B87A] text-white py-2 rounded-md hover:bg-[#bda865] transition-colors duration-300 font-semibold tracking-wide"
//         >
//           {isSubmitting ? "Sending..." : "Submit Enquiry"}
//         </button>

//         {status && (
//           <p className="text-center text-sm text-green-600 mt-2">{status}</p>
//         )}
//       </form>

//       <style jsx>{`
//         .input {
//           width: 100%;
//           border: 1px solid #e0d7c4;
//           border-radius: 0.375rem;
//           padding: 0.5rem 1rem;
//           background-color: #f8f5f0;
//           outline: none;
//         }
//         .input:focus {
//           border-color: #c9b87a;
//         }
//         .error {
//           color: #dc2626;
//           font-size: 0.875rem;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

export default function Contactform() {
  const [formData, setFormData] = useState({
    destination: "",
    fromDate: "",
    toDate: "",
    flexibleDates: "No",
    name: "",
    email: "",
    phone: "",
    contactMode: "Call",
    bestTimeToReach: "",
    adults: "",
    children: "",
    roomType: "One Room / Couple",
    departureCity: "",
    tripDuration: "",
    budget: "",
    mealPlan: "",
    flightsBooked: "",
    travelStyle: "",
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
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone || !/^\d{10,}$/.test(formData.phone))
      newErrors.phone = "Valid phone number required.";
    if (!formData.destination)
      newErrors.destination = "Destination is required.";
    if (!formData.fromDate || !formData.toDate)
      newErrors.dates = "Both travel dates are required.";
    if (!formData.adults) newErrors.adults = "Number of adults is required.";
    if (!formData.departureCity)
      newErrors.departureCity = "Departure city required.";
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
          destination: "",
          fromDate: "",
          toDate: "",
          flexibleDates: "No",
          name: "",
          email: "",
          phone: "",
          contactMode: "Call",
          bestTimeToReach: "",
          adults: "1",
          children: "0",
          roomType: "One Room / Couple",
          departureCity: "",
          tripDuration: "",
          budget: "",
          mealPlan: "",
          flightsBooked: "",
          travelStyle: "",
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
    <section className="bg-[#F8F5F0] py-16 px-4 sm:px-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-4 sm:p-8 space-y-5"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-playfair text-[#2C2C2C] mb-8">
          Begin Curating My Journey
        </h2>

        {/* Destination */}
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="input"
        >
          <option value="">Preferred Destination *</option>
          <option>Maldives</option>
          <option>Seychelles</option>
          <option>Mauritius</option>
          <option>Europe (Italy, France, Greece...)</option>
          <option>Bali / Thailand</option>
          <option>Other</option>
        </select>
        {errors.destination && <p className="error">{errors.destination}</p>}

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="input"
          />
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            className="input"
          />
        </div>
        {errors.dates && <p className="error">{errors.dates}</p>}

        <select
          name="flexibleDates"
          value={formData.flexibleDates}
          onChange={handleChange}
          className="input"
        >
          <option value="No">Flexible Dates?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Contact Info */}
        <input
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        {errors.name && <p className="error">{errors.name}</p>}

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

        <select
          name="contactMode"
          value={formData.contactMode}
          onChange={handleChange}
          className="input"
        >
          <option value="Call">Preferred Contact Mode: Call</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Email">Email</option>
        </select>

        <input
          name="bestTimeToReach"
          placeholder="Best Time to Reach You"
          value={formData.bestTimeToReach}
          onChange={handleChange}
          className="input"
        />

        {/* People */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="adults"
            placeholder="Adults *"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className="input"
          />
        </div>
        {errors.adults && <p className="error">{errors.adults}</p>}

        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="input"
        >
          <option>One Room / Couple</option>
          <option>Multiple Rooms / Group</option>
          <option>Family Suite / Villa</option>
        </select>

        <input
          name="departureCity"
          placeholder="Departure City *"
          value={formData.departureCity}
          onChange={handleChange}
          className="input"
        />
        {errors.departureCity && (
          <p className="error">{errors.departureCity}</p>
        )}

        {/* Duration */}
        <select
          name="tripDuration"
          value={formData.tripDuration}
          onChange={handleChange}
          className="input"
        >
          <option value="">Trip Duration</option>
          <option>3–5 Nights</option>
          <option>6–8 Nights</option>
          <option>9+ Nights</option>
          <option>I’m not sure yet</option>
        </select>

        {/* Budget */}
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="input"
        >
          <option value="">Estimated Budget (per person)</option>
          <option>₹75,000 – ₹1,25,000</option>
          <option>₹1,25,000 – ₹2,00,000</option>
          <option>₹2,00,000 – ₹4,00,000</option>
          <option>₹4,00,000+</option>
          <option>Open to suggestions</option>
        </select>

        {/* Meal Plan */}
        <select
          name="mealPlan"
          value={formData.mealPlan}
          onChange={handleChange}
          className="input"
        >
          <option value="">Preferred Meal Plan</option>
          <option>Breakfast Only (CP)</option>
          <option>Half Board (Breakfast + Dinner)</option>
          <option>Full Board (All 3 Meals)</option>
          <option>All Inclusive (Meals + Drinks)</option>
          <option>Open to Recommendations</option>
        </select>

        {/* Flights */}
        <select
          name="flightsBooked"
          value={formData.flightsBooked}
          onChange={handleChange}
          className="input"
        >
          <option value="">Flights Booked?</option>
          <option>Yes – I’ve booked my flights</option>
          <option>No – I need help with flights too</option>
          <option>Not sure yet</option>
        </select>

        {/* Travel Style */}
        <textarea
          name="travelStyle"
          placeholder="Tell us about your travel style, wishlist or special occasion..."
          value={formData.travelStyle}
          onChange={handleChange}
          rows="4"
          className="input"
        />

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
