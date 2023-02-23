//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
const rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];
const countries: string[] = ["USA", "China", "India", "Brazil", "Russia"];
const cities: string[] = ["New York City", "Tokyo", "Mumbai", "Mexico City", "Moscow"];
const languages: string[] = ["English", "Mandarin", "Hindi", "Spanish", "Arabic"];

const allItems: string[] = [...mountains, ...rivers, ...countries, ...cities, ...languages];

console.log(allItems);


