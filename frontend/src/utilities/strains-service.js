import * as strainsAPI from './strains-api'


async function getAllStrains() {
  const getAllStrains = require('../components/StrainList');
  try {
    let result = await getAllStrains();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}


// export async function getStrains() {
//     try {
//         const data = await strainsAPI.index()
//         return data
//     } catch (err) {
//         return err
//     }
// }

export async function createStrain(newStrainData) {
    try {
        const data = await strainsAPI.create(newStrainData)
        console.log(data)
        return data
    } catch (err) {
        return err
    }
}

export async function getStrain(id) {
    try {
        const data = await strainsAPI.detail(id)
        return data
    } catch (err) {
        return err
    }
}

export async function deleteStrain(id) {
    try {
        const data = await strainsAPI.destroy(id)
        return data
    } catch (err) {
        return err
    }
}

export async function updateStrain(id, data) {
    try {
        const resp = await strainsAPI.update(id, data)
        return resp
    } catch (err) {
        return err
    }
}
