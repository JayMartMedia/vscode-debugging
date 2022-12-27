const users = [
    {
        id: 1,
        name: 'Dave',
        dateOfBirth: '1/21/2001'
    },
    {
        id: 2,
        name: 'Anne',
        dateOfBirth: '7/2/1994'
    },
    {
        id: 3,
        name: 'John',
        dateOfBirth: '3/14/1978'
    },
    {
        id: 4,
        name: 'Janet',
        dateOfBirth: '6/5/2004'
    },
]

function setupUserController(app) {
    app.get('/users', (req, res) => {
        res.send(users);
    });
    app.get('/users/:id', (req, res) => {
        const user = users.find(u => u.id === req.params.id);
        if(!user) return res.sendStatus(404);
        return res.send(user);
    });
}

export default setupUserController;