import {
  isLetter,
  isWhitespace,
  isNumber,
  isParanthesis,
  isQuote,
} from "./identify.js";

interface Token {
  type: string;
  value: string;
}

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParanthesis(character)) {
      tokens.push({
        type: "Paranthesis",
        value: character,
      });
    }
    cursor++;
  }
  return tokens;
};
