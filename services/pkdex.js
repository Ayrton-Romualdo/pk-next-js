import axios from 'axios';

const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`
});

// const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}`;

// export const getApiKey = async () => {
//     return apiKey;
// }

export const getList = async () => {
    try {
        const response = await api.get("/pokemon?limit=151&offset=0");
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export const getPokemon = async (num) => {

    if(num){
        try {
            const response = await api.get("/pokemon/" + num);
            console.log("axios response", response.data);
            return response.data;
        } catch (error) {
            
        }
    } else {
        return null;
    }

}



