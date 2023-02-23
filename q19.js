var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
var rivers = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];
var countries = ["USA", "China", "India", "Brazil", "Russia"];
var cities = ["New York City", "Tokyo", "Mumbai", "Mexico City", "Moscow"];
var languages = ["English", "Mandarin", "Hindi", "Spanish", "Arabic"];
var allItems = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], mountains, true), rivers, true), countries, true), cities, true), languages, true);
console.log(allItems);
