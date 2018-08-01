const request = require('supertest');
const express = require('express');
const app = require('../server/index.js')

describe('Server', () => {
  it('should GET reviews data by Listing id',() => {
    return request(app).get('/1/reviews').then( response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('GET /1/reviews', function () {
  it('respond with json containing a list of all users', function (done) {
      request(app).get('/1/reviews')
          .expect(200, done);
  });
});
