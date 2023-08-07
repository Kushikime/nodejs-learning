const characters = [
  {
    name: 'Frodo',
    hasRing: false,
  },
  {
    name: 'Bilbo',
    hasRing: false,
  },
];

const hasRing = (chars, owner) => {
  return chars.map((char) => {
    if (char.name === owner) {
      char.hasRing = true;
    } else {
      char.hasRing = false;
    }
  });
};

module.exports = { hasRing, characters };
