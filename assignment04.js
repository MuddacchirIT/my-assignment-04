               
               
               
               // 13 August 2025  Deadlin 15 August 2025
// -----------------------------------------------------------
// Assignment 04 started here
// Problem 01 here

//  function totalFine(fare){
//      if(fare <= 0 || typeof fare != "number"){
//         return "Invalid"} 

//     let surcharge = 0.2;
//     let extraServiceCharge = 30;
//     let fine = fare + (fare * surcharge) + extraServiceCharge;
//     return fine;
//     }

// const result = totalFine(200);
// console.log(result);

// -----------------------------------------------------------
// Problem 02 here

//  function onlyCharacter(str){ 
//     if(typeof str != "string"|| Array.isArray ==="str"||typeof str.includes === Boolean){
//         return "Invalid"
//      }

//     else{let upperStr = str.toUpperCase();
//         let noSpaceStr = upperStr.split(" ").join("");
//         return noSpaceStr;
//      }  
//  }
 
// const result = onlyCharacter("    h  e  llo   wor  ld");
// console.log(result);

// -----------------------------------------------------------
// Problem 03 here

// let team1 = {name:"Brazil",foul:5,cardY:1,cardR:0};
// let team2 = {name:"Argentina",foul:7,cardY:0,cardR:0};

//  function bestTeam(player1, player2){
//     if(Array.isArray(player1)||Array.isArray(player2)|| typeof player1 ===   "string" || typeof player2 === "string"){
//         return "Invalid"
//     }
//     let players1Sum = 0;
//     for(let key in player1){
//         if(typeof player1[key] === "number"){
//             players1Sum += player1[key]
//         }
//     }
//     let players2Sum = 0;
//       for(let key in player2){
//         if(typeof player2[key] === "number"){
//             players2Sum += player2[key]
//         }
//     }
//     if(players1Sum < players2Sum){
//         return `${player1.name}`

//     }
//     else if(players1Sum > players2Sum){
//         return `${player2.name}`
//     }
//     else{
//          return "Tie"}
//     }

//  const result = bestTeam(team1, team2);
//  console.log(result);
 
// -----------------------------------------------------------
// Problem 04 here
 
let a = [1, 2, 3];
let b = [1, 2, 3];
 function isSame(arr1,arr2){ 
    if(Array.isArray(arr1) !== true || Array.isArray(arr2) !== true){
       return "Invalid";
    } 
   else if(Array.isArray(arr1) || Array.isArray(arr2) || typeof arr1.includes === "number" || typeof arr2.includes === "number"){
      for(let i = 0; i <= arr2.length - arr1.length; i++){
         let same = true;
         for (let k = 0; k < arr1.length; k++){
            if(arr1[k] !== arr2[i+k]){
               same = false;
               break;
            }
         }
         if (same) return true;
      }
      return false;
   }
   else{
      return false;
   }
 }

 const result = isSame(a, b);
 console.log(result);
 


// -----------------------------------------------------------
// Problem 05 here
 
// const input = [99];

// function resultReport(marks)
//  { 
//         if(Array.isArray(marks) === false){
//             return "Invalid"
//         }
//         if(marks.length === 0){
//         return {finalScore: 0, pass: 0, fail: 0};
//         }
    
//     let sum = 0;
//     for(const mark of marks){
//         sum = sum + mark;
//         }
//         const count = marks.length;
//         const avg = sum / count;
//         const score = avg.toFixed(2);
//         const finalScore = parseFloat(score);
    
//     let pass = 0;
//     for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 40) {
//       pass++;
//         }
//     }
  
//     let fail = 0;
//     for (let i = 0; i < marks.length; i++) {
//     if (marks[i] <= 40) {
//     fail++;
//         }
//     }
//     return {finalScore, pass, fail};
// }
      
// const result = resultReport(input);
// console.log(result);


// ------------------------------END-----------------------------
