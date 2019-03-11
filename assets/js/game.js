// character objects
const ip = {
    name: `Ip-Man`,
    attack: 450,
    counter: 900,
    health: 4000;
}
const punch = {
    name: `One-Punch-Man`,
    attack: 500,
    counter: 999,
    health: 5000;
}
const goku = {
    name: `Goku`,
    attack: 150,
    counter: 400,
    health: 9990;
}
const chuck = {
    name: `Chuck-Norris`,
    attack: 400,
    counter: 800,
    health: 4500;
}
// variables and arrays


// // psuedocoded steps to take
// click event for selected Character(active only while player section is empty)
//     character info replaces player placeholder text
//     selected character display: in selection row becomes none
// click event for defender character(active only while defender section is empty)
//     character chosen replaces placeholder text
//     chosen character display: becomes none
// fight button function works only if both slots are occupied, to return an error if either slot is empty
//     function that runs will subtract player attack from defender health
//         then increment up,
//         if defender health is above 0, subtract counter from player health
//         then visually update both health values, and display damage message under fight button
//         function repeats until one health value hits 0 or below,
//             if defender health hits 0 or below display: none, and display victory message
//             else player health hits 0 or below, 


