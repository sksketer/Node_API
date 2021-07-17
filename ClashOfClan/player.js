const request = require('request')

const playerTag = '#8JJURG28C' //Enter player code

const modifyPlayerTag = '%23'+playerTag.substring(1, playerTag.length).toUpperCase() //formate the player tag
const url = 'https://api.clashofclans.com/v1/players/'+ modifyPlayerTag //add player tag to API
// console.log(url)

request({url: url, headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFmMmQ3NjhjLTA2M2UtNGM4NS05ZDU2LTRlYmRhNzBhOGRmNyIsImlhdCI6MTYyNjE5MTIwOSwic3ViIjoiZGV2ZWxvcGVyL2RmNGQ5NjJiLWQ1YWUtZmM4Yy1hOTk3LTVhOWVmNzEyYjE5YiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ5LjM2LjIxOS44NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.AdgityR_n3KieiD4m_D2oftC1eliKzL8fo3LMQatPKmada5n8XP0S5nKGiIrfdR-R4tJSZJK9p-YUxaw22J4xw' } , json: true}, (error, response) => {

    // Print whole clan information
    // console.log(response.body)

    
    console.log(response.body.name+' from '+response.body.clan.name+' clan which is '+response.body.clan.clanLevel+' level clan')

    let i=0
    console.log('Achievements: ')
    while(i<response.body.achievements.length) {
        console.log('     '+response.body.achievements[i].name+' ('+ response.body.achievements[i].info+') '+'from '+response.body.achievements[i].village+' village')
        const status = (response.body.achievements[i].value > response.body.achievements[i].target) ? 'true' : 'false'
        console.log('      '+'status: '+status)
        i++;
    }
    
})

// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://shazam.p.rapidapi.com/search',
//   qs: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
//   headers: {'x-rapidapi-host': 'shazam.p.rapidapi.com', useQueryString: true}
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });
