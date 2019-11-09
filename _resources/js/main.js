/// Author      : Loris Levêque
/// Date        : 08.11.2019
/// Description : Main files for js part
///               Contain startup things
///               
///               

/** CONSTANTS */
const MAINDIV = document.getElementById("mainDiv")
const INDEXMAXX = 10
const INDEXMAXY = 3

/** VARIABLES */
var _document = document

/** CLASSES */
class Initializer {
    constructor(p_jQuery) {
        this.jQuery = p_jQuery
    }
    initialize() {
        for (var indexX = 0; indexX < INDEXMAXX; indexX++) {
            for (var indexY = 0; indexY < INDEXMAXY; indexY++) {
                this.addDiv(indexX, indexY)
            }
        }
        this.setMaindiv(INDEXMAXX * 120 + 40, INDEXMAXY * 120 + 40)
    }
    addDiv(x,y) {
        MAINDIV.innerHTML += '<div id="' + x + "-" + y + '" class="itemGrid"></div>'
        var div = _document.getElementById(x + "-" + y)
        this.jQuery.moveElement(div,x * 120,y * 120)
    }
    setMaindiv(x,y) {
        MAINDIV.style.width = x + "px"
        MAINDIV.style.height = y + "px"
    }
}
class JQuery {
    moveElement(element, x, y) {
        element.style.left = String(x) + "px"
        element.style.top = String(y) + "px"
    }
}

/** INSTANTIATIONS */
let jQuery = new JQuery()
let initializer = new Initializer(jQuery)

/** FUNCTION */

/** EVENTS */

/** OTHER */
initializer.initialize()
