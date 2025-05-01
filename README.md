# 📂 File Inspector

A lightweight node js utility to analyze files - get readable size , MIME type , and also can get the meta data of file along with timestamps easily.

---

## ✨ Features

- 🔍 Analyze files with a single function.
- 📏 Convert byte size into human-readable format.
- 🧠 Get MIME types from file extensions.
- 🕒 Access file creation, modification, and access dates.

---

## 📦 Installation

```bash
npm install file-inspector  

```

## Usage

```javascript 

import { getReadableSize, getMimeType, analyzeFile } from 'node-file-inspector';

const filepath = "path/to/your/file.js";
const bytes = 2048;

const info = analyzeFile(filepath); // returns metadata object
const fileType = getMimeType(filepath); // returns MIME type
const fileSize = getReadableSize(bytes); // returns readable size string

console.log(info);

```

---

## Example Output

```javascript 
{
  "fileSize": 1512,
  "readableSize": "1.48 KB",
  "extension": "js",
  "mimeTypes": "application/javascript",
  "createdBy": "04/30/2025 12:15:43 GMT+0530 (India Standard Time)",
  "lastModifiedBy": "04/30/2025 12:15:43 GMT+0530 (India Standard Time)"
}


```
