let API_URL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        API_URL = "http://localhost:3000";
        break;
    case 'tapped-app.herokuapp.com/':
        API_URL = "https://tapped-app-server.herokuapp.com/";
        break;
}

export default API_URL;