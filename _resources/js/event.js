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
const STARTINGDIVIDFROMIMAGEID = 5
/** VARIABLES */
var scrollXValues = 0
var imageSeletedId = 0
/** CLASSES */
class ActualCase {
    constructor() {
        this.X = 0
        this.Y = 0
        this.isImage = false
    }
    focusCase(x,y,isImage) {
        this.X = x
        this.Y = y
        this.isImage = isImage
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
            var id = e.target.id
            imageSeletedId = id.substr(id.length - 1, id.length)
            if (actualCase.isImage == false) {
                setBuilding()
            } else {
                console.log("check!")
            }
        })
    }
}
/** CHANGED IT WITH SIMPLE IF */
class EventImage {
    addEvent(imageId) {
        var image = this.getElement(imageId)
        image.addEventListener("click", (e) => {
            
        })
    }
    getElement(id) {
        return document.getElementById(id)
    }
}
/** INSTANTIATIONS */
let eventCases = new EventCases()
let eventChooser = new EventChooser()
let getValuesFromId = new GetValuesFromId()
let actualCase = new ActualCase()
/** FUNCTIONS */
function handlerCase(id) {
    // set id if it's an image id
    if (isIdImage(id))
        id = id.substr(STARTINGDIVIDFROMIMAGEID, id.length)
    var values = getValuesFromId.get(id)
    actualCase.focusCase(values.X, values.Y, false)
    /** TODO: set things to choose the building, then draw it */
    displayChoosingDiv.move(scrollXValues)
}
function caseUsed(x,y) {
    if (map.getItem(x,y) > 0) {
        return true
    } else {
        return false
    }
}
function setBuilding(divId) {
    if (isUndefined(divId))
        divId = actualCase.X + "-" + actualCase.Y
    /** clean the div before adding image */
    document.getElementById(divId).innerHTML = ""
    map.setItem(actualCase.X, actualCase.Y, imageSeletedId)
    displayChoosingDiv.move(scrollXValues)
    drawer.draw(IMAGESURLARRAY[imageSeletedId], divId)
}
function isIdImage(value) {
    if (value.length > STARTINGDIVIDFROMIMAGEID) {
        return true
    } else {
        return false
    }
}
function isUndefined(value) {
    if (value == undefined) {
        return true
    } else {
        return false
    }
}
function close() {
    displayChoosingDiv.hide()
}
/** EVENTS */
BUTTONCLOSEHEADER.addEventListener("click", () => {
    close()
})
document.addEventListener("scroll", (e) => {
    scrollXValues = window.scrollY - 4
    displayChoosingDiv.moveWhileScroll(scrollXValues)
})
/** OTHERS */
eventCases.addAllEvent()
eventChooser.addAllEvent()