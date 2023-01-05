import axios from "axios"

export const getCountries = async () => {
    await axios.get("https://api.covid19api.com/summary");
};