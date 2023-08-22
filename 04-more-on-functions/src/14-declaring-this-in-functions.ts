// 在这里需要弄清楚 JS 中的 this 是什么

interface User {
    admin: boolean
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[]
}

const db: DB = {
    filterUsers: (filter: (this: User) => boolean) => {
        let user1: User = {
            admin: true
        }

        let user2: User = {
            admin: false
        }

        return [user1, user2]
    }
}

const admins = db.filterUsers(function(this: User) {
    return this.admin
})

console.log(admins)