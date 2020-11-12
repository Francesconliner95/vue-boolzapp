var app = new Vue({
    el: '#root',
    data: {
        w_text: '',
        c_index: 0,
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
        set_contact(indice){
            console.log(indice);
            this.c_index = indice;
        },
        send(){
            console.log('send');
            console.log(this.w_text);
            console.log(new Date());

            function addZero(i) {
              if (i < 10) {
                i = "0" + i;
              }
              return i;
            }

            function myFunction() {
              var d = new Date();
              var y = d.getYear();
              var h = addZero(d.getHours());
              var m = addZero(d.getMinutes());
              var s = addZero(d.getSeconds());
              var time = y + " " + h + ":" + m + ":" + s;
              console.log(time);
              console.log('ciau');
            }

            this.contacts[this.c_index].messages.push({
            date: '10/01/2020 15:50:00',
            message: this.w_text,
            status: 'sent'
            })
            /*settiamo la variabile w_text uguale a una stringa vuota per pulirla da messaggio appena inviato*/
            this.w_text="";

        }
    },
})
