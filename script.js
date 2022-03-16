// import * as dayjs from 'dayjs'

var app = new Vue({
    el: '#app',
    data: {
        filter: '',
        activeChat: 0,
        msgTime: '',
        newMsg: {
            date: '',
            message: '',
            status: 'sent'
        },
        replyMsg: {
            date: dayjs(),
            status: 'recived',
            message: 'Ok',
        },
        userData: {
          name: 'Federico',
          picture: 'img/avatar_7.jpg',
        },
        contacts: [
            {
              name: 'Michele',
              picture: 'img/avatar_1.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                      {
                      date: '2022-03-15T15:30:53',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                      },
                      {
                          date: '2022-03-15T15:50:53',
                          message: 'Ricordati di stendere i panni',
                          status: 'sent'
                      },
                      {
                          date: '2022-03-15T16:03:53',
                          message: 'Tutto fatto!',
                          status: 'received'
                      }
                  ]
            },
            {
              name: 'Fabio',
              picture: 'img/avatar_2.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T10:30:53',
                message: 'Domenica vieni in montagna?',
                status: 'sent'
                },
                {
                    date: '2022-03-15T13:46:53',
                    message: 'No, sono malato :c',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Samuele',
              picture: 'img/avatar_3.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T15:17:23',
                message: 'Sto gia iniziando a finire le idee',
                status: 'sent'
                },
                {
                    date: '2022-03-15T17:30:53',
                    message: 'Guarda conoscnedoti...',
                    status: 'recived'
                },
                {
                    date: '2022-03-15T17:31:00',
                    message: 'E gia tanto che ne hai cambiato uno',
                    status: 'recived'
                }
            ]
            },
            {
              name: 'Alessandro B.',
              picture: 'img/avatar_4.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T19:30:53',
                message: 'Aiuto.',
                status: 'sent'
                },
                {
                    date: '2022-03-15T19:35:11',
                    message: 'Non so come aiutarti',
                    status: 'recived'
                },
            ]
            },
            {
              name: 'Alessandro L.',
              picture: 'img/avatar_5.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T11:30:53',
                message: 'Ma quanti siete',
                status: 'sent'
                },
                {
                    date: '2022-03-15T11:45:53',
                    message: 'Se intendi quanti Alessandi allora siamo 2',
                    status: 'recived'
                },
                {
                    date: '2022-03-15T11:47:53',
                    message: 'Se intendi i contatti dovresti saperlo tu...',
                    status: 'received'
                },
                {
                    date: '2022-03-15T11:48:53',
                    message: 'hai creato tu la struttura dati',
                    status: 'recived'
                },
            ]
            },
            {
              name: 'Claudia',
              picture: 'img/avatar_6.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T20:35:23',
                message: 'Ma sbaglio o non stai piu cambiando gli orari di invio?',
                status: 'recived'
                },
                {
                    date: '2022-03-15T20:40:55',
                    message: 'Ti prego stai zitta',
                    status: 'sent'
                },
                {
                    date: '2022-03-15T20:41:13',
                    message: "Sai gia che dovrai cambiarle comunque perche' ti serviranno come key del v-for, vero?",
                    status: 'recived'
                },
                {
                    date: '2022-03-15T20:42:05',
                    message: 'AAAAAAAAAAAAHHHH',
                    status: 'sent'
                },
            ]
            },
            {
              name: 'Sofia',
              picture: 'img/avatar_io.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T13:07:23',
                message: 'Sofia, Claudia mi bullizza, dille qualcosa',
                status: 'sent'
                },
                {
                    date: '2022-03-15T23:30:53',
                    message: 'Veditela da solo io sto giocando a Elden Ring',
                    status: 'received'
                },
                {
                    date: '2022-03-15T23:57:53',
                    message: 'Tanto Goldrick non lo batterai mai',
                    status: 'sent'
                    }
            ]
            },
            {
              name: 'Davide',
              picture: 'img/avatar_8.jpg',
              lastAccess: '',
              lastMsg: '',
              hidden: false,
              chatLog: [
                {
                date: '2022-03-15T08:30:53',
                message: "Ti voglio bene, sai perche'?",
                status: 'sent'
                },
                {
                    date: '2022-03-15T09:00:53',
                    message: 'No',
                    status: 'recived'
                },
                {
                    date: '2022-03-15T10:11:38',
                    message: "Perche' sei l'ultimo",
                    status: 'sent'
                }
            ]
            },
        ],
    },
    methods: {
        openChat(index) {
            this.activeChat = index;
        },
        getSentTime(log) {
            return dayjs(log.date).format("HH:mm")
        },
        getLastAccess() {
            this.contacts.forEach(contact => {
                const lastLog = contact.chatLog[contact.chatLog.length - 1];
                contact.lastAccess = this.getSentTime(lastLog);
            });
        },
        getLastMsg() {
            this.contacts.forEach(contact => {
                contact.lastMsg = contact.chatLog[contact.chatLog.length - 1].message;
            });
        },
        reply() {
            this.contacts[this.activeChat].chatLog.push({...this.replyMsg});
        },
        sendMsg() {
            this.newMsg.date = dayjs();
            this.contacts[this.activeChat].chatLog.push({...this.newMsg});
            this.newMsg.message = '';
            setTimeout(this.reply, 2000);
        },
        filterContacts() {
            this.contacts.forEach(contact => {
               if (!contact.name.toLowerCase().includes(this.filter.toLowerCase())){
                    contact.hidden = true;
               }else {
                contact.hidden = false;
               }
            })
        }
    },
    created() {
        this.getLastAccess();
        this.getLastMsg();
    },
    updated() {
        this.getLastAccess();
        this.getLastMsg();
    }
  })