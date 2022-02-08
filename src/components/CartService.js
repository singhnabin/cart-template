export const saveUsers = (user) => {
    return fetch("http://localhost:8080/api/users", {
        headers: { 'Content-Type': 'application/json' },
        "method": 'POST',
        body: JSON.stringify(user)

    }).then(res => {
        return res.json();
    }
    ).catch(err => {
        console.log(err)
    })
}

export const loginUser= (user) => {
    return fetch("http://localhost:8080/api/users/login", {
        headers: { 'Content-Type': 'application/json' },
        "method": 'POST',
        body: JSON.stringify(user)

    }).then(res => {
        return res.json();
    }
    ).catch(err => {
        console.log(err)
    })
}