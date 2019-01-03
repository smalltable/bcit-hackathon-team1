function newUserDatabase() {
    firebase.auth().onAuthStateChanged(function(user) {
        firebase.database().ref("users/" + user.uid).update({
            "name": user.displayName,
            "email": user.email,
            "eduPoints": 0,
            "fitPoints": 0,
            "healthPoints": 0,
        });
    })
}

// adds user to database
(function(){

    var firebase = app_firebase;
    // for the currently authenticated firebase user
    // create your own "user" node in the datebase using 
    // the firebase generated "uid"
    
    firebase.auth().onAuthStateChanged(function(user){
        if (firebase.auth().currentUser.metadata.creationTime 
        == firebase.auth().currentUser.metadata.lastSignInTime) {
            firebase.database().ref("users/"+user.uid).update(
            {
             "name":user.displayName, 
             "email":user.email,
             "eduPoints":0,
             "fitPoints":0,
             "healthPoints":0
            });
        }
        
    });
    
    
})()