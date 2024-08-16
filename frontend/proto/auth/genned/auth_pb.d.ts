// package: auth
// file: auth/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RegisterRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): RegisterRequest;
    getPassword(): string;
    setPassword(value: string): RegisterRequest;
    getNickname(): string;
    setNickname(value: string): RegisterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterRequest;
    static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
    export type AsObject = {
        email: string,
        password: string,
        nickname: string,
    }
}

export class RegisterResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): RegisterResponse;
    getUserUuid(): string;
    setUserUuid(value: string): RegisterResponse;
    getErr(): string;
    setErr(value: string): RegisterResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterResponse;
    static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
    export type AsObject = {
        status: string,
        userUuid: string,
        err: string,
    }
}

export class ActivateRequest extends jspb.Message { 
    getCode(): string;
    setCode(value: string): ActivateRequest;
    getUserUuid(): string;
    setUserUuid(value: string): ActivateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateRequest): ActivateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateRequest;
    static deserializeBinaryFromReader(message: ActivateRequest, reader: jspb.BinaryReader): ActivateRequest;
}

export namespace ActivateRequest {
    export type AsObject = {
        code: string,
        userUuid: string,
    }
}

export class ActivateResponse extends jspb.Message { 
    getAuthToken(): string;
    setAuthToken(value: string): ActivateResponse;
    getUserUuid(): string;
    setUserUuid(value: string): ActivateResponse;
    getErr(): string;
    setErr(value: string): ActivateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateResponse): ActivateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateResponse;
    static deserializeBinaryFromReader(message: ActivateResponse, reader: jspb.BinaryReader): ActivateResponse;
}

export namespace ActivateResponse {
    export type AsObject = {
        authToken: string,
        userUuid: string,
        err: string,
    }
}

export class LoginRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 
    getAuthToken(): string;
    setAuthToken(value: string): LoginResponse;
    getErr(): string;
    setErr(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        authToken: string,
        err: string,
    }
}
