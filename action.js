

// document.getElementsById("scroll").onclick = function() {
//     var elements = document.getElementsByClassName('up-arrow');
  
//     if (elements.length > 0) {
//       var targetElement = elements[0];
//       targetElement.scrollIntoView({
//         behavior: 'smooth' 
//       });
//     }
//   }
  
// // document.getElementById("scroll").onclick = function(){
// //     console.log("hello");
// // }

const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });