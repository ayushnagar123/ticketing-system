process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Show = require('./../app/models/show');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let moment = require('moment-timezone');

chai.use(chaiHttp);

describe('Tickets', () => {
  describe('/GET tickets', () => {
      it('it should GET ticket details', (done) => {
        chai.request(server)
            .get('/tickets/?ticketId=1')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('object');
              done();
            });
      });
  });

  /*
  * Test the /POST route
  */
  describe('/POST tickets', () => {
      it('it should POST a show with token', (done) => {
          let show = {
              date:{
                  day:31,
                  month:8,
                  year:2020,
                  hours:20,
                  minutes:0
              },
              hallNumber:2,
              showNumber:1,
              phoneNumber:"9717504706",
              name:"Ayush Nagar",
              people:2
          }
        chai.request(server)
            .post('/tickets/create')
            .set({"token":"LFBDvimC8YzDTZvtzKJrrT","refreshToken" : "dsFzGTNZYowo2Tt0ik9Yux3aIemnmX7qawaUdHny7gG"})
            .send(show)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.message.should.be.a('String');
              done();
            });
      });

  });

  describe('/PATCH tickets', () => {
      var now = new Date();
    //   now = moment(now);
    it('it should PATCH a ticket with token', (done) => {
        let show = {
            hallNumber:2,
            date:now,
            showNumber:1,
            phoneNumber:"9717504706",
            name:"Ayush Nagar",
            people:3,
            ticketId:4
        }
      chai.request(server)
          .patch('/tickets')
          .set({"token":"LFBDvimC8YzDTZvtzKJrrT","refreshToken" : "dsFzGTNZYowo2Tt0ik9Yux3aIemnmX7qawaUdHny7gG"})
          .query(show)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.message.should.be.a('String');
            done();
          });
    });

});
});
