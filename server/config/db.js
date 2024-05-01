const mongoose = require('mongoose')

const connectionString = "mongodb://localhost:27017/mydatabase";

// mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("Connected to the database!");
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;