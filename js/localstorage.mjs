export function addItem(key, value) {
    const str = JSON.stringify(value)

    localStorage.setItem(key, str)
}


export function getItem(key) {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
}
export function removeItem(key) {
    localStorage.removeItem(key)
}

export function clear() {
    localStorage.clear()
}

