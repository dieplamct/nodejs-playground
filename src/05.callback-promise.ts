type User = {
    id: number;
    name: string;
    role: "user" | "admin";
};

const users: User[] = [
    { id: 1, name: "John", role: "admin" },
    { id: 2, name: "Jane", role: "user" },
    { id: 3, name: "Bob", role: "user" },
];

function getUsers(id: number): Promise<User[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });
}

function findUserByIdAsync(id: number, callback: (err: Error | null, user?: User) => void): void {
    setTimeout(() => {
        const user = users.find((user) => user.id === id);
        if (user) {
            callback(null, user);
        } else {
            callback(new Error(`User with id ${id} was not found`));
        }
    }, 500);
}

async function findUserByIdCallback(userId: number) {
    await findUserByIdAsync(userId, (err, user) => {
        if (err) {
            console.log(`callback: error: ${err.message}`);
        }
        else {
            console.log(`callback: found user: id: ${user?.id}, name: ${user?.name}, role: ${user?.role}`)
        }
    });
}

function findUserByIdPromise(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === userId);
            if (user) {
                resolve(user); return;
            } else {
                reject(new Error(`User with id ${userId} was not found`)); return;
            }
        }, 600);
    });
}

async function main(userId: number) {
    try {
        const user = await findUserByIdPromise(userId);
        console.log(`aync/await: found user: id: ${user?.id}, name: ${user?.name}, role: ${user?.role}`)
    } catch (err: any) {
        console.log(`aync/await: error: ${err instanceof Error ? err.message : "Unknown error"}`)
    } finally {
        console.log("Search completed");
    }
}

findUserByIdCallback(1);
main(2);