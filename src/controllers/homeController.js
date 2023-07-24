const getHomepage = (req, res) => {
    //process data
    //call model 
    res.send('Hello World!@')
}

const getLife = (req, res) => {
    res.send('My life is beautiful!')
}

const getMy = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getLife, getMy
}