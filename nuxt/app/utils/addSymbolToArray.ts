function addSymbol<T>(obj: T): T & { symbol: symbol } {
    return { ...obj, symbol: Symbol(`added symbol`) }
}

export function addSymbolToArray<T>(arr: T[]) {
    return arr.map(item => addSymbol(item))
}
