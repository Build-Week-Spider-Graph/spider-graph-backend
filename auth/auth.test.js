const db = require('../database/dbConfig.js');
const Users = require('../users/users-model.js');

const { add, findBy } = require('../users/users-model.js')

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
})

describe('add()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('should insert a user', async function() {
        await add({firstname: 'ben', lastname: 'doe', username: 'bendoe', password: 'bendoe', email: 'ben@doe.com'});
        const users = await db('users');
        expect(users).toHaveLength(1);
    })
    it('should return provided user', async function() {
        user = await add({firstname: 'john', lastname: 'doe', username: 'johndoe', password: 'johndoe', email: 'john@doe.com'});
        expect(user.username).toBe('johndoe');
        expect(user.id).toBeDefined();

    });
});

describe('findBy()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('should find a user', async function() {
        original = await add({firstname: 'john', lastname: 'doe', username: 'johndoe', password: 'johndoe', email: 'john@doe.com'});
        user = await Users.findBy({username: 'johndoe'})
        expect(user).toBeDefined();
        expect(user).toMatchObject([original]);
    })
    it('should return the correct user', async function() {
        original = await add({firstname: 'john', lastname: 'doe', username: 'johndoe', password: 'johndoe', email: 'john@doe.com'});
        user = await Users.findBy({username: 'johndoe'})
        expect(user).toMatchObject([original]);
    })
});
