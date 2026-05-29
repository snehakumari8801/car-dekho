import { useState } from "react";

export default function Form({ onSubmit }) {
  const [form, setForm] = useState({
    budget: "",
    fuel_type: "Any",
    transmission: "Any",
    priority: "safety",
    features: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      budget: Number(form.budget),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold">Find Your Perfect Car</h2>

      <input
        name="budget"
        placeholder="Budget (₹)"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <select
        name="fuel_type"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      >
        <option>Any</option>
        <option>Petrol</option>
        <option>Diesel</option>
        <option>Electric</option>
        <option>CNG</option>
      </select>

      <select
        name="transmission"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      >
        <option>Any</option>
        <option>Manual</option>
        <option>Automatic</option>
      </select>

      <select
        name="priority"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      >
        <option value="safety">Safety</option>
        <option value="comfort">Comfort</option>
        <option value="performance">Performance</option>
      </select>

      <button className="w-full bg-black text-white p-2 rounded">
        Get Recommendations
      </button>
    </form>
  );
}