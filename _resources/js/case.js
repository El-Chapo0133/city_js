/// Author      : Loris Levêque
/// Date        : 09.11.2019
/// Description : Class for a building case
///               This file should only contain the class !
///               
///               

/** CONSTANTS */

/** VARIABLES */
var cases = []
/** CLASSES */
class Case {
    constructor(p_x,p_y) {
        this.x = p_x
        this.y = p_y
        // default: the case is empty
        this.value = 0
    }
    get X() {
        return this.x
    }
    get Y() {
        return this.y
    }
    setValue(p_value) {
        if (this.checkValue(value)) {
            this.value = p_value
        }
    }
    checkValue(value) {
        /** TODO: check if the value is on the building area */
    }
}
/** INSTANTIATIONS */

/** FUNCTIONS */
function initCases() {
    for (var indexX = 0; index < INDEXMAXX; indexX++) {
        cases[indexX] = []
        for (var indexY = 0; indexY < INDEXMAXY; indexY++) {
            init_class(indexX, indexY)
        }
    }
}
function init_class(x,y) {
    cases[x][y] = new Case(x,y)
}
/** EVENTS */

/** OTHERS */
initCases()