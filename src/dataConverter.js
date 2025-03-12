import xml2js from 'xml2js';

/**
 * Converts a JSON object or array to a CSV string.
 * 
 * @param {Object|Array} json - The JSON object or array to convert.
 * @returns {string} - The CSV representation of the JSON data.
 */
export function jsonToCsv(json) {
    const array = Array.isArray(json) ? json : [json];
    const headers = Object.keys(array[0]);
    const csv = [
        headers.join(','), // Header row
        ...array.map(row => headers.map(field => JSON.stringify(row[field] || '')
            .replace(/^['"]+|['"]+$/g, '')) //replace surrounding quotes
            .join(',')
        ) // Data rows
    ].join('\n');
    return csv;
}

/**
 * Converts a CSV string to a JSON array.
 * 
 * @param {string} csv - The CSV string to convert.
 * @returns {Array<Object>} - The JSON array representation of the CSV data.
 */
export function csvToJson(csv) {
    const [headerLine, ...rows] = csv.split('\n').filter(line => line.trim());
    const headers = headerLine.split(',');
    return rows.map(row =>
        row.split(',').reduce((acc, value, index) => {
            acc[headers[index]] = value.replace(/^['"]+|['"]+$/g, ''); //replace surrounding quotes
            return acc;
        }, {})
    );
}

/**
 * Converts a JSON object to an XML string.
 * 
 * @param {Object} json - The JSON object to convert.
 * @returns {Promise<string>} - A promise that resolves to the XML string.
 */
export async function jsonToXml(json) {
    const builder = new xml2js.Builder();
    return builder.buildObject(json);
}

/**
 * Converts an XML string to a JSON object.
 * 
 * @param {string} xml - The XML string to convert.
 * @returns {Promise<Object>} - A promise that resolves to the JSON object.
 */
export async function xmlToJson(xml) {
    const parser = new xml2js.Parser({ explicitArray: false });
    return parser.parseStringPromise(xml);
}

/**
 * Converts data between CSV, JSON, and XML formats.
 * 
 * @param {string|Object} data - The data to convert (CSV string, JSON object, or XML string).
 * @param {string} fromFormat - The format of the input data ('csv', 'json', 'xml').
 * @param {string} toFormat - The desired format of the output data ('csv', 'json', 'xml').
 * @returns {Promise<string|Object|Array>} - A promise that resolves to the converted data.
 * @throws {Error} - If the conversion between the specified formats is not supported.
 */
export async function convertData(data, fromFormat, toFormat) {
    if (fromFormat === 'csv' && toFormat === 'json') {
        return csvToJson(data);
    }
    if (fromFormat === 'json' && toFormat === 'csv') {
        return jsonToCsv(data);
    }
    if (fromFormat === 'json' && toFormat === 'xml') {
        return await jsonToXml(data);
    }
    if (fromFormat === 'xml' && toFormat === 'json') {
        return await xmlToJson(data);
    }
    throw new Error(`Conversion from ${fromFormat} to ${toFormat} is not supported.`);
}

// export default { jsonToCsv, csvToJson, jsonToXml, xmlToJson, convertData };