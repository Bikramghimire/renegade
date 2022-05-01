function compareCharacterDocument() {
  let characters = "bikram";
  let document = "bikram";

  let arrOfCharactes = characters.split("");
  let arrOfDocument = document.split("");

  let countCharacters = 0;
  let countDocuments = 0;

  for (let i = 0; i < arrOfCharactes.length; i++) {
    for (let j = 0; j < arrOfDocument.length; j++) {
      if (arrOfCharactes[i] === arrOfDocument[j]) {
        arrOfCharactes.map((item) => {
          if (item === arrOfCharactes[i]) {
            countCharacters += 1;
          }
        });
        arrOfDocument.map((item) => {
          if (item === arrOfDocument[j]) {
            countDocuments += 1;
          }
        });
        if (countCharacters < countDocuments) {
          return false;
        }
        countCharacters = 0;
        countDocuments = 0;
      }
      if (arrOfCharactes[i] != arrOfDocument[j]) {
        return false;
      }
    }
    return true;
  }
}
const truthyOrFalsy = compareCharacterDocument();
console.log(truthyOrFalsy);
