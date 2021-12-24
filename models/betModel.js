const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetSchema = new Schema({
    contract: { type: Boolean },
    loseConditions: [{}],
    name: { type: String },
    odds: { type: Number },
    payout: { type: Number },
    persistent: { type: Boolean },
    wager: { type: Number },
    winConditions: [{}]
});

module.exports = mongoose.model("Bet", BetSchema);