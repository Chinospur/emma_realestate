import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '5ab668d766msh94521e104393228p1122e6jsn07a42a38dd94'
    }
  });
  return data;
}






















// import axios from "axios";

// export const baseUrl = "https://bayut.p.rapidapi.com"

// // headers: {
// //   'X-RapidAPI-Host'; 'realty-in-ca1.p.rapidapi.com',
// //   'X-RapidAPI-Key'; '5ab668d766msh94521e104393228p1122e6jsn07a42a38dd94'
// // }

// headers: {
//     'X-RapidAPI-Host'; 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key'; '5ab668d766msh94521e104393228p1122e6jsn07a42a38dd94'
//   }

// export const fetchAPI = async (url) => {
// const { data } = await axios.get((url), {
//     headers: {
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//         'X-RapidAPI-Key': '5ab668d766msh94521e104393228p1122e6jsn07a42a38dd94'
//       }
// })
// return data;

// }