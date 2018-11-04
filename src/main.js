import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/production.css';

Vue.config.productionTip = false;

new Vue({
    router,
    data: {
        persons: [
            {
                "_id": "5bccb1b14ad308a9f6c3a2ae",
                "index": 0,
                "guid": "a5660742-abfb-4052-89a5-661639d23c67",
                "isActive": true,
                "balance": "$2,066.37",
                "picture": "http://placehold.it/32x32",
                "age": 30,
                "eyeColor": "blue",
                "name": "Good Higgins",
                "gender": "male",
                "company": "SOFTMICRO",
                "email": "goodhiggins@softmicro.com",
                "phone": "+1 (870) 530-3633",
                "address": "452 Boerum Place, Ada, Florida, 3587",
                "about": "Duis commodo non esse esse nostrud non consectetur Lorem ullamco ut. Reprehenderit ullamco aliqua ea occaecat magna pariatur minim incididunt elit. Incididunt ea non est deserunt minim tempor excepteur. Consequat id eiusmod aliquip aliquip non. Magna magna fugiat irure est ullamco elit Lorem ullamco aute consectetur non. Qui enim fugiat Lorem adipisicing pariatur. Id ipsum cillum qui est elit dolor cillum incididunt ut irure consectetur eiusmod.\r\n",
                "registered": "2016-10-14T08:08:57 -05:00",
                "latitude": -45.743467,
                "longitude": 51.853495,
                "tags": [
                    "aliqua",
                    "proident",
                    "dolor",
                    "aliquip",
                    "do",
                    "voluptate",
                    "velit"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Joanna Benjamin"
                    },
                    {
                        "id": 1,
                        "name": "Cynthia Coffey"
                    },
                    {
                        "id": 2,
                        "name": "Sosa Wagner"
                    }
                ],
                "greeting": "Hello, Good Higgins! You have 10 unread messages.",
                "favoriteFruit": "strawberry"
            },
            {
                "_id": "5bccb1b1b13bf89fd650e31b",
                "index": 1,
                "guid": "01d82d31-953c-4dd4-9b89-1dce3e5eb3aa",
                "isActive": true,
                "balance": "$1,405.26",
                "picture": "http://placehold.it/32x32",
                "age": 34,
                "eyeColor": "brown",
                "name": "Odonnell Andrews",
                "gender": "male",
                "company": "INEAR",
                "email": "odonnellandrews@inear.com",
                "phone": "+1 (946) 497-2453",
                "address": "545 Voorhies Avenue, Bonanza, Alaska, 3460",
                "about": "In nisi officia fugiat nulla ad commodo ex ea ut exercitation nulla esse quis nulla. Eu officia do nisi quis. Fugiat cillum deserunt duis fugiat dolore tempor culpa do. Labore amet est consequat amet quis mollit. Occaecat consequat anim nulla mollit mollit est ad. Ea amet et eiusmod voluptate dolore deserunt tempor consectetur sint.\r\n",
                "registered": "2015-10-30T03:32:09 -05:00",
                "latitude": -27.978452,
                "longitude": -10.15186,
                "tags": [
                    "nisi",
                    "aute",
                    "non",
                    "nostrud",
                    "ad",
                    "cillum",
                    "adipisicing"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Rosario Elliott"
                    },
                    {
                        "id": 1,
                        "name": "Pickett Sims"
                    },
                    {
                        "id": 2,
                        "name": "Bridges Bryan"
                    }
                ],
                "greeting": "Hello, Odonnell Andrews! You have 6 unread messages.",
                "favoriteFruit": "banana"
            },
            {
                "_id": "5bccb1b183b81dd431d94da3",
                "index": 2,
                "guid": "bf0ec045-bdc5-4778-b32f-2b977e780cda",
                "isActive": true,
                "balance": "$1,661.69",
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "eyeColor": "brown",
                "name": "Lila Petersen",
                "gender": "female",
                "company": "POLARIA",
                "email": "lilapetersen@polaria.com",
                "phone": "+1 (863) 439-2225",
                "address": "219 Amersfort Place, Caln, Kentucky, 1977",
                "about": "Tempor do sit elit commodo irure exercitation. Aliquip ipsum reprehenderit nostrud nostrud cupidatat proident ad occaecat consectetur ullamco non amet sint. Enim occaecat consectetur pariatur mollit ea Lorem aliquip cupidatat. Qui laborum adipisicing velit laboris et sint nostrud anim non. Nulla consectetur minim dolore tempor veniam. Non nisi nulla veniam ad est tempor reprehenderit aliquip sit. Lorem id fugiat quis enim aliqua in deserunt velit in cupidatat.\r\n",
                "registered": "2014-06-15T11:18:01 -05:00",
                "latitude": 15.439122,
                "longitude": -15.940348,
                "tags": [
                    "tempor",
                    "quis",
                    "qui",
                    "veniam",
                    "aliqua",
                    "Lorem",
                    "do"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Cherry Erickson"
                    },
                    {
                        "id": 1,
                        "name": "Aline Flores"
                    },
                    {
                        "id": 2,
                        "name": "Donovan Frederick"
                    }
                ],
                "greeting": "Hello, Lila Petersen! You have 10 unread messages.",
                "favoriteFruit": "banana"
            },
            {
                "_id": "5bccb1b1b9e97d647012f50e",
                "index": 3,
                "guid": "f6f7dcb6-20c2-4019-92a7-ffa098b619d6",
                "isActive": false,
                "balance": "$1,664.91",
                "picture": "http://placehold.it/32x32",
                "age": 32,
                "eyeColor": "blue",
                "name": "Fitzgerald Clarke",
                "gender": "male",
                "company": "VURBO",
                "email": "fitzgeraldclarke@vurbo.com",
                "phone": "+1 (920) 572-2203",
                "address": "874 Jackson Place, Chemung, Ohio, 7652",
                "about": "Id ex in incididunt id amet consequat. Sunt ea ipsum officia nostrud dolor anim magna laborum sunt labore ea dolore officia excepteur. Proident nisi reprehenderit quis ea quis sunt aliqua dolor proident consectetur elit. Et laborum velit eiusmod ex ea voluptate veniam. Minim cupidatat ut laboris commodo non laborum reprehenderit veniam laboris ipsum esse.\r\n",
                "registered": "2017-02-09T05:31:28 -05:00",
                "latitude": 24.223993,
                "longitude": -118.937428,
                "tags": [
                    "non",
                    "irure",
                    "tempor",
                    "non",
                    "occaecat",
                    "dolore",
                    "culpa"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Stark Stanton"
                    },
                    {
                        "id": 1,
                        "name": "Holly Cardenas"
                    },
                    {
                        "id": 2,
                        "name": "Schultz Peck"
                    }
                ],
                "greeting": "Hello, Fitzgerald Clarke! You have 6 unread messages.",
                "favoriteFruit": "apple"
            },
            {
                "_id": "5bccb1b190c81a692cc5c8e0",
                "index": 4,
                "guid": "aa29e887-91d2-4a0b-8822-302db9f31128",
                "isActive": false,
                "balance": "$3,749.03",
                "picture": "http://placehold.it/32x32",
                "age": 32,
                "eyeColor": "blue",
                "name": "Patty Ortiz",
                "gender": "female",
                "company": "MINGA",
                "email": "pattyortiz@minga.com",
                "phone": "+1 (853) 414-3787",
                "address": "990 Schweikerts Walk, Belleview, Guam, 8110",
                "about": "Irure magna culpa voluptate deserunt nulla incididunt deserunt aliqua Lorem minim velit nostrud officia. Nisi cillum mollit ut tempor nostrud laboris nostrud. Mollit consectetur nisi aliquip et mollit anim laboris cupidatat adipisicing ea laborum. Eu tempor aute amet dolore do id enim sint excepteur. Elit adipisicing sunt ullamco ex excepteur mollit consequat occaecat quis ex pariatur do nisi laboris. Ipsum exercitation non labore dolor qui adipisicing.\r\n",
                "registered": "2016-01-12T09:42:15 -05:00",
                "latitude": -52.107022,
                "longitude": 105.568915,
                "tags": [
                    "elit",
                    "ea",
                    "pariatur",
                    "adipisicing",
                    "proident",
                    "ullamco",
                    "non"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Hill Reynolds"
                    },
                    {
                        "id": 1,
                        "name": "Castro Brock"
                    },
                    {
                        "id": 2,
                        "name": "Dollie Foster"
                    }
                ],
                "greeting": "Hello, Patty Ortiz! You have 4 unread messages.",
                "favoriteFruit": "banana"
            }
        ]
    },
    render: h => h(App),
}).$mount('#app');
