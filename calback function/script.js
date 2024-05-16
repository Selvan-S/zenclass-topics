console.log("working");
function courseSelection(cb) {
  console.log("selection of course done {p1}");
  cb();
}
function studentEnrollment(cb) {
  setTimeout(() => {
    console.log("studeng enrolled successfully {p2}");
    cb();
  }, 2000);
}
function payment(cb) {
  setTimeout(() => {
    console.log("payment completed succesfullly {p3}");
    cb();
  }, 1000);
}
function accessToCourse() {
  console.log("course access granted {p4}");
}

function guviEnrollment() {
  courseSelection(() => {
    studentEnrollment(() => {
      payment(() => {
        accessToCourse();
      });
    });
  });
}
guviEnrollment();
