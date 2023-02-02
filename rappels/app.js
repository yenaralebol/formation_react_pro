function getLaunchId(response){
    if(response.ok){
        console.log("ok");
        console.log(response.json());
    } else {
        console.log("error");
        console.log(response.json);
    }
    //console.log(response);
    return"salut";
}

fetch('https://api.spacexdata.com/v4/launches/latest')
    .then(getLaunchId)
    .then((x) => console.log(x));
