/// Author      : Loris Levêque
/// Date        : 09.11.2019
/// Description : Simple file that content all event
///               
///               
///               

/** CONSTANTS */
const DIVCHOOSINGID = "choosingDiv"
const CHOOSINGDIV = document.getElementById(DIVCHOOSINGID)
const DIVCHOOSINGBUTTONCLOSE = "button-header-close"
const BUTTONCLOSEHEADER = document.getElementById(DIVCHOOSINGBUTTONCLOSE)
/** VARIABLES */

/** CLASSES */
class ActualCase {
    focusCase(x,y) {
        this.X = x
        this.Y = y
    }
}
class EventCases {
    addAllEvent() {
        var items = MAINDIV.querySelectorAll("*")
        items.forEach((item) => {
            this.addEvent(item)
        })
    }
    addEvent(item) {
        item.addEventListener("click", (e) => {
            handlerCase(e.target.id)
        })
    }
}
class GetValuesFromId {
    get(id) {
        var itemDOM = document.getElementById(id)
        var indexArray = String(itemDOM.id).split('-')
        var indexX = indexArray[0]
        var indexY = indexArray[1]
        return this.createObject(itemDOM, indexX,indexY)
    }
    createObject(div,x,y) {
        return {
            DOM: div,
            X: parseInt(x),
            Y: parseInt(y)
        }
    }
}
class EventChooser {
    addAllEvent() {
        var items = CHOOSINGDIV.querySelectorAll(".chooseItem-image")
        items.forEach((item) => {
            this.addEvent(item)
        })
    }
    addEvent(item) {
        item.addEventListener("click", (e) => {
            //console.log(e.target.id)
            var id = e.target.id
            setBuilding(id.substr(id.length - 1, id.length))
        })
    }
}
/** INSTANTIATIONS */
let eventCases = new EventCases()
let eventChooser = new EventChooser()
let getValuesFromId = new GetValuesFromId()
let actualCase = new ActualCase()

/** FUNCTIONS */
function handlerCase(id) {
    var values = getValuesFromId.get(id)
    actualCase.focusCase(values.X, values.Y)
    // this thing work!
    //drawer.draw(IMAGESURL.office, values.DOM.id)
    /** TODO: set things to choose the building, then draw it */
    if (caseUsed(values.X, values.Y)) {
        /** TODO: set function to change item */
        displayChoosingDiv.move()
    } else {
        var buildIdChoosed
        /** TODO: set function to choose item */
        displayChoosingDiv.move()
        //map.setItem(values.X,values.Y,buildIdChoosed)
        //drawer.draw(IMAGESURL.single_house, values.DOM.id)
    }
}
function caseUsed(x,y) {
    if (map.getItem(x,y) > 0) {
        return true
    } else {
        return false
    }
}
function setBuilding(id) {
    map.setItem(actualCase.X, actualCase.Y, id)
    var divId = actualCase.X + "-" + actualCase.Y
    displayChoosingDiv.move()
    drawer.draw(IMAGESURLARRAY[id], divId)
}
function close() {
    displayChoosingDiv.hide()
}
/** EVENTS */
BUTTONCLOSEHEADER.addEventListener("click", () => {
    close()
})
/** OTHERS */
eventCases.addAllEvent()
eventChooser.addAllEvent()