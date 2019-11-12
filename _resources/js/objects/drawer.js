/// Author      : Loris Levêque
/// Date        : 10.11.2019
/// Description : Class that draw images into div
///               
///               /!\ use the const for the urls, that's more simple /!\
///               /!\ it work, but you may have some problems        /!\

/** CONSTANTS */
const IMAGEWIDTH = 90
const IMAGEHEIGHT = 90
const IMAGESURLOBJ = {
    "bad_factory": "_resources/images/bad_factory.png",
    "normal_factory": "_resources/images/normal_factory.png",
    "good_factory": "_resources/images/good_factory.png",
    "hospital": "_resources/images/hospital.png",
    "hotel": "_resources/images/hotel.png",
    "office": "_resources/images/office.png",
    "school": "_resources/images/school.png",
    "single_house": "_resources/images/single_house.png",
    "university": "_resources/images/university.png",
    "warehouse": "_resources/images/warehouse.png"
}
const IMAGESURLARRAY = [
    "_resources/images/bad_factory.png",
    "_resources/images/normal_factory.png",
    "_resources/images/good_factory.png",
    "_resources/images/hospital.png",
    "_resources/images/hotel.png",
    "_resources/images/office.png",
    "_resources/images/school.png",
    "_resources/images/single_house.png",
    "_resources/images/university.png",
    "_resources/images/warehouse.png"
]
/** VARIABLES */

/** CLASSES */
class Drawer {
    drawPerso(urlToImage, divId, width, height) {
        var div = this.getElement(divId)
        div.appendChild(this.setImagePerso(urlToImage, width, height))
    }
    draw(urlToImage, divId) {
        var div = this.getElement(divId)
        div.appendChild(this.setImage(urlToImage))
    }
    getElement(elementId) {
        return document.getElementById(elementId)
    }
    setImagePerso(url,width,height) {
        var image = new Image(width, height)
        image.src = url
        return image
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

drawer.drawPerso("_resources/images/delete.png", DIVCHOOSINGBUTTONCLOSE, 50, 50)