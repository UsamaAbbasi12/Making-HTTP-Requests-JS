const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  const allData = data.results;
  const filmUrl = data.results[0].films[0];
  console.log("This is Data from first Request!");
  console.log(allData);

  const secondReq = new XMLHttpRequest();
  secondReq.addEventListener("load", function () {
    console.log("This is Data from second Request!");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData.title);
  });
  secondReq.addEventListener("error", function (e) {
    console.log("Error: " + e);
  });
  secondReq.open("GET", filmUrl);
  secondReq.send();
});

myReq.addEventListener("error", () => {
  console.log("it didn't work!");
});
//Method to get data from an API
myReq.open("GET", "https://swapi.dev/api/planets/");
console.log("request sent");
myReq.send();
console.log(myReq.responseText);
