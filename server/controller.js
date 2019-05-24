module.exports = {
    getAllListings: (req, res) => {
        const db = req.app.get('db')
        db.get_listings().then((houseList) => {
            res.status(200).send(houseList)
        })
            .catch(error => {
                if (error) throw error;
            })
    },

    addListing() {

    },

    deleteListing() {

    },

    updateListing() {

    }
}