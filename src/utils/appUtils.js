export const normalizeData = (data,key) => {
    let normalizedObject = {}
    data.map((item)=> {
        normalizedObject = {...normalizedObject,[item[key]]:item}
    })

    return normalizedObject
}