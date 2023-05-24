import { api } from ".";

export const getMovies = (search, page) => api.get(`?apikey=b5394a70&s=${search}&page=${page}`) 