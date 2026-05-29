import { useState } from "react";
import Form from "./components/Form";
import CarCard from "./components/CarCard";
import { getRecommendations } from "./api/carApi";

export default function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);

    try {
      const result = await getRecommendations(data);
      setCars(result);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-center">
          AI Car Matchmaker
        </h1>

        <Form onSubmit={handleSubmit} />

        {loading && (
          <p className="text-center">Loading recommendations...</p>
        )}

        <div className="grid md:grid-cols-3 gap-4">
          {cars.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}