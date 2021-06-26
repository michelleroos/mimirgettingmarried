export const signUp = (user) => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: {
            user: {
                email: user.email,
                password: user.password
            }
        }
    })
}

export const logIn = (user) => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: {
            user: {
                email: user.email,
                password: user.password
            }
        }
    })
}

export const logOut = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
}