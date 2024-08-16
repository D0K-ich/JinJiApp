// package: auth
// file: auth/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_auth_pb from "./auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    register: IAuthService_IRegister;
    checkCode: IAuthService_ICheckCode;
    login: IAuthService_ILogin;
}

interface IAuthService_IRegister extends grpc.MethodDefinition<auth_auth_pb.RegisterRequest, auth_auth_pb.RegisterResponse> {
    path: "/auth.Auth/Register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.RegisterResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.RegisterResponse>;
}
interface IAuthService_ICheckCode extends grpc.MethodDefinition<auth_auth_pb.ActivateRequest, auth_auth_pb.ActivateResponse> {
    path: "/auth.Auth/CheckCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.ActivateRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.ActivateRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.ActivateResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.ActivateResponse>;
}
interface IAuthService_ILogin extends grpc.MethodDefinition<auth_auth_pb.LoginRequest, auth_auth_pb.LoginResponse> {
    path: "/auth.Auth/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.LoginResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer extends grpc.UntypedServiceImplementation {
    register: grpc.handleUnaryCall<auth_auth_pb.RegisterRequest, auth_auth_pb.RegisterResponse>;
    checkCode: grpc.handleUnaryCall<auth_auth_pb.ActivateRequest, auth_auth_pb.ActivateResponse>;
    login: grpc.handleUnaryCall<auth_auth_pb.LoginRequest, auth_auth_pb.LoginResponse>;
}

export interface IAuthClient {
    register(request: auth_auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    checkCode(request: auth_auth_pb.ActivateRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.ActivateResponse) => void): grpc.ClientUnaryCall;
    checkCode(request: auth_auth_pb.ActivateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.ActivateResponse) => void): grpc.ClientUnaryCall;
    checkCode(request: auth_auth_pb.ActivateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.ActivateResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public register(request: auth_auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public checkCode(request: auth_auth_pb.ActivateRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.ActivateResponse) => void): grpc.ClientUnaryCall;
    public checkCode(request: auth_auth_pb.ActivateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.ActivateResponse) => void): grpc.ClientUnaryCall;
    public checkCode(request: auth_auth_pb.ActivateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.ActivateResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
