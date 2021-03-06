var Nwitch = require('../');
var test = require('tape');
var ircd = require('ircd');

var irc;

test('setup', function(t) {
  irc = ircd.createServer({name: 'localhost'});
  irc.listen(51402);
  t.end();
});

test('joins channel', function(t) {
  t.plan(2);

  irc.on('channel', function(channel) {
    channel.on('join', function(user) {
      t.equal(user.nick, 'kenan');
      t.equal(channel.name, '#nwitch');
      n.quit();
    });
  });

  var n = new Nwitch({
    irc: {
      address: 'localhost',
      port: 51402
    },
    account: {
      username: 'kenan',
      password: '',
      channel: 'nwitch'
    }
  });
});

test('cleanup', function(t) {
  irc.close();
  t.end();
});