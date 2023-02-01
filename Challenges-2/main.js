// Good luck preparing some lasagna!
/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 * 
 */
export function remainingMinutesInOven(actualMinutesInOven) {
    let minutesToComplete = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    return minutesToComplete;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 *
 * @returns {number} the total preparation time
 * 
 */
export function preparationTimeInMinutes(numberOfLayers) {
    let timeLayers = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
    return timeLayers;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 * 
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    let finalTime = preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    return finalTime;
}
