"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var urlSchema = new mongoose_1.default.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{
            timeStamp: {
                type: Number,
                required: true
            }
        }]
}, { timestamps: true });
exports.urlModel = mongoose_1.default.model('url', urlSchema);
