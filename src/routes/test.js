const { log } = require("console");

const arrObj = [
  { id: 1 },
  { id: 2 },
];

const res = arrObj.map((item) => item.id);
 log(res);