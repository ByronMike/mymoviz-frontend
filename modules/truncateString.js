function truncateString(str) {
    let num = 250;
     if (str.length > num) {
       return str.slice(0, num) + "...";
     } else {
       return str;
     }
   }

   module.exports = { truncateString };