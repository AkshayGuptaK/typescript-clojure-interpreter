import tokenize from "../tokenize";

describe("tokenize", () => {
  it("should recognize opening paranthesis", () => {
    const result = tokenize("(");
    expect(result).toEqual([
      {
        type: "Paranthesis",
        value: "(",
      },
    ]);
  });

  it("should recognize closing paranthesis", () => {
    const result = tokenize(")");
    expect(result).toEqual([
      {
        type: "Paranthesis",
        value: ")",
      },
    ]);
  });

  it("should ignore whitespace", () => {
    const result = tokenize(" ( ) ");
    expect(result).toEqual([
      {
        type: "Paranthesis",
        value: "(",
      },
      {
        type: "Paranthesis",
        value: ")",
      },
    ]);
  });

  it("should recognize numbers", () => {
    const result = tokenize("22");
    expect(result).toEqual([
      {
        type: "Number",
        value: "22",
      },
    ]);
  });

  it("should recognize words", () => {
    const result = tokenize("abc");
    expect(result).toEqual([
      {
        type: "Word",
        value: "abc",
      },
    ]);
  });
});
