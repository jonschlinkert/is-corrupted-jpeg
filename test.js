'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var fixture = path.join.bind(path, __dirname, 'fixtures');
var isCorrupted = require('./');

describe('is-corrupted-image', function() {
  it('should return true if an image is corrupted', function() {
    assert(isCorrupted(fixture('corrupted.jpg')));
  });

  it('should return false if an image is not corrupted', function() {
    assert(!isCorrupted(fixture('image.jpg')));
  });
});
