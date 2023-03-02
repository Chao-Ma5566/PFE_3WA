/*
 *check data from input is passed the length limite
 *@param {number} num Input length limited number
 *@param {array} data Input data need to check
 */
const inputCheck = (value, max = 255, min = 1) => {
    if (typeof value === "number") {
        const el = value.length;
        // on verrifie la length 
        if (el > max || el < min) {
            return false
        }
    }
    else if (typeof value === "string") {
        const el = value.trim().length;
        // on verrifie la length 
        if (el > max || el < min) {
            return false
        }
    }
    else if (Array.isArray(value)) {
        // si le tableau est vide
        if (value.length === 0) {
            return false
        }

        // on verrifie chaque valeur du tableau
        value.forEach(element => {
            if (typeof element === "string") {
                const e = element.trim().length;
                if (e > max || e < min) {
                    return false
                }
            }
            else {
                const e = element.length;
                if (e > max || e < min) {
                    return false
                }
            }
        });
    }
    else if (typeof value === "object") {
        // On fait un tableau avec les key de notre object pour verrifie si il y a des donner dedans
        if (Object.keys(value).length === 0) {
            return false
        }

        // on verrifie si une valeur est vide
        for (const key in value) {
            if (typeof value[key] === "string") {
                const element = value[key].trim().length;
                if (element > max || element < min) {
                    return false
                }
            }
            else {
                const element = value[key].length;
                if (element > max || element < min) {
                    return false
                }
            }
        }
    }
    return true
}

export default inputCheck
