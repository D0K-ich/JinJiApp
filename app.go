package main

import (
	"context"
	"fmt"
	"github.com/D0K-ich/types/utils/querier"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) Hi(name string) string {
	return fmt.Sprintf("Hichurka %s", name)
}

func (a *App) SendRequest(query *querier.SimpleQuery) (response *http.Response, err error) {
	if response, err = querier.NewSimpleQuery(query); err != nil {return}
	return
}