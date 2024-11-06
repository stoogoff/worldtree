
export const diceNotationToJson = (notation) => {
  return notation.match(/([+-]?\d*d\d+((kh|kl|dl|dh)\d*|(min|max)\d*|exp)?|[+-]?\d+)/g).map(part => {
    if (part.includes('d')) {
      // This is a die, let's get sides, count, and modifiers
      const negative = part.startsWith('-');
      const [countSides, modifier] = part.replace('-', '').split(/(kh|kl|dl|dh|min|max|exp)/);
      const [count, sides] = countSides.split('d').map(Number);
      const result = {
        count: count || 1,
        sides,
        negative
      };

      if (modifier) {
        const value = part.match(/\d+$/);
        const modifierValue = value ? Number(value[0]) : 1;

        if (part.includes('kh')) result.keepHighest = modifierValue;
        else if (part.includes('kl')) result.keepLowest = modifierValue;
        else if (part.includes('dl')) result.dropLowest = modifierValue;
        else if (part.includes('dh')) result.dropHighest = modifierValue;
        else if (part.includes('min')) result.min = modifierValue;
        else if (part.includes('max')) result.max = modifierValue;
        else if (part.includes('exp')) result.exploding = true;
      }

      return result;
    } else {
      return { constant: Number(part) };
    }
  });
};