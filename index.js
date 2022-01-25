// Write your solution here!

// assign initial value ["Milo", "Otis", "Garfield"] to cats
const cats = ["Milo", "Otis", "Garfield"];

// destructivelyAppendCat(name) append a cat to end of cats array
const newCat = "Bob";
function destructivelyAppendCat(newCat) {
    cats.push(newCat);
}

// destructivelyPrependCat(name) prepends a cat to front of cats array
function destructivelyPrependCat(newCat) {
   cats.unshift(newCat); 
}

// destructivelyRemoveLastCat() removes last cat from cats array
function destructivelyRemoveLastCat(newCat) {
    cats.pop(newCat);
}

// destructivelyRemoveFirstCat() removes first cat from cats array
function destructivelyRemoveFirstCat(newCat) {
    cats.shift(newCat);
}

/* appendCat(name) appends a cat to cats array and 
returns a new array, leaving cats array unchanged */
function appendCat(newCat) {
    let copyOfCats = [...cats, newCat];
    return copyOfCats;
}

/* prependCat(name) prepends a cat to cats array and 
returns a new array, leaving cats array unchanged */
function prependCat(newCat) {
    let copyOfCats = [newCat, ...cats];
    return copyOfCats;
}

/* removeLastCat() removes last cat in cats array and 
returns a new array, leaving cats array unchanged */
function removeLastCat() {
    let copyOfCats = cats.slice(0, -1);
    return copyOfCats;
}

/* removeFirstCat() removes first cat from cats array and 
returns a new array, leaving cats array unchanged */
function removeFirstCat() {
    let copyOfCats = cats.slice(1);
    return copyOfCats;
}