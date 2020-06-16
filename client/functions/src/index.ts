import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import axios from 'axios';
admin.initializeApp(functions.config().firebase);

exports.testFunctions = functions.https.onCall((req, res) => {
    console.log(`called testFunction with req ${JSON.stringify(req)}`)
    return {message: "response OK"};
});

exports.getSpot = functions.https.onCall((req:any, context:any):any => {
    console.log(`called getSpot`);
    return new Promise((resolve, reject) => {
        const URIRequest = "HTTP://EC2-3-16-22-54.US-EAST-2.COMPUTE.AMAZONAWS.COM/VirtualControl/Rooms/HACKATHON13/cws/hackathon/maze/UUUPJ/navigate";
        
        axios.get(URIRequest, {}).then((res) => {
            console.log(`Success retrieving data`);
            resolve(res.data);
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        });
            
    });
});

exports.moveSpot = functions.https.onCall((req:any, context:any):any => {
    console.log(`called moveSpot`);
    console.log(req);
    return new Promise((resolve, reject) => {
        const move = req.move;

        const URIRequest = "HTTP://EC2-3-16-22-54.US-EAST-2.COMPUTE.AMAZONAWS.COM/VirtualControl/Rooms/HACKATHON13/cws/hackathon/maze/UUUPJ/navigate";
        
        axios.put(URIRequest, move).then((res) => {
            console.log(`Success retrieving data`);
            resolve(res.data);
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        });
            
    });
});