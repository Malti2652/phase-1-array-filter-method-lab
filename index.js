// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, Bobby, Sammy, Sally, Annette, Sarah) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

module.exports = { findMatching }



function fuzzyMatch(drivers, Bobby, Sammy, Sally) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}

module.exports = { fuzzyMatch }

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

module.exports = { matchName }

