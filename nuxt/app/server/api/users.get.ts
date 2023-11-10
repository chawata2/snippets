export default defineEventHandler(() => {
    const a = 1
    const b = 2

    const c = 1 + a

    let foo = 0

    for (let i = 0; i < 5; i++) {
        foo += i
    }

    if (c < foo) return { asdf: "asf" }

    return {
        users: [{
            name: 'masa',
            email: 'masa@example.com',
        }]
    }
})
