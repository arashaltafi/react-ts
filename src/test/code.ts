const gte = (a: number, b: number) => {
    if (a > b) return true;
    if (a < b) return false;
    return true;
}

const lte = (a: number, b: number) => {
    if (a < b) return true;
    if (a > b) return false;
    return true;
}

export { gte, lte }