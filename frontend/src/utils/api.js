export const fetchData = async (input) => {
  try {
    const response = await fetch(
      `https://license-finder-gamma.vercel.app/api/${encodeURIComponent(input)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
