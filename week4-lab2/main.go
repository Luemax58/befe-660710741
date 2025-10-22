package main

import(
	"fmt"
)

func main(){
	// var name string = "Siriwut"
	var age int = 20;

	email := "chaikeaittham_s@su.ac.th"
	gpa := 2.00

	firstname, lastname := "Siriwut", "Chaikeaittham"

	fmt.Printf("Name: %s %s, age: %d, Email: %s, GPA %.2f\n",firstname,lastname,age,email,gpa)
}