const getNameTag = function(fname, lname, gender) {
  if (gender === "M") {
    // INTERPOLATION with TEMPLATE LITERALS
    return `Mr. ${fname} lname`;
  }
  return `Mrs. fname lname`;
};

const myNameTag = getNameTag("Manav", "Misra", "M");
console.log(myNameTag);
