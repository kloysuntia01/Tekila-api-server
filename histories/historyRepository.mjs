import fs from 'fs';

const FILE_NAME = './assets/main-data.json'

const historyRepository = {
    get: async(resolve, reject) => {
        const data = await fs.readFileSync(FILE_NAME,
            {encoding: 'utf-8', flag: 'r'}
        )
        if (data)
        {
            var db = JSON.parse(data)
            resolve(db.ourhistories)
        } else 
        {
            reject('Broken')
        }
    },
    getById: async(id, resolve, reject) =>
    {
        const data = await fs.readFileSync(FILE_NAME,
            {encoding: 'utf-8', flag: 'r'}
        )
        if (data) {
            var x = JSON.parse(data)
            var y = x.ourhistories.find(x => x.id == id)
            if (y) {
                resolve(y)
            } else {
                console.log("Nothing found")
                reject("nope")
            }
        } else 
        {
            reject("Can't find it")
        }

    }

}

export default historyRepository