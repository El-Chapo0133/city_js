/// Author      : Loris Levêque
/// Date        : 10.11.2019
/// Description : Class that draw images into div
///               
///               /!\ use the const for the urls, that's more simple /!\
///               /!\ it work, but you may have some problems        /!\

/** CONSTANTS */
const IMAGEWIDTH = 100
const IMAGEHEIGHT = 100
const IMAGES = {
    "bad_factory": "_resources/images/bad_factory.png",
    "normal_factory": "_resources/images/normal_factory.png",
    "hospital": "_resources/images/hospital.png",
    "hotel": "_resources/images/hotel.png",
    "office": "_resources/images/office.png",
    "school": "_resources/images/school.png",
    "single_house": "_resources/images/single_house.png",
    "university": "_resources/images/university.png",
    "warehouse": "_resources/images/warehouse.png"
}
/** VARIABLES */

/** CLASSES */
class Drawer {
    draw(urlToImage, divId) {
        var div = this.getElement(divId)
        div.body.appendChild(this.setImage(urlToImage))
    }
    getElement(elementId) {
        return document.getElementById(elementId)
    }
    setImage(url) {
        var image = new Image(IMAGEWIDTH, IMAGEHEIGHT)
        image.src = url
        return image
    }
}
/** INSTANTIATIONS */

/** FUNCTIONS */

/** EVENTS */

/** OTHERS */
let drawer = new Drawer()