
 const batter ={
    opner : "Rohit",
    opner1 : "Jaiswal",
    middleOrder: "Virat",
    finisher: "Hardik",
 }

 const bowler = {
    fastBowler: "Bumrah",
    spinner: "Ashwin",
    allRounder: "krunal"
 }

 function printBatter(anyBatter) {
    if (!anyBatter.opner1) {
       return `operner1 is ${anyBatter.opner1} and middle order batter is ${anyBatter.middleOrder}  Batter` ;
         }

         return `Opener is ${anyBatter.opner}`;
 }

 console.log(printBatter(batter));