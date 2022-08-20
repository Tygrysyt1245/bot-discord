module.exports = {
    name: 'test',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Testowa komenda', //Opis komendy
    usage: '!test',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {
        message.channel.send('To jest testowa komenda') //W nawiasie jest odpowieć bota
    }
}