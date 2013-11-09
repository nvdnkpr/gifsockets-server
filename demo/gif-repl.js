var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var async = require('async');
var extend = require('obj-extend');

var GifEncoder = require('../lib/gif.js/GIFEncoder');
var imageInfo = require('../lib/image-info');
function noop() {}

// TODO: This should extend from GifEncoder
function GifDuplex(options) {
  // Inherit from EventEmitter
  EventEmitter.call(this);

  // Set up options
  options = options || {};
  var width = options.width || 600;
  var height = options.height || 392;
  this.width = width;
  this.height = height;

  // Output canvas data to gif
  var gif = new GifEncoder(width, height);
  var that = this;

  var activeData = [];
  gif.on('data', function (val) {
    activeData.push(val);
  });
  function outputActiveData() {
    var buffer = new Buffer(activeData);
    activeData = [];
    // TODO: This is here because we writeHeader on init
    process.nextTick(function () {
      that.emit('data', buffer);
    });
  }
  gif.on('writeHeader#stop', outputActiveData);
  gif.on('frame#stop', outputActiveData);
  gif.on('finish#stop', function () {
    outputActiveData();

    gif.on('end', function () {
      that.emit('end');
    });
  });

  // TODO: These should be methods...?
  // Open the gif
  gif.writeHeader();

  // Configure the gif
  // gif.setDelay(100);
  // gif.setRepeat(0);
  gif.setQuality(options.quality || 10);

  // Save gif for methods
  this.gif = gif;
}
GifDuplex.prototype = extend({
  writeTextFrame: function (text, cb) {
    function drawImage(cb) {
      context.font = '30px Impact';
      context.fillStyle = '#FFFFFF';
      context.fillText('TEXT', 50, 100);
      cb(null);
    }

    cb = cb || noop;
    var fn = (drawImage + '')
              .replace('TEXT', text)
              .replace('function drawImage(cb) {', '')
              .replace(/\}$/, '');

    // TODO: Performance improvment: phantomjs HTTP server
    // Dodges starting a new process each time
    // Prevents EMFILE (file descriptor limit)

    var that = this;
    imageInfo({
      width: this.width,
      height: this.height,
      js: fn
    }, function parseFrameInfo (err, unparsedJson) {
      if (err) {
        return cb(err);
      }

      // TODO: Can imageInfo stream out smaller chunks of data?
      var dataArr = JSON.parse(unparsedJson);
      that.gif.addFrame(dataArr);

      cb(null);
    });
  },
  finish: function () {
    this.gif.finish();
  }
}, EventEmitter.prototype);

if (module.parent === null) {
  var stream = fs.createWriteStream(__dirname + '/test-repl.gif');
  var gifDuplex = new GifDuplex();

  async.eachSeries([
    'Hello',
    'Hello World',
    'Hello World!',
    'Hello World!!!'
  ], function addTextFrame (text, cb) {
    gifDuplex.writeTextFrame(text, cb);
  }, function handleTextError (err) {
    if (err) {
      throw err;
    }

    // Complete the gif
    gifDuplex.finish();
  });

  gifDuplex.on('data', function (buff) {
    stream.write(buff);
  });
}