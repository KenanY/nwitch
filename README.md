# nwitch

[![Dependency Status](https://gemnasium.com/KenanY/nwitch.png)](https://gemnasium.com/KenanY/nwitch)

nwitch is a [TwitchTV](http://www.twitch.tv/) bot written in JavaScript and
designed to work in [Node.js](http://nodejs.org/).

  - **Full control.** You control your bot. Any of the current services that
  host bots could disappear tomorrow. What would you do then? nwitch will be
  around as long as you are, since it doesn't have to pay bills by begging for
  donations or placing advertisements in its interface.
  - **As fast as that new graphics card of yours.** nwitch doesn't have to split
  its resources across hundreds of channels like other bots. This allows nwitch
  to run as efficiently as possible, which means faster spam detection and
  quicker disciplinary actions.
  - **Modular.** Only download and execute what you need for your channel. This
  results in faster startup times and no cluttered interfaces, which gives you
  more time for streaming.
  - **Open-source.** Why give a closed-source bot moderation privileges? You
  don't know when the author could go rogue! nwitch's complete source code can
  be viewed and audited, which makes it more trustworthy than any other bot out
  there (if you read the source, of course).
  - **Diabetic-friendly.** No syntax sugar from CoffeeScript or the like to
  get in the way of the underlying JavaScript. This allows nearly anyone to
  write plugins for nwitch. nwitch's open plugin ecosystem makes it the most
  powerful chat moderation bot around.

Currently, nwitch is in early development. There are no guarantees that anything
is working at any particular point in time.

## Installation

First, install nwitch globally.

``` bash
$ npm install -g nwitch
```

This will add the `nwitch` command to your path. Now, create a folder for your
bot's configuration file and database to live in.

``` bash
$ mkdir nwitch_folder
$ cd nwitch_folder
```

Then, install nwitch to this folder.

``` bash
$ npm install nwitch
```

## Usage

Being a self-hosted bot, nwitch requires a bit more effort to set up than other
bots.

### Configuration

Create a new TwitchTV account for your bot. Preferably, the username should make
it clear to your viewers that the account is a bot.

Then, create a configuration file through nwitch:

``` bash
$ nwitch init
```

As of September 17, 2013, TwitchTV now requires an OAuth token in order to log
into the IRC of a channel. Since nwitch does use IRC for chat moderation, you
will need to generate this OAuth token. Use
[this tool](http://twitchapps.com/tmi/) to generate a token. The entire
token (including `oauth:`) should be your `account.password` in `config.toml`.

### Initializing

You must run nwitch every time you start streaming, and leave it running in the
background throughout your streaming session. From within your nwitch folder,
just run the `nwitch` command.

``` bash
$ nwitch
```

You will then find nwitch's dashboard by going to <http://localhost:3001>
(unless you changed `server.port` in `config.toml`).

There is no reason to keep nwitch running while you're not streaming. As such,
you are free to terminate it when you're done streaming.

## FAQ

The following is a compilation of questions I expect to receive.

### Does it work on Windows?

Of course! In fact, nwitch was created specifically for Windows, because Windows
is the standard OS for gaming.

### Can it moderate multiple channels?

Unfortunately, each individual nwitch process is designed around managing only
one channel at a time. To manage multiple channels, you would need to run
multiple instances of nwitch on different ports.

### How do I know nwitch doesn't transmit the bot's account credentials to you?

If you read the source code you'll see that no information is transmitted to me.

### Isn't it dangerous to store the account credentials in plaintext?

Yes, and this will hopefully change in the future. If an attacker did get the
credentials, the worst they could do is timeout your viewers (which you can
revert).

### Is there a hosted version?

No; nwitch was conceived as a self-hosted bot. There is no reason to have a
hosted version that runs 24/7, because the features it provides are only useful
while you're streaming.