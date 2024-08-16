import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { AuthClient } from '../../proto/auth/genned/auth_grpc_pb';
import * as Proto from '../../proto/auth/genned/auth_pb';

class GrpcClient {
    private auth_client = <AuthClient>{}

    public NewAuthClient = (address : string) => {
        this.auth_client = new AuthClient(
            address,
            grpc.credentials.createInsecure()
        )
    }



}


export const NewGrpcAuthClient = (address : string) : AuthClient => {
    return new AuthClient(
        address,
        grpc.credentials.createInsecure()
    )
}