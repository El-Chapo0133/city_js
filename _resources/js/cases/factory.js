/// Author      : Loris Levêque
/// Date        : 10.11.2019
/// Description : Class that describe factories
///               3 types: doog, normal and bad factory
///               
///               

/** CONSTANTS */
// good,normal,bad
const GOODFACTORY = 1, NORMALFACTORY = 2, BADFACTORY = 3
const ID = [1,2,3]
/** VARIABLES */

/** CLASSES */
class Factory {
    constructor(index) {
        this.id = ID[index]
        this.urlImage = this.getImage()
    }
    getImage() {
        switch (this.id) {
            case 0: {
                return IMAGESURLOBJ.good_factory
            }
            case 1: {
                return IMAGESURLOBJ.normal_factory
            }
            case 2: {
                return IMAGESURLOBJ.bad_factory
            }
            default: {
                throw ("bad argument")
            }
        }
    }
}
/** INSTANTIATIONS */

/** FUNCTIONS */

/** EVENTS */

/** OTHERS */
