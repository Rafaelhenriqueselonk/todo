import { insert, update, remove, listAll } from 'modules/data/TodoDAO'

const handlePost = async (reqParams) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        const insertObj = await insert(reqParams.data)
        result.data = insertObj
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const handlePut = async (reqParams) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        const updatedObj = await update(reqParams.data)
        result.data = updatedObj
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const handleRemove = async (reqParams) => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        const todoId = parseInt(reqParams.query.id)
        const removeObj = await remove(todoId)
        result.data = removeObj
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const handleGet = async () => {
    const result = {
        status: 200,
        data: {}
    }

    try {
        const todoList = await listAll()
        if (todoList.length == 0) {
            result.data = []
        } else {
            result.data = todoList
        }
    } catch (error) {
        result.status = 500
        result.data = error.message
    }

    return result
}

const acceptedMethods = {
    POST: handlePost,
    PUT: handlePut,
    DELETE: handleRemove,
    GET: handleGet
}

const handleRequest = async (reqParams) => {
    if (acceptedMethods[reqParams.method] !== undefined) {
        let requestMethod = acceptedMethods[reqParams.method]
        return await requestMethod(reqParams)
    } else {
        return {
            status: 404,
            data: {}
        }
    }
}

export { handleRequest }