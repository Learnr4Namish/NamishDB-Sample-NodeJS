const axios = require("axios");
const config = {
   URL:"http://192.168.101.4",
   password:"namishdb@official"
}
axios({
    method: 'post',
    url: config.URL + "/fetch",
    data: {
        password:config.password,
        document:"developer",
        collection:"developer",
    }
}).then(res => {
    console.log(res.data.developer);  
});