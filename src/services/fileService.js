const path = require('path');

const uploadSingeFile = async (fileObject) => {
    let uploadPath = path.resolve(__dirname, '../public/images/upload');

    let extName = path.extname(fileObject.name);

    let baseName = path.basename(fileObject.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await fileObject.mv(finalPath)
        return {
            status: 'success',
            path: finalName,
            error: null
        }
    } catch (err) {
        console.log('>>check err: ', err)
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(err)
        }
    }
}

const uploadMultipleFile = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, '../public/images/upload');
        let resultArr = []
        let countSuccess = 0
        for (let i = 0; i < filesArr.length; i++) {
            let extName = path.extname(filesArr[i].name);

            let baseName = path.basename(filesArr[i].name, extName);

            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;
            try {
                await filesArr[i].mv(finalPath)
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                console.log('>>check err: ', err)
                resultArr.push({
                    status: 'fail',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    uploadMultipleFile, uploadSingeFile
}