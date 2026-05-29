import dotenv from "dotenv";
import Cars from "../models/cars.js";

dotenv.config();


async function generateReason(car, userInput) {
  const reasons = [];

  if (car.price <= userInput.budget) {
    reasons.push("fits your budget");
  }

  if (car.fuel_type === userInput.fuel_type) {
    reasons.push("matches your fuel preference");
  }

  if (car.transmission === userInput.transmission) {
    reasons.push("has preferred transmission");
  }

  if (car.sunroof) {
    reasons.push("includes sunroof for comfort");
  }

  if (car.airbags >= 4) {
    reasons.push("good safety rating");
  }

  if (reasons.length === 0) {
    return `${car.maker} ${car.model} is a balanced option with overall good specs.`;
  }

  return `${car.maker} ${car.model} ${reasons.join(", ")}.`;
}

export const getRecommendations = async (req, res) => {
  try {
    const {
      budget,
      fuel_type,
      transmission,
      priority,
      features = [],
    } = req.body;

    let query = {};

    if (budget) query.price = { $lte: budget };
    if (fuel_type && fuel_type !== "Any") query.fuel_type = fuel_type;
    if (transmission && transmission !== "Any") query.transmission = transmission;

    const cars = await Cars.find(query);

    const scoredCars = await Promise.all(
      cars.map(async (car) => {
        let score = 0;

      
        score += (car.airbags || 0) * 2;
        score += (car.features?.length || 0) * 0.5;
        score += (car.engine?.cc || 0) / 1000;
        if (car.sunroof) score += 1;

        const matchCount = features.filter((f) =>
          car.features.includes(f)
        ).length;

        score += matchCount * 2;

        const reason = await generateReason(car, req.body);

        return {
          ...car._doc,
          score,
          reason,
        };
      })
    );

    scoredCars.sort((a, b) => b.score - a.score);

    res.json(scoredCars.slice(0, 3));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};