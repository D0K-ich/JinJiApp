// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_auth_pb = require('./auth_pb.d.ts');

function serialize_auth_ActivateRequest(arg) {
  if (!(arg instanceof auth_auth_pb.ActivateRequest)) {
    throw new Error('Expected argument of type auth.ActivateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ActivateRequest(buffer_arg) {
  return auth_auth_pb.ActivateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ActivateResponse(arg) {
  if (!(arg instanceof auth_auth_pb.ActivateResponse)) {
    throw new Error('Expected argument of type auth.ActivateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ActivateResponse(buffer_arg) {
  return auth_auth_pb.ActivateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return auth_auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof auth_auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return auth_auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RegisterRequest(arg) {
  if (!(arg instanceof auth_auth_pb.RegisterRequest)) {
    throw new Error('Expected argument of type auth.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RegisterRequest(buffer_arg) {
  return auth_auth_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RegisterResponse(arg) {
  if (!(arg instanceof auth_auth_pb.RegisterResponse)) {
    throw new Error('Expected argument of type auth.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RegisterResponse(buffer_arg) {
  return auth_auth_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  register: {
    path: '/auth.Auth/Register',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.RegisterRequest,
    responseType: auth_auth_pb.RegisterResponse,
    requestSerialize: serialize_auth_RegisterRequest,
    requestDeserialize: deserialize_auth_RegisterRequest,
    responseSerialize: serialize_auth_RegisterResponse,
    responseDeserialize: deserialize_auth_RegisterResponse,
  },
  checkCode: {
    path: '/auth.Auth/CheckCode',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.ActivateRequest,
    responseType: auth_auth_pb.ActivateResponse,
    requestSerialize: serialize_auth_ActivateRequest,
    requestDeserialize: deserialize_auth_ActivateRequest,
    responseSerialize: serialize_auth_ActivateResponse,
    responseDeserialize: deserialize_auth_ActivateResponse,
  },
  login: {
    path: '/auth.Auth/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.LoginRequest,
    responseType: auth_auth_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
