import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

function loadNumberFormats() {
    const formats = require.context('./number_formats', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const numbers = {}
    formats.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const format = matched[1]
            numbers[format] = formats(key)
        }
    })
    return numbers
}

function loadDateFormats() {
    const formats = require.context('./date_formats', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const dates = {}
    formats.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const format = matched[1]
            dates[format] = formats(key)
        }
    })
    return dates
}

export default createI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
    numberFormats: loadNumberFormats(),
    datetimeFormats: loadDateFormats()
})