const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/server')
const expect = chai.expect;
const Category = require('../src/models/category');
const User = require('../src/models/user');
chai.use(chaiHttp);


describe('categories', () => {
    beforeEach((done) => {
        Category.deleteMany({}).then(() => done());
    })
    it('get all', (done) => {
        chai.request(app)
        .get('/api/category')
        .then(response => {
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.equal(0)
            done();
        })
    })
    it('create category', (done) => {
        const categoryName = 'dogs'
        chai.request(app)
        .put('/api/category')
        .send({name:categoryName})
        .then(res1 => {
            expect(res1).to.have.status(201);
            expect(res1.body.name).to.equal(categoryName)
            chai.request(app)
                .get('/api/category')
                .then(res2 => {
                    expect(res2.body).to.be.an('array')
                    expect(res2.body.length).to.equal(1)
                    expect(res2.body[0].name).to.equal(categoryName)
                    done();
                })
        })
            
    })
    describe('register', () => {
        beforeEach((done) => {
            User.deleteMany({}).then(() => done());
        })
        it('register', (done) => {
        chai.request(app)
        .put('/api/user')
        .send({
            email:"yossi@gmail.com", 
            name:"yossi",
            password:"121212",
            age:22
                }).then(res1 => {
                expect(res1).to.have.status(201)
                expect(res1.body.name).to.equal("yossi")
                expect(res1.body.email).to.equal("yossi@gmail.com")
                expect(res1.body.password).to.be.equal("121212")
                expect(res1.body.age).to.be.equal(22)
                done();
                })
            })
        })
    })

