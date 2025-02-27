import SparkMD5 from './sparkmd5.js';

export function createChunk(file, index, chunkSize) {
  return new Promise((resolve) => {
    const start = index * chunkSize;
    const end = Math.min(file.size, start + chunkSize);
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();
    const blob = file.slice(start, end);

    fileReader.onload = function (e) {
      spark.append(e.target.result);
      resolve({
        start,
        end,
        blob,
        hash: spark.end(),
        index
      });
    };

    fileReader.onerror = function (e) {
      reject(new Error("文件读取失败"));
    };

    fileReader.readAsArrayBuffer(blob);
  });
}