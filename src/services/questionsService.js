import axios from "axios";

const getQuestions = async () => {
    const response = await axios.get('https://quizapi.io/api/v1/questions?apiKey=-----------------&limit=10')
    return response.data;
}

export default { getQuestions }
