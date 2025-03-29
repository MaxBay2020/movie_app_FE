
// 10MB maximum
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024
export const languages = {
    "English": "English",
    "French": "Français"
}

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
