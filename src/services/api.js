import axios from 'axios';

//10.0.2.2 - Emulador do Android Studio
//10.0.3.2 - Emulador do Genymotion
//localhost - iOS

const api = axios.create({
    baseURL: 'http://10.0.3.2:3000'
});

export default api;