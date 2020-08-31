process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Show = require('./../app/models/show');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Shows', () => {
    beforeEach((done) => {
        Show.deleteMany({}, (err) => { 
           done();           
        });        
    });
  describe('/GET shows', () => {
    it('it should GET all tickets of a show', (done) => {
        chai.request(server)
            .get('/shows/getAllTickets')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
                  res.body.data.length.should.be.eql(0);
              done();
            });
      });  
    it('it should GET all upcomming shows', (done) => {
        chai.request(server)
            .get('/shows/upcomming')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
                  res.body.data.length.should.be.eql(0);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('/POST shows', () => {
      it('it should POST a show with admin token', (done) => {
          let show = {
              date:{
                  day:31,
                  month:8,
                  year:2020,
                  hours:20,
                  minutes:0
              },
              hallNumber:2
          }
        chai.request(server)
            .post('/shows/create')
            .set({"token":"TLtjUTbU5a4nNFjNkHgL7N","refreshToken" : "x0Kvi0RF7ZbLJjCiWoKLfTV8vpTs6hDal3oYvKYL0Z3"})
            .send(show)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.data.should.be.a('object');
                //   res.body.data.should.not.be.eql(0);
                //   res.body.errors.should.have.property('pages');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
      
  });
});
