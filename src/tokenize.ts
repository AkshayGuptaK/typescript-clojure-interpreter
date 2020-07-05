import {
  isLetter,
  isWhitespace,
  isNumber,
  isParanthesis,
  isQuote,
} from "./identify";

interface Token {
  type: string;
  value: string | number;
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
      let number = character;
      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({
        type: "Number",
        value: parseInt(number),
      });
      continue;
    }

    if (isLetter(character)) {
      let symbol = character;
      while (isLetter(input[++cursor] || "")) {
        symbol += input[cursor];
      }

      tokens.push({
        type: "Name",
        value: symbol,
      });
      continue;
    }

    if (isQuote(character)) {
      let string = "";

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({
        type: "String",
        value: string,
      });
      cursor++;
      continue;
    }

    throw new Error(`Unrecognized character ${character}`);
  }
  return tokens;
}

export default tokenize;

// for pure interpreter, can just put items in array instead of adding metadata in token format
