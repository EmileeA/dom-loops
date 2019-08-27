// loop through the raindow and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const ew = ['black', 'grey', 'red'];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const printRaindow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = colorArr[i]
        printToDom(color, 'rainbow')
    }
}

printRainbow(colors)
printRainbow(ew)

const instructors = [
    {first: "Zoee", last: "Amese"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

const printNames = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i]; // {first: "Zoee", last: "Amese"}
        const element = `<p>${person.first} ${person.last}</p>`
        printToDom(element, 'people')
        }
    }

printNames(instructions)
  
 
