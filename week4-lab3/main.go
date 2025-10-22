package main

import(
	"fmt"
	"errors"
)
type Student struct{
	ID string `json:"id"`
	Name string `json:"name"`
	Email string `json:"email"`	
	Year int `json:"year"`
	GPA float64 `json:"gpa"`
}

func (s *Student) IsHonor() bool{
	return s.GPA >= 3.50
}

func (s *Student) Validate() error{
	if s.Name == ""{
		return errors.New("Name is required")
	}
	if s.Year < 1 || s.Year > 4{
		return errors.New("Year must be between 1-4")
	}
	if s.GPA < 0 || s.GPA > 4{
		return errors.New("GPA must be between 0-4")
	}
	return nil
}

func main(){
	// var st Student = Student{ID:"1",Name:"Siriwut",Email:"chaikeaittham_s@su.ac.th",Year:3,GPA:2.10}
	// st := Student{ID:"1",Name:"Siriwut",Email"chaikeaittham_s@su.ac.th",Year:3,GPA:2.10}

	students := []Student{
		{ID:"1",Name:"Siriwut",Email:"chaikeaittham_s@su.ac.th",Year:3,GPA:2.10},
		{ID:"2",Name:"Alice",Email:"Alice@su.ac.th",Year:2,GPA:3.40},
	}
	newStudent := Student{ID:"3",Name:"Tom",Email:"Tom@su.ac.th",Year:4,GPA:3.70}
	students = append(students,newStudent)
	
	for i, student := range students{
		fmt.Printf("%d Honor = %v\n",i,student.IsHonor())
		fmt.Printf("%d dValidation = %v\n",i,student.Validate())
	}
}