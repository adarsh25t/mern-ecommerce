const mongoose = require("mongoose")


function connectToDB() {

    try {

        mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("Connected to MongoDB")
        }).catch((error) => {
            console.error("Failed to connect to MongoDB", error)
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;