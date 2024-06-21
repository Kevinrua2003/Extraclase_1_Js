class Person{

	constructor(name, age){
		this.name = name
		this.age = age
	}

}

class Student extends Person{

	constructor(name, age, grade, section){
		super(name, age)
		this.grade = grade
		this.section = section
	}

}

class Menu{

	constructor(){ this.list = [] }

	showMenu(){

		let stop = false

		while(!stop){

			const selection = prompt("1. Add new Student \n 2. Students List \n 3. Exit")
			
			switch(selection){

				case "1":
					this.addStudent();
					break;
				case "2":
					this.showList();
					break;
				case "3":
					stop = true;
					break;
				default:
					console.log("Not valid option\n");
					break;
			}
		}

	}

	addStudent(){
		let name = prompt("Student name: ");
		let age = prompt("Student age: ");
		let grade = prompt("Student grade: ");
		let section = prompt("Student section: ");
		let student = new Student(name, age, grade, section);
		this.list.push(student);
	}

	showList(){
		this.list.forEach((student) => {console.log(student.name + " " + student.age + " " + student.grade + " " + student.section + "\n")});
	}
}


export default Menu


















