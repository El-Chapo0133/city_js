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
        this.div = this.getElement()
    }
    move(scroll) {
        if (this.isVisible) {
            this.hide()
        } else {
            this.display(scroll)
        }
    }
    display(scroll) {
        this.div.style.top = (scroll - 4) + "px"
        this.isVisible = true
    }
    moveWhileScroll(scroll) {
        if (this.isVisible)
            this.div.style.top = scroll + "px"
    }
    hide() {
        this.div.style.top = CHOOSINGDIVHIDE
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
