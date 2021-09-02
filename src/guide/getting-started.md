# Introduction
::: tip Tip
The official guide assumes that you are already familiar with the basics of `NodeJS` and `HTTP API`. If you're a complete newbie to JavaScript, it might not be a good idea to jump straight to the framework. Learn the basics and then come back! Experience with other libraries will help, but it is not necessary
:::

## What is LibTelegram?

LibTelegram (LibTg) is a progressive NodeJS framework for creating Telegram bots. LibTelegram provides a large number of tools for a better application development experience. 

## Getting started
The [Installation page](./installation.html) provides additional options for installing LibTelegram. Note: We **do not** recommend for beginners to start with `libtelegram-cli`, especially if you are not already familiar with Node.js-based build tools. 

## Getting API token
Before we start programming our bot, we need to create it in [BotFather](https://t.me/BotFather) to get a token. To do this, you can follow the official [instructions](https://core.telegram.org/bots#creating-a-new-bot). Token example:

```
123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```

## Simple bot example

Below is the simplest LibTelegram telegram bot that you can create. This is a single file bot, not what you would get if you used `libtelegram-cli`, which creates a framework for a complete application with numerous JavaScript files, templates and subdirectories for various purposes. 

```js
const LibTelegram = require('libtelegram');

const bot = new LibTelegram('<YOUR TOKEN>');

bot.command('start', (usr) => {
  usr.reply(`Hello, ${usr.firstname}!`)
});

bot.start();
```

This bot starts polling the server telegrams and listens for updates. The bot sends a text message with greetings in response to the command `/start`
