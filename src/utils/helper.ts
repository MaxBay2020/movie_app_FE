
// 10MB maximum
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024
export const languages = {
    "English": "English",
    "French": "Français"
}

export enum Message {
    'Cannot find record in the database'= 'response.errorFind',
    'Cannot create record in the database'= 'response.errorCreate',
    'Necessary params NOT provided or invalid data'= "response.errorParams",
    'Token is NOT valid'= "response.errorAuth",
    'You do NOT have authorization'= "response.errorAuthorized",
    'Your are not authenticated'= "response.errorAuth",
    'Email or password NOT correct'= "response.errorEmailOrPasswordNotCorrect",
    'Email has already been registered'= "response.errorEmailExist",
    'There is something wrong with server, please try again later'= "response.errorServer",
    'Resource not found' = 'response.errorResourceNotFound'
}

export enum StatusCode {
    E200 = 200, // OK
    E400 = 400, // bad request due to client error
    E401 = 401, // authorization error
    E402 = 402, // payment error
    E403 = 403, // email or password NOT correct
    E404 = 404, // resources NOT found,
    E405 = 405, // need to refresh,
    E406 = 406, // resource has existed,
    E500 = 500  // there is something wrong with server, please try again later
}

export const defaultLimit = 8

export const staleTime = 10 * 60 * 1000 // 10min


/**
 * format file size based on kb passed in
 * @param kb
 */
export const formatFileSize = (byte: number): string => {
    if(byte < 1024){
        return `${byte} B`
    }
    else if(byte < Math.pow(1024, 2)){
        return `${(byte / 1024).toFixed(2)} KB`
    }else if(byte < Math.pow(1024, 3)){
        return `${(byte/Math.pow(1024, 2)).toFixed(2)} MB`
    }else{
        return `${(byte/Math.pow(1024, 3)).toFixed(2)} GB`
    }
}
