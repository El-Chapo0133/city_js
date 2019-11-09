/// Author      : Loris Levêque
/// Date        : 09.11.2019
/// Description : Simple file that content all event
///               
///               
///               

/** CONSTANTS */

/** VARIABLES */

/** CLASSES */
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
        var indexX = String(id).split('-')[0]
        var indexY = String(id).split('-')[1]
        return this.createObject(itemDOM, indexX,indexY)
    }
    createObject(div,x,y) {
        return {
            DOM: div,
            X: x,
            Y: y
        }
    }
}
/** INSTANTIATIONS */
let eventCases = new EventCases()
let getValuesFromId = new GetValuesFromId()

/** FUNCTIONS */
function handlerCase(id) {
    var values = getValuesFromId.get(id)
}
/** EVENTS */

/** OTHERS */
eventCases.addAllEvent()