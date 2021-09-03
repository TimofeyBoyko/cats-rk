// fetch data from third party API
// res.json() returns an array where the first element is the current cat
// function return current cat
export const fetchCat = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await res.json();

  return data[0];
};
