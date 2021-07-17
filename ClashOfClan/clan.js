const request = require('request')

const clanTag = '#C0PVLP8V' //Enter clan tag

const modifyClanTag = '%23'+clanTag.substring(1, clanTag.length).toUpperCase() //formate the clan tag
const url = 'https://api.clashofclans.com/v1/clans/'+ modifyClanTag //add clan tag to API

request({url: url, headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFmMmQ3NjhjLTA2M2UtNGM4NS05ZDU2LTRlYmRhNzBhOGRmNyIsImlhdCI6MTYyNjE5MTIwOSwic3ViIjoiZGV2ZWxvcGVyL2RmNGQ5NjJiLWQ1YWUtZmM4Yy1hOTk3LTVhOWVmNzEyYjE5YiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ5LjM2LjIxOS44NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.AdgityR_n3KieiD4m_D2oftC1eliKzL8fo3LMQatPKmada5n8XP0S5nKGiIrfdR-R4tJSZJK9p-YUxaw22J4xw' } , json: true}, (error, response) => {
    // Print whole clan information
    console.log(response.body)

    console.log('Clan Name: '+response.body.name+'  '+' Level '+response.body.clanLevel)
    console.log('Type: '+response.body.type)
    console.log('Location : '+response.body.location.name+' ('+response.body.location.countryCode+')')
    console.log()
    console.log(response.body.members+' Clan Members:')
    let i=0
    while(i<response.body.members) {
        console.log('  '+(i+1)+')  '+response.body.memberList[i].name+' ('+response.body.memberList[i].tag+')')
        i++;
    }
    
    
    
})