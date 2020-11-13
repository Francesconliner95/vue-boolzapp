var app = new Vue({
    el: '#root',
    data: {
        w_text: '',
        s_text: "",
        c_index: 0,
        array_filtered:[],
        search_none: true,
        isActive: [true,true,true],
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
            /*quando premo il tasto invio entro nella funzione send*/
            /*dove vado a pushare nella directory del mio array il messaggio da me inviato*/
            this.contacts[this.c_index].messages.push({
            /*il messaggio pushato contiene la data di invio che otteniamo attraverso la funzione timeFunction()*/
            date: this.timeFunction(),
            /*il contenuto del messaggios sesso*/
            message: this.w_text,
            /*e lo status sent (inquanto inviato da noi)*/
            status: 'sent'
            })
            /*settiamo la variabile w_text uguale a una stringa vuota per pulirla da messaggio appena inviato*/
            this.w_text="";

            /*successivamente con la funzione setTimeout andiamo a pushare il messaggio di risposta all'utente generato automaticamente */
            setTimeout(function(){
                app.contacts[app.c_index].messages.push({
                /*il messaggio pushato contiene la data di invio che otteniamo attraverso la funzione timeFunction()*/
                date: app.timeFunction(),
                /*il contenuto del messaggios sesso*/
                message: 'ok',
                /*e lo status 'received' (inquanto inviato dal PC)*/
                status: 'received'
                })
            }, 3000);
        },

        addZero(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        },

        timeFunction(){
          var d = new Date();
          var dy = d.getDate();
          var mo = d.getMonth() + 1;
          var y = d.getFullYear();
          var h = this.addZero(d.getHours());
          var m = this.addZero(d.getMinutes());
          var s = this.addZero(d.getSeconds());
          console.log(dy + "/" + mo + "/" + y + " " + h + ":" + m + ":" + s);
          return dy + "/" + mo + "/" + y + " " + h + ":" + m + ":" + s;
        },

        /*Quando premiamo il tasto invio nella ricerca viene chimata la funzione search_send  che ci genererà un array con al suo interno solo i caratteri digitati dall'utente*/
        search_send(){
            this.array_filtered = this.contacts.filter((elemento, index, array)=>{
                /*settiamo le due stringhe da confrontare entrambe in minuscolo*/
                var name = this.contacts[index].name.toLowerCase();
                var name_s = this.s_text.toLowerCase();
                /*la funzione search ci restituirà un numero positivo che corrisponderà alla posizione in cui si trova il carattere digitato, negativo se inesistente*/
                console.log(name.search(name_s));
                return name.search(name_s) != -1;
            });
            console.log(this.array_filtered);
            /*al termine della ricerca settiamo la variabile search_none= false in quanto la ricerca è attiva (si disattiverà(true) in automatico quando non ci saranno più caratteria allinterno dell'input(<div :class="search_none == true || s_text == '' ? display_none=true : 'd-none'" class="contacts">))*/
            this.search_none= false;
        },

        toggleClass(index){
            // if(this.isActive[indice]==undefined){
            //     this.isActive[indice]=false;
            // }
            // else{
                this.isActive[index] = !this.isActive[index];
            // }

            console.log(index);
            console.log(this.isActive);
        },

        delate(indice){
            console.log(this.c_index);
            if(this.contacts[this.c_index].messages.lenght!=1){
                this.contacts[this.c_index].messages.splice(indice, 1);
                console.log('if');
            }
            else {
                console.log('else');
            }
            console.log(this.contacts[this.c_index].messages);
        }

    },

})
