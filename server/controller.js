module.exports = {
    getAllListings: (req, res) => {
        // this is getting all house listings in the database. Referece to my sql file.
        const db = req.app.get('db')
        db.get_listings()
            .then(houseListings => {
                res.status(200).send(houseListings)
            })
            .catch(error => {
                if (error) throw error;
            })
    },

    getListing: (req, res) => {
        // this is getting just one listing, based off of id, from my database. Referece to my sql file.
        console.log('here!')
        const db = req.app.get('db')
        const { id } = req.params
        db.get_listing({id})
            .then(listing => {
                res.status(200).send(listing)
            })
            .catch(error => {
                if (error) throw error;
            })
    },

    addListing: (req, res) => {
        // this is used to add a new listing to my database. Referece to my sql file.
        const db = req.app.get('db')
        const { name, address, city, state, zip, img, mortgage, rent } = req.body
        db.add_listing({ name, address, city, state, zip, img, mortgage, rent })
            .then(response => {
                res.status(200).send(true)
            })
            .catch(error => {
                if (error) throw error;
            })
    },

    deleteListing: (req, res) => {
        // this is deleting a listing, by id, from database. Referece to my sql file.
        // console.log('here!')
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_listing({ id })
            .then(houseListings => {
            res.status(200).send(houseListings)
            })
            .catch(error => {
                if (error) throw error;
            })
    },

    updateListing: (req, res) => {
        // this is updating an existing listing, referenced by id.  Referece to my sql file.
        const db = req.app.get('db')
        const { id } = req.params
        const { name, address, city, state, zip, img, mortgage, rent } = req.body
        db.update_listing([name, address, city, state, zip, img, mortgage, rent])
            .then(response => {
            res.sendStatus(200)
            })
            .catch(error => {
                if (error) throw error;
            })
    }
}