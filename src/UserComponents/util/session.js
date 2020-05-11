export const signup = user => (
    fetch("http://localhost:5000/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
);

export const login = user => (
    fetch("http://localhost:5000/api/session", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
);

export const logout = () => (
    fetch("http://localhost:5000/api/session", {method: "DELETE"})
);