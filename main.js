var app = new Vue({
    el: '#root',
    data: {
        img: [
            "img/utente_1.png",
            "img/utente_2.png",
            "img/utente_3.png",
            "img/utente_4.png",
        ],
        contacts:   [
                        {
                        name: 'Michele',
                        avatar: '_1',
                        visible: true,
                        messages: [
                                    {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Hai portato a spasso il cane?',
                                    status: 'sent'
                                    },
                                    {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Ricordati di dargli da mangiare',
                                    status: 'sent'
                                    },
                                    {
                                    date: '10/01/2020 16:15:22',
                                    message: 'Tutto fatto!',
                                    status: 'received'
                                    }
                                ],
                        },
                        {
                        name: 'Fabio',
                        avatar: '_2',
                        visible: true,
                        messages: [
                                    {
                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent'
                                    },
                                    {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received'
                                    },
                                    {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa',
                                    status: 'received'
                                    }
                                ],
                        },
                        {
                        name: 'Batman',
                        avatar: '_3',
                        visible: true,
                        messages: [
                                    {date: '28/03/2020 10:10:40',
                                    message: 'Sono l\'eroe che Gotham merita, ma non quello di cui ha bisogno adesso',
                                    status: 'received'
                                    },
                                    {
                                    date: '28/03/2020 10:20:10',
                                    message: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent'
                                    },
                                    {
                                    date: '28/03/2020 16:15:22',
                                    message: 'Ah scusa!',
                                    status: 'received'
                                    }
                                ],
                        },
                        {
                        name: 'Luisa',
                        avatar: '_4',
                        visible: true,
                        messages: [
                                    {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent'
                                    },
                                    {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Si, ma preferirei andare al cinema',
                                    status: 'received'
                                    }
                                ],
                        },
                    ]
        },
    methods: {
        // add_item: function(){
        //     this.array_items.push(this.item);
        //     console.log(this.array_items);
        // },
        // remove_item: function(item){
        //     console.log(item);
        //     /*con la funzione splice abbiamo la possibilità di modificare o sostituire il nostro array, il primo valore corrisponealla posizione sulla quale vogliamo andare ad agire, il secondo valore se settato ad 0 inserisce un elelmento in quella posizione facendo scalare tutti gli altri, se settato ad 1 sostituisce l'elemento con un dato impostato da noi nel terzo valore*/
        //     this.array_items.splice(item, 1);
        //     console.log(this.array_items);
        // },
        // /*creiamo la funzione enter, dve ci passiamo il parametro "keyinput dall'html viene confrontato con il numero 13(valore di invio nella tastiera), se si viene chimata la funzione aggiungi item "*/
        // enter: function(key_input) {
        //     if (key_input.keyCode === 13) {
        //     console.log('entrato');
        //     this.add_item();
        //     }
        // },
    },
})
