import mime from 'mime-types'
export function getMimeType(filePath) {
    return mime.lookup(filePath)
}

