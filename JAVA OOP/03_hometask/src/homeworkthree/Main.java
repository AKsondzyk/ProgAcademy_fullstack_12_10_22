package homeworkthree;

public class Main {

	public static void main(String[] args) {
		Student student1 = new Student("Діана", "Віталіївна", Gender.Women, 11, "біатлоніст");
		Student student2 = new Student("Олексій", "Юрійович", Gender.Men, 12, "баскетболіст");
		Student student3 = new Student("Катерина", "Михайлівна", Gender.Women, 13, "баскетболіст");
		Student student4 = new Student("Андрій", "Олексійович", Gender.Men, 14, "баскетболіст");
		Student student5 = new Student("Оксана", "Орестівна", Gender.Women, 15, "біатлоніст");
		Student student6 = new Student("Степан", "Денисович", Gender.Men, 16, "біатлоніст");
		Student student7 = new Student("Ольга", "Олександрівна", Gender.Women, 17, "біатлоніст");
		Student student8 = new Student("Орест", "Ярославович", Gender.Men, 18, "баскетболіст");
		Student student9 = new Student("Віка", "Аліковна", Gender.Women, 19, "баскетболіст");
		Student student10 = new Student("Остап", "Матвійович", Gender.Men, 10, "баскетболіст");

		Group group1 = new Group();
		group1.setGroupName("Група Жінок");
		Group group2 = new Group();
		group2.setGroupName("Група Чоловіків");

		try {
			group1.addStudent(student1);
			group1.addStudent(student3);
			group1.addStudent(student5);
			group1.addStudent(student7);
			group1.addStudent(student9);
		} catch (GroupOverflowException e) {

		}

		try {
			group2.addStudent(student2);
			group2.addStudent(student4);
			group2.addStudent(student6);
			group2.addStudent(student8);
			group2.addStudent(student10);
		} catch (GroupOverflowException e) {

		}

		System.out.println(group1);
		System.out.println(group2);
	}

}
