const singleRose = 8;
let quantityOfRose = 70;
let totalRose = singleRose * quantityOfRose; 

const singleLily = 10;
let quantityOfLily = 50;
let totalLily = singleLily * quantityOfLily;

const singleTulip = 2;
let quantityOfTulip = 120
let totalTulip = singleTulip * quantityOfTulip;

const total = totalRose + totalLily + totalTulip;

console.log("Rose - unit price: " + quantityOfRose + " , quantity: " + singleRose + " , value: " + totalRose);
console.log("Lily - unit price: " + quantityOfLily + " , quantity: " + singleLily + " , value: " + totalLily);
console.log("Tulip - unit price: " + quantityOfTulip + " , quantity: " + singleTulip + " , value: " + totalTulip);
console.log("Total: ", total)
