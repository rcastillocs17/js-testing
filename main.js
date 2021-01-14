// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

function printKata(kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement("details");
  main.append(detailsElement);
  //
  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
}

//Kata 1 .filter()
const isActive = users.filter((user) => user.isActive);
printKata(1, isActive);

//Kata 2 .map()
const email = users.map((users) => users.email);
printKata(2, email);

//Kata 3 .some() method
const companyOv = users.some((users) => users.company === "OVATION");
printKata(3, companyOv);

//Kata 4 .find()
const ageOver28 = users.find((users) => users.age <= 28);
printKata(4, ageOver28);

//Kata 5 .filter() and .find()
const activeOver28 = users.find(
  (users) => users.age <= 28 && users.isActive === true
);
printKata(5, ageOver28);

//Kata 6 .filter() and .map()

// const zencoBal = users.map(function (users) {
//   return users.company === "ZENCO";
// }).map(function(users) {
//   return `
//   <li>
//     ${users.name} has a balance of ${users.balance}
//   </li>`
// }).reduce(function (text, users) {
//   return text + users;
// }

printKata(6, zencoBal);

//Kata 7 .filter() .includes() and .map()
