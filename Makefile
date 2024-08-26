GO ?= go

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