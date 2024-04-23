const { describe } = require("yargs");
const { Square, Triangle, Circle } = require("../lib/shapes");
const { default: test } = require("node:test");

describe("Circle", () => {
  test("should render svg for a red circle element", () => {
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red"/>`;
    const circle = new Circle();
    circle.setColor("red");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedSVG);
  });

  test("should accept a fillColor input", () => {
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="green"/>`;
    const circle = new Circle();
    circle.setColor("green");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedSVG);
  });
});

describe("Triangle", () => {
  test("should render svg for blue polygon element", () => {
    const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="blue" />`
    const triangle = new Triangle()
    triangle.setColor("blue")
    const actualSVG = triangle.render()
    expect(actualSVG).toEqual(expectedSVG)
  });

  test("should accept a fillColor input", () => {
    const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="orange" />`;
    const triangle = new Triangle();
    triangle.setColor("orange");
    const actualSVG = triangle.render();
    expect(actualSVG).toEqual(expectedSVG);
  });
});

describe("Square", () => {
  test("should render svg for a yellow polygon element", () => {
  const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="yellow" />`;
  const square = new Square();
  square.setColor("yellow");
  const actualSVG = Square.render();
  expect(actualSVG).toEqual(expectedSVG);
  });

  test("should accept a fillColor input", () => {
    const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="purple" />`;
    const square = new Square();
    square.setColor("purple");
    const actualSVG = Square.render();
    expect(actualSVG).toEqual(expectedSVG);
  });
});