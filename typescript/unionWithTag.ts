/**
 * タグ付きユニオン型
 */
type Option<T> = {
    tag: "some",
    value: T
} | { tag: "none" }


function showNumberIfExists(obj: Option<number>): void {
    if (obj.tag === "some") console.log(obj.value)
}

const four: Option<number> = {
    tag: "some",
    value: 4
}

const nothing: Option<number> = { tag: "none" }

showNumberIfExists(four)

/**
 * ユーザー定義型ガード
 */
function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
    return obj.tag === "some"
}

function showNumberIfExists2(obj: Option<number>): void {
    if (isSome(obj)) console.log(obj.value)
}


/**
 * タグ付きユニオン型の分岐
 */

function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
    switch (obj.tag) {
        case "some":
            return {
                tag: "some",
                value: callback(obj.value)
            }
        case "none":
            return obj
    }
}

function doubleOption(obj: Option<number>) {
    return mapOption(obj, x => x * 2)
}

console.log(doubleOption(four))
console.log(doubleOption(nothing))
