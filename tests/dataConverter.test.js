import { jsonToCsv, csvToJson, jsonToXml, xmlToJson, convertData } from "../src/dataConverter.js";

describe("Data Conversion Module", () => {

  test("jsonToCsv correctly", () => {
    const json = [{ name: "John", age: 25 }, { name: "Smith", age: 20 }];
    const expectedCsv = "name,age\nJohn,25\nSmith,20";
    expect(jsonToCsv(json)).toBe(expectedCsv);
  });

  test("csvToJson correctly", () => {
    const csv = "name,age\nJohn,25\nSmith,20";
    const expectedJson = [{ name: "John", age: "25" }, { name: "Smith", age: "20" }];
    expect(csvToJson(csv)).toEqual(expectedJson);
  });

  test("jsonToXml correctly", async () => {
    const json = { person: { name: "John", age: 25 } };
    const expectedXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<person>\n  <name>John</name>\n  <age>25</age>\n</person>';
    const result = await jsonToXml(json);
    expect(result.replace(/\s+/g, '')).toBe(expectedXml.replace(/\s+/g, ''));
  });

  test("xmlToJson correctly", async () => {
    const xml = `<person><name>John</name><age>25</age></person>`;
    const expectedJson = { person: { name: "John", age: "25" } };
    const result = await xmlToJson(xml);
    expect(result).toEqual(expectedJson);
  });


  test("convertData JSON to CSV correctly", async () => {
    const json = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
    const expectedCsv = "name,age\nAlice,25\nBob,30";
    const result = await convertData(json, "json", "csv");
    expect(result).toBe(expectedCsv);
  });

  test("convertData CSV to JSON correctly", async () => {
    const csv = "name,age\nAlice,25\nBob,30";
    const expectedJson = [{ name: "Alice", age: "25" }, { name: "Bob", age: "30" }];
    const result = await convertData(csv, "csv", "json");
    expect(result).toEqual(expectedJson);
  });

  test("convertData JSON to XML correctly", async () => {
    const json = { person: { name: "Alice", age: 25 } };
    const expectedXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<person>\n  <name>Alice</name>\n  <age>25</age>\n</person>';
    const result = await convertData(json, "json", "xml");
    expect(result.replace(/\s+/g, '')).toBe(expectedXml.replace(/\s+/g, '')); // Ignore whitespace
  });

  test("convertData XML to JSON correctly", async () => {
    const xml = `<person><name>Alice</name><age>25</age></person>`;
    const expectedJson = { person: { name: "Alice", age: "25" } };
    const result = await convertData(xml, "xml", "json");
    expect(result).toEqual(expectedJson);
  });

  test("throws an error when conversion format is unsupported", async () => {
    await expect(convertData("some data", "txt", "json")).rejects.toThrow("Conversion from txt to json is not supported.");
  });


});