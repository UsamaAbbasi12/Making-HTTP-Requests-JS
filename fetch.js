fetch("https://swapi.dev/api/planets1/")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Something went wrong! ${res.status}`);
    }
    res.json().then((data) => {
      const allData = data.results;

      console.log(allData[0].name);
    });
  })
  .catch((err) => {
    console.log(err);
  });
