import axios from "axios";
const api_key = "put here your api key";
export async function fecthWeather(city, setError) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  try {
    const response = await axios.get(url);
    setError("");
    return response.data;
  } catch (error) {
    setError("City no found!");
    return error;
  }
}
