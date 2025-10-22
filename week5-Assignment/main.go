package main

import (
    "fmt"
    "net/http"
    "github.com/gin-gonic/gin"
)

type Product struct {
    ID string  `json:"id"`
    Name string  `json:"name"`
    Province string  `json:"province"`
	MFG string `json:"MFG"`
    EXP string `json:"EXP"`
    price float64 `json:"PRICE"`
}

var products = []Product{
    {ID: "001", Name: "Thai Silk", Province: "Bangkok", MFG: "05/10/28", EXP: "05/10/35", price: 200.00},
	{ID: "005", Name: "Benjarong Pottery", Province: "Chiang Mai", MFG: "08/02/25", EXP: "28/07/40", price: 150.00},
	{ID: "012", Name: "Wickerwork Basket", Province: "Phuket", MFG: "01/05/27", EXP: "13/02/38", price: 175.00},
	{ID: "034", Name: "Thai Herbal Balm", Province: "Chonburi", MFG: "13/09/25", EXP: "12/06/30", price: 35.00},
	{ID: "040", Name: "Coconut Shell Carving", Province: "Ayutthaya", MFG: "09/09/26", EXP: "24/06/32", price: 230.00},
}

func getPrices(c *gin.Context){
	priceQuery := c.Query("price")

	if priceQuery != ""{
		filter := []Product{}
		for _, product := range products {
			if fmt.Sprint(product.price) <= priceQuery{
				filter = append(filter, product)
			}
		}
		c.JSON(http.StatusOK, filter)
		return
	}
	c.JSON(http.StatusOK, products)
}

func main(){
	r:=gin.Default()

	r.GET("/health" , func(c *gin.Context){
		c.JSON(200, gin.H{"message" : "healthy"})
	})

	api := r.Group("/api/v1")
	{
		api.GET("/Otop" , getPrices)
	}

	r.Run(":8080")
}