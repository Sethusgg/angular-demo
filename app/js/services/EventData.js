eventsApp.factory('eventData', function(){
    return{
        event: {
            name: 'Angular Boot Camp',
            date: '1/1/2018',
            time: '10:30am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [{
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: "You will be learning the ins and outs of directives, from beginning to end.",
                    upVoteCount: 0

                },
                {
                    name: 'Scopes for profit and fun',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'You will be taking a closer look at scopes and how to properly use them for fun and to make you some money!',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved Controllers',
                    creatorName: 'Rob Bob',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything that angular does.',
                    upVoteCount: 0
                }
            ]
        }
    };

});