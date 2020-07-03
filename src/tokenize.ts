import {
  isLetter,
  isWhitespace,
  isNumber,
  isParanthesis,
  //   isQuote,
} from "./identify";

interface Token {
  type: string;
  value: string;
}

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isParanthesis(character)) {
      tokens.push({
        type: "Paranthesis",
        value: character,
      });
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      tokens.push({
        type: "Number",
        value: character,
      });
      cursor++;
      continue;
    }

    if (isLetter(character)) {
      tokens.push({
        type: "Letter",
        value: character,
      });
      cursor++;
      continue;
    }

    throw new Error(`Unrecognized character ${character}`);
  }
  return tokens;
}

export default tokenize;
