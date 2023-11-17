type User = {
    name: string
    email: string
}

const users: User[] = [{
    name: 'foo',
    email: 'foo@example.com'
},
{
    name: 'bar',
    email: 'bar@example.com'
},

{
    name: 'foobar',
    email: 'foobar@example.com'
},
]

export default defineEventHandler(() => {
    return {
        users: users
    }
})
