import axios from "axios";

const GetAllStarships = async () => {
    let response = await axios.get("http://swapi.dev/api/starships/");
    return response.data;
}

export default GetAllStarships;