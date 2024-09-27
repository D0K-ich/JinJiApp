GO ?= go

proto-gen:
	@echo "===================================="
	@echo "Building in developer mode..."
	@echo "------------------------------------"
	cd ./frontend/src/proto/auth &&	protoc -I=. auth.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

dev-build:
	@echo "===================================="
	@echo "Building in developer mode..."
	@echo "------------------------------------"
	wails build -clean -devtools

dev-start:
	@echo "===================================="
	@echo "Executing test application..."
	@echo "------------------------------------"
	wails dev

start:
	@echo "===================================="
	@echo "Executing test application..."
	@echo "------------------------------------"
	cd ./frontend && npm run start