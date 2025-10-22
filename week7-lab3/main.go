package main

import (
    "fmt"
	"os"
	"database/sql"
	//"github.com/lib/pq"
	"log"
)

func getEnv(key, defalutValue string) string{
	if value := os.Getenv(key); value != ""{
		return value
	}
	return defalutValue
}

var db *sql.DB

func initDB(){
	var err error
	
	host := getEnv("DB_HOST","")
	name := getEnv("DB_NAME","")
	user := getEnv("DB_USER","")
	password := getEnv("DB_PASSWORD","")
	port := getEnv("DB_PORT","")

	conSt := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",host,port,user,password,name)
	//fmt.Println(conSt)
	db, err = sql.Open("postgres", conSt)
	if err != nil {
		log.Fatal("failed to open database",err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal("failed to connect to database")
	}
	log.Println("successfully connected to database")
}

func main(){
	initDB()
}