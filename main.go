package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	var app = NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title				: "Kanopy",
		Width				: 1024,
		Height				: 720,
		DisableResize		: false,
		Fullscreen			: false,
		Frameless			: false,
		MinWidth			: 100,
		MinHeight			: 100,
		MaxWidth			: 0,
		MaxHeight			: 0,
		StartHidden			: false,
		HideWindowOnClose	: false,
		AlwaysOnTop			: false,
		Menu				: nil,
		Logger				: nil,
		LogLevel			: 0,
		LogLevelProduction	: 0,
		OnStartup			: app.startup,
		OnDomReady			: nil,
		OnShutdown			: nil,
		OnBeforeClose		: nil,
		EnumBind			: nil,
		WindowStartState	: 0,
		ErrorFormatter		: nil,
		CSSDragProperty		: "",
		CSSDragValue		: "",
		SingleInstanceLock	: nil,
		Windows				: nil,
		Mac					: nil,
		Linux				: nil,
		Experimental		: nil,
		Debug				: options.Debug{},
		DragAndDrop			: nil,

		EnableDefaultContextMenu: 			false,
		EnableFraudulentWebsiteDetection: 	false,

		BackgroundColour	: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		AssetServer			: &assetserver.Options{Assets: assets},
		Bind				: []interface{}{app},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
