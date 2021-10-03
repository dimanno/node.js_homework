const path = require("path");
const sort = require('./sortUsers');

const pathBoys = path.join(__dirname, 'Boys');
const pathGirls = path.join(__dirname, 'Girls');

sort.sortUsersByGender('male', pathBoys, pathGirls);
sort.sortUsersByGender('female', pathGirls, pathBoys);

