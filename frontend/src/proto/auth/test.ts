const {LoginRequest} = require('./auth_pb.js');
const {AuthClient} = require('./auth_grpc_web_pb.js')

const authClient = new AuthClient("localhost:8080", null, null)

const request = new LoginRequest();
request.setPassword('World');
request.setEmail('World');

authClient.login(request, {}, (err, response) => {
    console.log("CALL GRPC")
    if (err) {
        console.log(`Unexpected error for sayHello: code = ${err.code}` +
            `, message = "${err.message}"`);
    } else {
        console.log(response.getMessage());
    }
});
