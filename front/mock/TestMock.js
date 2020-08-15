const Mock = require('mockjs')
let id = Mock.mock('@id')
// console.log(id)

let obj = Mock.mock({
    id: '@id',
    username: '@cname',
    date: '@date()',
    avatar: "@image('200x100', '#4A7BF7', 'Hello')",
    description: "@paragraph()",
    ip: "@ip()",
    email:"@email()"

})

console.log(obj)