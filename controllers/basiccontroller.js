exports.getIndex = (req, res, next) => {
    res.render('404', {
        pageTitle: 'Not implemented',
        path: '/index'
    })
};