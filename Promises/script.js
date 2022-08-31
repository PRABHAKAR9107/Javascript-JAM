console.log("start");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("hello");
    resolve(1);
  }, 1000);
  // resolve(1);//Note that promises are guaranteed to be asynchronous.
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("hello");
  // }, 2000);
  resolve("hello"); //Note that promises are guaranteed to be asynchronous.
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello3");
  }, 2000);
  // resolve("hello3"); //Note that promises are guaranteed to be asynchronous.
});

const p4 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("hello");
  // }, 2000);
  reject("hello4"); //Note that promises are guaranteed to be asynchronous.
});

p1
  .then(
    (data) => {
      console.log("Data from p1", data);
      return p2;
    },
    (error) => {
      console.log("error");
    }
  )
  .then((data) => {
    console.log("Data from p2", data);
  }),
  console.log("End");

p3.then(
  (data) => {
    console.log("data from p3", data);
  },
  (error) => {
    console.log("error3", error);
  }
);

p4.then((data) => {
  console.log("data from p4", data);
}).catch((error) => {
  console.log("error4", error);
});

Promise.all([p1, p2]).then((data) => {
  console.log(data);
});

Promise.any([p3, p4]).then((data) => {
  console.log("data from any promise", data);
});

const p5 = Promise.resolve(5);
const p6 = Promise.resolve(5);

p5.then((data) => {
  console.log("data from p5", data);
}).catch((error) => {
  console.log("error");
});

p6.then((data) => {
  console.log("data from p6", data);
}).catch((error) => {
  console.log("error");
});

// const birthday = (isprabhuBirthday) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isprabhuBirthday) {
//         resolve(1);
//       } else {
//         rejected();
//       }
//     }, 2000);
//   });
// };

// birthday(false).then((result) => {
//   alert(`i have ${result} cake`);
// });
