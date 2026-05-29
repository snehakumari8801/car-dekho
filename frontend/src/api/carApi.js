export const getRecommendations = async (payload) => {
  const res = await fetch("https://car-dekho-bac.onrender.com/api/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return res.json();
};