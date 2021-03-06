var app = new Vue({
    el: '#root',
    data: {
        w_text: '',
        s_text: "",
        c_index: 0,
        array_filtered:[],
        search_none: true,
        random_word: [  'Ciao','Io sto bene tu?',':)','Cosa mi dici di bello?', 'AHAHAHAHAH'],

        contacts:   [
                        {
                        name: 'Michele',
                        avatar: '1',
                        messages: [
                                    {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Hai portato a spasso il cane?',
                                    status: 'sent',
                                    menu: false,
                                    },
                                    {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Ricordati di dargli da mangiare',
                                    status: 'sent',
                                    menu: false,
                                    },
                                    {
                                    date: '10/01/2020 16:15:22',
                                    message: 'Tutto fatto!',
                                    status: 'received',
                                    menu: false,
                                    }
                                ],
                        },
                        {
                        name: 'Fabio',
                        avatar: '2',
                        messages: [
                                    {
                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent',
                                    menu: false,
                                    },
                                    {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received',
                                    menu: false,
                                    },
                                    {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa',
                                    status: 'received',
                                    menu: false,
                                    }
                                ],
                        },
                        {
                        name: 'Batman',
                        avatar: '3',
                        messages: [
                                    {date: '28/03/2020 10:10:40',
                                    message: 'Sono l\'eroe che Gotham merita, ma non quello di cui ha bisogno adesso',
                                    status: 'received',
                                    menu: false,
                                    },
                                    {
                                    date: '28/03/2020 10:20:10',
                                    message: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent',
                                    menu: false,
                                    },
                                    {
                                    date: '28/03/2020 16:15:22',
                                    message: 'Ah scusa!',
                                    status: 'received',
                                    menu: false,
                                    }
                                ],
                        },
                        {
                        name: 'Luisa',
                        avatar: '4',
                        messages: [
                                    {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent',
                                    menu: false,
                                    },
                                    {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Si, ma preferirei andare al cinema',
                                    status: 'received',
                                    menu: false,
                                    }
                                ],
                        },
                    ]
        },
    methods: {

        set_contact(n_avatar,indice){
            /*ci passiamo come parametro il numero dell'avatar e lo utilizziamo per settare il c_index*/

                // devo prendere la posizione del contatto nel mio array utilizzando n_avatar
                /*ciclo ogni elelemento del mio array contacts, se trova corrispondenza con il vallore del mio avatar mi restituisce attraverso indexOf la sua posizione all'interno del array e la memorizza nella variabile pos*/
                var pos = this.contacts.map(function(e) {
                return e.avatar;
                }).indexOf(n_avatar);

                this.c_index=pos;

            this.resetMenu();
            this.autoScroll();
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

            this.autoScroll();

            /*quando inviamo un messaggio cambierà anche la posizione del nostro contatto all'interno dell'array, in quanto dobbiamo visualizzare al primo posto l'ultimo contatto con cui abbiamo chattato*/
            this.refresh_contacts_list();

            /*successivamente con la funzione setTimeout andiamo a pushare il messaggio di risposta all'utente generato automaticamente */
            setTimeout(function(){
                app.contacts[app.c_index].messages.push({
                /*il messaggio pushato contiene la data di invio che otteniamo attraverso la funzione timeFunction()*/
                date: app.timeFunction(),
                /*il contenuto del messaggios sesso*/
                message: app.random_word[Math.floor(Math.random() * 5)],
                /*e lo status 'received' (inquanto inviato dal PC)*/
                status: 'received',

                })

            app.autoScroll();
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

        /*Quando viene chimata la funzione search_send verrà generato un array con al suo interno solo i caratteri digitati dall'utente*/
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

        resetMenu(){
            for (var l = 0; l < this.contacts.length; l++) {
                for (var m = 0; m < this.contacts[l].messages.length; m++) {
                    this.contacts[l].messages[m].menu=false;
                }
            }
        },

        toggleClass(index){
            if(this.contacts[this.c_index].messages[index].menu==true){
                this.resetMenu();
            }
            else {
                this.resetMenu();
                this.contacts[this.c_index].messages[index].menu = true;
            }
        },

        delate(indice){
            console.log(this.c_index);

            // this.contacts[this.c_index].messages.splice(indice, 1);
            // if(this.contacts[this.c_index].messages.length!=1){
                Vue.delete(this.contacts[this.c_index].messages, indice);
            // }
            // else{
            //     console.log('attenzione');
            // }
        },

        autoScroll(){
            setTimeout(function(){
                document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
            }, 100);
        },

        refresh_contacts_list(){
            /*memorizziamo il contatto in una variabile d'appoggio*/
            var change_position = this.contacts[this.c_index];
            /*lo rimuoviamo dall'array*/
            this.contacts.splice(this.c_index, 1)
            /*e lo pushamo all'inizio dell'array nella pos 0*/
            this.contacts.unshift(change_position);
            /*dopo di che andiamo a specificare che il contatto con cui stiamo parlando non si trova piu nella sua vecchia posizione ma in quella 0 */
            this.c_index=0;
        },

    },

    created: function(){

    },

    mounted: function(){
        this.autoScroll();
    },

})
