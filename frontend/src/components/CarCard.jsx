export default function CarCard({ car }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-bold">
        {car.maker} {car.model}
      </h3>

      <p>Price: ₹{car.price}</p>
      <p>Fuel: {car.fuel_type}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Airbags: {car.airbags}</p>

      <div className="mt-2">
        <p className="font-semibold">Features:</p>
        <div className="flex flex-wrap gap-1">
          {car.features?.map((f, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 font-bold text-green-600">
        Score: {car.score.toFixed(2)}
      </div>

       <div className="mt-3 font-bold text-blue-600">
        Reason: {car.reason}
      </div>

      
    </div>
  );
}