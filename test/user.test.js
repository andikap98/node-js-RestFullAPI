import supertest from "supertest";
import { web } from '../src/application/web.js'

describe('POST /api/users', function () {
    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'andika',
                password: 'rahasia',
                name: "andika permana putra"
            });
        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe('andika')
        expect(result.body.data.name).toBe('andika permana putra')
        expect(result.body.data.password).toBeUndefined()
    })
})