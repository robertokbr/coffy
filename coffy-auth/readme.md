## 🚀 Intro
Coffy-auth is a microservice responsible for the authentication of the mobile app [coffy](https://github.com/robertokbr/coffy), which I have been building using ```gRPC```, as a way to learn better this technology and its integration with other APIs. If you want to see this API client-side, head to the repository [coffy-api](https://github.com/robertokbr/coffy-api), where you can see the implementation of the gRPC client, using ```NestJS```, inside the module ```orders```.

### 📓 What is gRPC
The gRPC is a google tech, which aims to be the evolution of the RPC architecture (Remote Procedure Call). For being HTTP2 based, the gRPC is way faster than the REST, not only because of the HTTP2 multiplexing, which allows the API to receive many requests in just one connection, but also because of the use of protobufs, which is an IDL ( Interface Definition Language ) used to define the gRPC services, and serialize the income and outcome data by:

- separating the message context from it data:
  - Istead of the common json format: ```{ "key": "value" }``` - protobufs organize the values by indexes that represent the value key: ```{ string value = 1 }``` - which minimizes payload wheight.

- Serializing the message content from text to binary.
  - The transmission of binary is pretty faster than text, also the HTTP2 compresses the binary, turning the transmission faster and lighter in terms of CPU usage.

### 🗒️ User histories
- [x] It should be able to generate random passcodes, with an expiration time of 1 hour, that will be used to create the user authentication, which is necessary to create orders. The passcode should be provided by the coffy manager to their clients, as a way to avoid users creating fake orders from anywhere outside the coffee store.
- [x] It should be able to create authentications by a passcode and a user name, and return a jwt with 1 hour of expiration time, that contains as payload the user name and the generated user id.
- [x] It should be to update the session JWT with some old JWT and a new passcode.
- [x] It should be able to decode the JWT and return the user payload.

### 💻 Coding
- The proto file will be stored inside the path github.com/robertokbr/coffy-auth/v1, following the good practice of the proto packages pattern.
- To each RPC endpoint there will be a proper message to design the shape of the payload, following the pattern 'someMethodRequest' to the request data and 'someResourceResponse' to the response data.
- The project protos will be dynamically compiled using proto-loader instead of statically compiled.

### 🛠️ VSCode Extensio
VScode proto-3 to.

### 🧪 Test tools
- Kreya grpc client

### 📦 App Tools
- @grpc/proto-loader
- grpc

### 📔 Protobuf version
- 3.0

### References
- [gRPC bookstore](https://github.com/rocketseat-experts-club/grpc-bookstore) repository
