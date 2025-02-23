export const fetchData = async (input) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/${encodeURIComponent(input)}`
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
