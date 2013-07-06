module.exports = query
module.exports.query = query
module.exports.debug = true
module.exports.save = function () {
  if (module.exports.debug) {
    console.log("Lol, yeah, your data is 'saved'.")
  }
}

var Writable = require("stream").Writable
if (!Writable) {
  Writable = require("readable-stream/writable")
}
var meter = require("stream-meter")
var timegap = require("timegap")
var util = require("util")
var fs = require("fs")

function query(regex, cb) {
  var r = fs.createReadStream("/dev/urandom")
  var ws = MonkeyTypewriter(regex)
  var m = meter(module.exports.max)
  m.on("error", function (e) {
    if (module.exports.debug) {
      console.log("How do you expect to get your data out if you don't let me exhaustively look for it?")
    }
    return cb()
  })
  ws.on("error", function (e) {
    if (module.exports.debug) {
      var elapsed = timegap.diff_to_ms(start, Date.now(), 6)
      console.log("I found your results, and it only took %s bytes and %s!", m.bytes, elapsed)
    }
    return cb(e.data)
  })

  var start = Date.now()
  r.pipe(m).pipe(ws)
}

function MonkeyTypewriter(regex) {
  if (!(this instanceof MonkeyTypewriter)) return new MonkeyTypewriter(regex)
  Writable.call(this)
  this.regex = regex
}
util.inherits(MonkeyTypewriter, Writable)

MonkeyTypewriter.prototype._write = function (chunk, encoding, cb) {
  // Yeah, so this doesn't match across read frames. Monkeys aren't perfect.
  var m = chunk.toString().match(this.regex)
  if (m) {
    var results = new Error("FOUND IT!")
    results.data = m[0]
    return cb(results)
  }
  return cb()
}
