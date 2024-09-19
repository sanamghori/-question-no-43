

/*Question no 43
Unchanged Magicians: Start with your work from Exercise 40. Call the function 
make_great() with a copy of the array of magicians’ names. Because the original 
array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name.*/
function show_magicians(magician_names: string[]) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }}
function make_great(magician_names: string[]) 
{
    let modifiedArray:string[] = [];
    for (let i = 0; i < magician_names.length; i++)
         {
        modifiedArray [i] = "The Great " + magician_names[i];
    }
    return modifiedArray;}
const originalMagiciansArray = ["Harry Houdini", "David Copperfield", 
    "Penn Jillette", "Harry Potter"];
console.log("Original Magicians:");
show_magicians(originalMagiciansArray);
const modifiedMagiciansArray = make_great(originalMagiciansArray);
console.log("\nModified Magicians:");
show_magicians(modifiedMagiciansArray);
console.log("\nOriginal Magicians (unchanged):");
show_magicians(originalMagiciansArray);
 












/*function show_magician(magician_names:string[]) {
    for (let i = 0; i < magician_names.length; i++) {
         console.log(magician_names[i]);
    }}
    function make_greats(magician_names:string[]) {
        const modifiedArray =[];
        for (let i = 0; i < magician_names.length; i++) {
            const element = magician_names[i];
            
        }
    }*/
