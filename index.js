// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  return cats.push("Ralph")
}

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
 }

 function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
 }

 function removeLastCat() {
    return cats.slice(0,cats.length - 1);
 }

 function removeFirstCat() {
    return cats.slice(1);
 }