INFINITE MONKEY DB!
===================

This is definitely* the database you're been looking for.

```
npm install infinite-monkey-db
```

FEATURE BULLET LIST
-------------------

  * ZERO storage footprint.
  * It has ALL the letters in CAP. Bet you can't say that about YOUR database.
  * It has ALL the letters in ACID. And it isn't even SQL!
  * Super low memory overhead.
  * Zero possibility of data loss.
  * Transactions! These are a thing that you'd care about with lesser databases.
  * Quantum replication! This isn't actually a thing, but it sounds super fast, right?
  * Asynchronous -- your query may take some time, we're not about to block you from doing other cool stuff.
  * You already know the query language. Well, you do if you know Regular Expressions.

Requirements
------------

  * It probably/definitely won't work unless your system is Unixy.
  * Your system must have at least one CPU.
  * Node.js
  * Patience.

Usage
-----

```javascript
var query = require("infinite-monkey-db")

query(/abc/, function (results) {
  // Notice we didn't even have to insert it first? WEBSCALE!
  console.log(results)
})
```

CLI
---

```bash
$ node -e 'require("infinite-monkey-db")(/abc/, console.log)'
I found your results, and it only took 7995392 bytes and 746ms!
abc
```

Methods
-------

* `require("infinite-monkey-db")(regex, cb)` -- Query for your data! Return it in cb(results)
* `query(regex, cb)` -- (alias to above)
* `save(...)` -- Sure why not?

Options
-------

* `debug`: set to false to disable helpful messages. Why would you want to do that?
* `max`: set to a number to limit the search-space for your results. Reduces the odds of your query's success from 100% to some number less than 100%

```javascript
var q = require("infinite-monkey-db")
q.debug = false
q.max = 1024

q(/Alas, poor Yorick!/, console.log)
```

---

*(not)



LICENSE
=======

[Free as in Hugs License](http://blog.izs.me/post/48281002063/free-as-in-hugs-licence)