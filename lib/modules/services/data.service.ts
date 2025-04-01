import DataModel from '../schemas/data.schema';
import mongoose from "mongoose";

export default class DataService {

    public async getAll() {
        try {
            const data = await DataModel.find();
            return data;
        } catch (error) {
            throw new Error(`Query failed: ${error}`);
        }
    }

    public async create(object: object) {
        try {
            return await DataModel.create(object);
        } catch (error) {
            throw new Error(`Query failed: ${error}`);
        }
    }

    public async delete(id: String) {
        try {
            return await DataModel.deleteOne({ _id: id });
        } catch (error) {
            throw new Error(`Query failed: ${error}`);
        }
    }
}
