const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  const allData = data.results;
  allData.map((dat) => {
    console.log(dat);
  });
  //   console.log("it worked!", data.results);
});

myReq.addEventListener("error", () => {
  console.log("it didn't work!");
});
//Method to get data from an API
myReq.open("GET", "https://swapi.dev/api/planets/");
myReq.send();
console.log(myReq.responseText);
