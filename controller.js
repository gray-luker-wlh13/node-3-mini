module.exports = {
    getPlanes: (req, res, next) => {
        const db = req.app.get('db');
        const {count} = req.params;

        db.get_planes([+count]).then(planes => {
            res.status(200).send(planes)
        })
        .catch(err => res.status(500).send(err))
    }
};