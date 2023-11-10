/** 
 * だめっぽい
 * 値が更新されると、すべてのオブジェクトのシンボルが書き換えられる
 */

function addSymbol<T>(obj: T): T & { symbol: symbol } {
    return { ...obj, symbol: Symbol(`added symbol`) }
}

function addSymbolToArray<T>(arr: T[]) {
    return arr.map(item => addSymbol(item))
}


/**
 * 配列をv-forで回す際にkeyに指定でいるプロパティがないときに使用する。
 * リアクティブなオブジェクトの配列を受け取り, プロパティにシンボルを追加して返す。
 * 値の変更の際は、もとのリアクティブな値を書き換える。
 * 
 * 使用方法は App/WithSymbol.vueを参照
 */
export const useArrayWithSymbol = <T>(arr: Ref<T[]>) => {
    const arrWithSymbol = computed(() => addSymbolToArray(arr.value))

    /**
     * 何故かsetterで代入でいない...
     * これが使えれば、arrWithSymbolに直接代入することで、元の配列に反映できるようになる
    */
    // const arrWithKey = computed({
    //   get() {
    //     return addSymbolToArray(nonKeyArr.value)
    //   },
    //   set(value) {
    //     nonKeyArr.value = value
    //   }
    // })
    return arrWithSymbol
}
