function getAgeMovie(releasedDate){
    let date = new Date()
    let getYear = date.getFullYear()

    return getYear - releasedDate
}

module.exports = getAgeMovie