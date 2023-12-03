import useSWR from "swr";
import * as api from '../services/api';
import * as pkdex from '../services/pkdex';

export const useFetch = () => {
    return {
        GetApiKey: () => useSWR("apiKey", async () => {
            const response = await api.getApiKey();
            console.log("SWR api key", response);
            return response;
        }),
        GetServicos: (uid) => useSWR("allServicos", async () => {
            const response = await api.getServicos(uid);
            console.log("SWR allServicos response", response);
            return response;
        }),

        GetPkmnList: () => useSWR("pkmnList", async () => {
            const response = await pkdex.getList();
            console.log("SWR pkmn list response", response);

            return response;
        }),

        GetPkmn: (num) => useSWR(`getPkmn${num}`, async () => {
            if(num && num > 0 && num < 152){
                console.log(num)
                const response = await pkdex.getPokemon(num);
                console.log("SWR pkmn response", response);
    
                return response;
            } else {
                return null;
            }
        }),
    } 
};
