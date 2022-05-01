function compareCharacterDocument() {
  let characters = "!estb si xpreteolga";
  let document = "algoexpert is best!";

  let arrOfCharactes = characters.split("");
  let arrOfDocuments = document.split("");
  if (arrOfCharactes.sort().toString() === arrOfDocuments.sort().toString()) {
    return true;
  } else {
    return false;
  }
}
const truthyOrFalsy = compareCharacterDocument();
console.log(truthyOrFalsy);
