function generateRandomIntegerOfSingleDigit() {
  const slots = new Array(10).fill(0);
  let filledSlotNumberTo10 = 0;

  while (filledSlotNumberTo10 < 9) {
    const randomInt = Math.floor(10 * Math.random());

    if (slots[randomInt] < 10) {
      slots[randomInt] = slots[randomInt] + 1;

      if (slots[randomInt] === 10) {
        filledSlotNumberTo10++;
      }
    }
  }

  return slots.findIndex((count) => count < 10);
}

export { generateRandomIntegerOfSingleDigit };
