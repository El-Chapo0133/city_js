/// Author      : Loris Levêque
/// Date        : 11.11.2019
/// Description : Simpel class that display the choosing header
///               
///               
///               

/** CONSTANTS */
// hide the div in the top
// exemple :
//   ------------
//   |   div    |
//   ------------
// ----------------
// |              |
// |    Screen    |
// |              |
// ----------------
const CHOOSINGDIVHIDE = "-510px"
const CHOOSINGDIVDISPLAY = "0"
/** VARIABLES */
/** CLASSES */
class DisplayChoosingDiv {
    constructor() {
        this.isVisible = false
    }
    move() {
        if (this.isVisible) {
            this.hide()
        } else {
            this.display()
        }
    }
    display() {
        var div = this.getElement()
        div.style.top = CHOOSINGDIVDISPLAY
        this.isVisible = true
    }
    hide() {
        var div = this.getElement()
        div.style.top = CHOOSINGDIVHIDE
        this.isVisible = false
    }
    getElement() {
        return document.getElementById(DIVCHOOSINGID)
    }
}
/** INSTANTIATIONS */
let displayChoosingDiv = new DisplayChoosingDiv()
/** FUNCTIONS */

/** EVENTS */

/** OTHERS */
