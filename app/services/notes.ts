import { db } from "../models";
const Notes = db.notes

const findAndCountAll = async (condition: any): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            const result = await Notes.findAndCountAll(condition)
            resolve(result)
            // console.log("result is:", result)
        } catch (err) {
            reject(err)
            console.log(err)
        }
    })

const createOne = async (condition: any): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            const result = await Notes.create(condition)
            resolve(result)
            // console.log("result is:", result)
        } catch (err) {
            reject(err)
            console.log(err)
    }
})

const updateOne = async (params: any, condition: any): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            const result = await Notes.update(params, condition)
            // await Notes.reload()
            resolve(result)
            console.log("result is:", result)
        } catch (err) {
            reject(err)
            console.log(err)
        }
    })

const destroy = async (condition: any): Promise<any> =>
    new Promise(async (resolve, reject) => {
        try {
            const result = await Notes.destroy(condition)
            resolve(result)
            // console.log("result is:", result)
        } catch (err) {
            reject(err)
            console.log(err)
        }
    })
export {
    findAndCountAll, createOne, updateOne, destroy
} 