import fs, { stat } from 'fs'
import path from 'path'
import { getReadableSize } from './getReadableSize.js'
export function analyzeFile(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error("File does not exist")
    }

    const stats = fs.statSync(filePath);
    return {
        fileSize: stats.size,
        readableSize: getReadableSize(stats.size),
        extension: path.extname(filePath).slice(1),
        mimeTypes: getMimeType(filePath),
        createdBy: `${stats.birthtime.toLocaleDateString()} ${stats.birthtime.toTimeString()}`,
        lastModifiedBy: `${stats.mtime.toLocaleDateString()} ${stats.birthtime.toTimeString()}`

    };

}