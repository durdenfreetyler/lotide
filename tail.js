// const words = ["Yo Yo", "Lighthouse", "Labs"];


 const tail = function  (words) {
   words.slice(1);
   return words.slice(1);
} // no need to capture the return value since we are not checking it

// 
// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))
// tail(["Yo Yo", "Lighthouse", "Labs"]);

module.exports = tail;
