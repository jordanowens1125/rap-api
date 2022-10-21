const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
//use cors so that api and client?????
app.use(cors())


let rappers = {
    '21 savage':{
        'age':29,
        'name':'21 21',
        'birthday':'1/1/1993',
    },
    'chance the rapper':{
        'age':31,
        'name':'Chance',
        'birthday':'1/1/1991',
    },
    'lil wayne':{
        'age':40,
        'name':'Tunechi',
        'birthday':'1/1/1985',
    },
    'unknown':{
        'age':0,
        'name':'unknown',
        'birthday':'unknown'
    }
}
//home page path 
app.get('/',(request,response)=>{
    //look in this directory for server file
    response.sendFile(__dirname+'/index.html')
})

//when a rapper name is included as parameters
app.get('/api/rappers/:rapperName',(request,response)=>{
    const rapName = request.params.rapperName.toLowerCase()
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

//where server listens for request
//function to console port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})