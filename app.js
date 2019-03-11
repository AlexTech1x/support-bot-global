const Telegraf = require('telegraf')
const {Router, Markup} = Telegraf

const config = require("./config.json")
const bot = new Telegraf(config.token)

// Start Language Pick \\
const languageKeyboard = Markup.inlineKeyboard([
    Markup.callbackButton('🇷🇺 Русский', 'rus'),
    Markup.callbackButton('🇬🇧 English', 'eng'),
    Markup.callbackButton('🇫🇷 Français', 'fra')
]).extra()
bot.start((ctx) => ctx.reply(
    'Ваш язык?  |  Your language?  |  Votre langue?',
    languageKeyboard)
)
bot.action('rus', (ctx) => ctx.editMessageText('Здравствуйте, Вас приветствует поддержка 1xPartners. Укажите, пожалуйста, свой email и ID (при наличии) и опишите свой вопрос:'))
bot.action('eng', (ctx) => ctx.editMessageText('Hello, welcome to 1xPartners Support. Please share with us your email and ID (if you have one) and ask your question:'))    
bot.action('fra', (ctx) => ctx.editMessageText('Bonjour, nous sommes le service support de 1xPartners. Indiquez s’il vous plait votre adresse e-mail et votre ID (si vous le savez) et decrivez votre question ou bien votre problème:'))
// Start Language Pick \\

// Non-working Hours Answer \\



// Non-working Hours Answer \\

bot.launch();