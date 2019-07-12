// When provided with a String, capitalize all vowels

// For example:

// Input: "Hello World!"

// Output: "HEllO WOrld!"

const swap = st => st.replace(/[aeiou]/g, vowel => vowel.toUpperCase())