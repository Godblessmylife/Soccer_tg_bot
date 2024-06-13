const TelegramBot = require(`node-telegram-bot-api')

const TOKEN = '7428631680:AAGMkgYCV4ORZ2VbtaqBldxNvJKEoiHQNkY'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello This Is First Soccer Game on Telegram, bot says: "Hi, ${msg.from.first_name}"')
})