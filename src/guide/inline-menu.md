# Inline Menu

Inline menu is menu buit with inline buttons. It was specially designed for handle many menu. There is a simple example:

```js
const { InlineMenu } = require('@libtelegram/helpers');

const pressed = (usr) => {
  usr.reply('Hello!');
};

const menu = InlineMenu({
  Id: 'menu',
  Text: 'Tap the button below to receive a\
    greeting in response 👇',
}, [
  [['👋 Hello', pressed]]
]);

bot.use('menu', menu);

bot.command('start', (usr) => usr.scene('/menu'));
```

## Syntax

`InlineMenu` function takes 2 parameters, the first is the options object for the message and the scene, and the second is the arrays of buttons arrays for the menu.

```js
const menu = InlineMenu({
  Id: 'MainMenu',
  Text: '👋 Hello! <i>Can I help you?</i>',
  More: {
    parse_mode: 'HTML',
    disable_notification: true
  }
}, [
  [['🍽 Food menu', food_menu]]
  [['🛒 Basket | 0', basket]],
  [['🌐 Change language', change_language]]
  [['✨ About us', about], ['💞 Share bot', share]]
]);
```

The function creates a new instance of `Scene`, it means you can add your own handlers. In following example if you send to bot `/back` command then you will be redirected to the parent scene:

```js
const { InlineMenu, back } = require('@libtelegram/helpers');

const menu = InlineMenu(/*...*/);

menu.command('back', back);
```

## Menu with photo

There is another type of menu with photo:

```js{5}
// Menu with photo and caption
const cat_menu = InlineMenu({
  Id: 'menu',
  Text: 'What the cats say?',
  Photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/1280px-Cat_poster_1.jpg'
}, [
  [['🐾 Meow', handler]]
]);
```

## Switch between menu

To switch between menu just place menu scene as handler in button list

```js{3,15}
const { InlineMenu, back } = require('@libtelegram/helpers');

const submenu = InlineMenu({
  Id: 'submenu',
  Text: 'How do you feel yourself?',
}, [
  [['😡', angry], ['☺️', happy], ['😰', cold]],
  [['◀️ Back', back]]
]);

const menu = InlineMenu({
  Id: 'menu',
  Text: 'Hey, do you have a minute?',
}, [
  [['👌 Yes', submenu]]
]);
```

::: warning

When you switch between the photo menu and normal one, the message will be deleted and sent again due to the inability to add/remove a photo from the message.

:::
