const SVG = require("../lib/svg");

const { Square } = require("../lib/shapes");
const { describe } = require("yargs");

test("should render a 300x200 svg element", () => {
  const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
  const svg = new SVG();
  const actualSVG = svg.render();
  expect(actualSVG).toEqual(expectedSVG);
});

describe("SVG", () => {
  test("should append text element", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">A</text></svg>`;
    const svg = new SVG();
    svg.setText("A", "orange");
    expect(svg.render()).toEqual(expectedSVG);
  });

  test("should set text message and color", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`;
    const svg = new SVG();
    svg.setText("SVG", "blue");
    expect(svg.render()).toEqual(expectedSVG);
  });

  test("should throw error if text exceeds 3 characters", () => {
    const expectedError = new Error("Text must not exceed 3 characters");
    const svg = new SVG();
    const actualResult = () => svg.setText("Hello", "yellow");
    expect(actualResult).toThrow(expectedError);
  });

  test("should should include a shape", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`;
    const svg = new SVG();
    svg.setText("SVG", "blue");
    const square = new Square();
    square.setColor("purple");
    svg.setShape(square);
    const actualResult = svg.render();
    expect(actualResult).toEqual(expectedSVG);
  });
});
