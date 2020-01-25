const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundary) {
      console.log("DONE!");
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// moveX(btn, 100, 2000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 500, 1000);
//       });
//     });
//   });
// });

moveX(
  btn,
  100,
  1000,
  () => {
    // success
    moveX(
      btn,
      400,
      1000,
      () => {
        // success
        moveX(
          btn,
          700,
          1000,
          () => {
            console.log("Really, we still have screen left");
          },
          () => {
            // fail
            alert("Cannot move");
          }
        );
      },
      () => {
        // fail
        alert("Cannot move");
      }
    );
  },
  () => {
    // fail
    alert("Cannot move");
  }
);
