// import * as dayjs from 'dayjs'

var app = new Vue({
    el: '#app',
    data: {
        activeChat: 0,
        msgTime: '',
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
              chatLog: [
                      {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Ricordati di stendere i panni',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 16:15:22',
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
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Samuele',
              picture: 'img/avatar_3.jpg',
              lastAccess: '',
              lastMsg: '',
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Alessandri B.',
              picture: 'img/avatar_4.jpg',
              lastAccess: '',
              lastMsg: '',
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Alessandro L.',
              picture: 'img/avatar_5.jpg',
              lastAccess: '',
              lastMsg: '',
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Claudia',
              picture: 'img/avatar_6.jpg',
              lastAccess: '',
              lastMsg: '',
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Sofia',
              picture: 'img/avatar_io.jpg',
              lastAccess: '',
              lastMsg: '',
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ]
            },
            {
              name: 'Davide',
              picture: 'img/avatar_8.jpg',
              lastAccess: '',
              lastMsg: '',
              chatLog: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
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
            return dayjs(log.date, "DD/MM/YYYY HH:mm:ss").format("HH:mm")
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
        }
    },
    created() {
        this.getLastAccess();
        this.getLastMsg();
    }
  })