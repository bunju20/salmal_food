const fetchMyData = () => {
    return fetch('https://api.example.com/data')
      .then(response => response.json());
  }
  
  export default fetchMyData;