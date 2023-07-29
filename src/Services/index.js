import axios from 'axios';

const apiendpoint = 'https://restcountries.com/v2';
export function getAllCountry(){
    //call API and get the result
    return axios.get(`${apiendpoint}/all`);
}

export function getCountryDetail(countryCode){
    return axios.get(`${apiendpoint}/alpha/${countryCode}`)
}