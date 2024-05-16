function courseCreation() {
  return new Promise((res) => {
    setTimeout(() => {
      res("created course p[1]");
    }, 2000);
  });
}
function chooseCourse(data) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`${data} for MERN p[2]`);
    }, 3000);
  });
}
function makePayment(data) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`${data} and made payment p[3]`);
    }, 2000);
  });
}

function courseStarted(data) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`${data} , and courseStarted p[4]`);
    }, 1000);
  });
}

courseCreation()
  .then((data) => {
    console.log(data);
    return chooseCourse(data);
  })
  .then((data2) => {
    console.log(data2);
    return makePayment(data2);
  })
  .then((finalData) => {
    console.log(finalData);
    return courseStarted(finalData);
  })
  .then((printall) => {
    console.log(printall);
  });
