import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`
});

const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}`;

export const getApiKey = async () => {
    return apiKey;
}

export const getServicos = async (uid) => {
    try {
        let config = {
            params: {
                usuario_id: `eq.${uid}`
            },
            headers: {
                apiKey: apiKey
            }
        }
        const response = await api.get("/servico", config);
        console.log("axios response", response.data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

