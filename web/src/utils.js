/**
 * Determines whether a specific property
 * exists and has been set with a non-empty value.
 *
 * A property is considered not set if its value is any of
 * [undefined, null, ""]
 *
 * @param {*} prop The property to be tested
 * @returns true if the property exists and has a value, or false if not
 */

export const isSet = prop => !unsetValues.includes(prop)
const unsetValues = ["", null, undefined]
