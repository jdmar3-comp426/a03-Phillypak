import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: getAvgMpg(),
    allYearStats: getAllYearStats(),
    ratioHybrids: getRatioHybrids(),
};

function getAvgMpg() {
    let obj = {};
    let cityMPG = 0;
    let highwayMPG = 0;

    mpg_data.forEach(k => {
        cityMPG = cityMPG + k.city_mpg,
        highwayMPG = highwayMPG + k.highway_mpg
    });
    obj = {
        city: cityMPG / mpg_data.length,
        highway: highwayMPG / mpg_data.length
    };
    return obj;
}

function getAllYearStats() {
    let years = [];
    mpg_data.forEach(k => {
        years.push(k.year)
    });

    return getStatistics(years);
}

function getRatioHybrids() {
    var totalHybrid = 0;
    var ratio = 0;
    mpg_data.forEach(k => {
        if (k.hybrid == true) {
            totalHybrid += 1;
        }
    });
    ratio = totalHybrid / mpg_data.length;
    return ratio;
}
/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: getMakerHybrids(),
    avgMpgByYearAndHybrid: getAvgMpgByYearAndHybrid()
};

function getMakerHybrids() {
    let mainArray = [];

    mpg_data.forEach(k => {
        let exit = false;
        if (k.hybrid) {
            mainArray.forEach(val => {
                if (val["make"] == k.make) {
                    val["hybrids"].push(k.id);
                    exit = true;
                }
            })
            if (exit == false) {
                let arr = [];
                arr.push(k.id);
                let val = {
                    make: k.make,
                    hybrids: arr
                };
                mainArray.push(val);
            }
        }
    })
    mainArray.sort(function(a, b) {
        return b["hybrids"].length - a["hybrids"].length;
    })
    return mainArray;
}

function getAvgMpgByYearAndHybrid() {
    let obj = {};

    mpg_data.forEach(k => {
        if (obj[k.year] == undefined) {
            obj[k.year] = {
                hybrid: {
                    city: [],
                    highway: []
                },
                nothybrid: {
                    city: [],
                    highway: []
                }
            }
        }
        if (k.hybrid) {
            obj[k.year]["hybrid"]["city"].push(k.city_mpg);
            obj[k.year]["hybrid"]["highway"].push(k.highway);
        } else if (!k.hybrid) {
            obj[k.year]["nothybrid"]["city"].push(k.city_mpg);
            obj[k.year]["nothybrid"]["highway"].push(k.highway);
        }
    })

    for (let key in obj) {
        obj[key]["hybrid"]["city"] = getStatistics(obj[key]["hybrid"]["city"]).mean;
        obj[key]["hybrid"]["highway"] = getStatistics(obj[key]["hybrid"]["highway"]).mean;
        obj[key]["nothybrid"]["city"] = getStatistics(obj[key]["nothybrid"]["city"]).mean;
        obj[key]["nothybrid"]["highway"] = getStatistics(obj[key]["nothybrid"]["highway"]).mean;
    }
    return obj;
}