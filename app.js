// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
// const projectId = 'ivory-link-296418';
// const keyFilename = 'key.json';                                                    
const storage = new Storage();
const bucket = storage.bucket("montri-prod.appspot.com"); 

// bucket.create(function(err,bucket,apiResponse){ // creation du bucket
//     if(!err){
//         console.log("successfully created");
//     }else{
//         console.log(err);
//     }
// });

    //   bucket.upload('mon fichier',(err,files,apiResponse)=>{
    //       console.log(apiResponse);
    //   });

bucket.getFiles({prefix:'NCA/preRessources/'},function(err,files){
    files.forEach(file=>{
        const delimiter = file.name.lastIndexOf("/");
        const filename = file.name.substr(delimiter+1);
        console.log(filename);
        if(filename !== " "){
            storage.bucket("montri-prod.appspot.com")
            .file(file.name)
            .copy(storage.bucket('montri-prod.appspot.com').file("NCA/ressources/"+filename))
        }
    });
});

