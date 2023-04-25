import axios from "axios";
const api_key = "d1caa8e3b83dca8cce3b685d86d720f3";
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
