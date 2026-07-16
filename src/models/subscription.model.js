import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, // The one who is subscribing
        ref: "User"
    },
    chanel:{
        type:Schema.Types.ObjectId,     //one to whom "subscriber" is subcribing
        ref: "User"
    }
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)