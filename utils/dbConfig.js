

import mongoose from "mongoose";

const dbConnection = async (url) => {

    return await mongoose.connect(url)


}
export default dbConnection