import { validateUrl } from "../src/client/js/helpers";

describe("Testing the helper functions", () => {
  test("Testing the validateUrl() function", () => {
    expect(validateUrl).toBeDefined();
  });
  test("validateUrl() should return false if input is not a url", () => {
    const input = 'this is not a url';
    expect(validateUrl(input)).not.toBeTruthy();
  });
  test("validateUrl() should return true if input is a url without http(s)", () => {
    const input = 'www.google.com';
    expect(validateUrl(input)).toBeTruthy();
  });
  test("validateUrl() should return true if input is a url with http(s)", () => {
    const input = 'https://www.instagram.es';
    expect(validateUrl(input)).toBeTruthy();
  });
});
