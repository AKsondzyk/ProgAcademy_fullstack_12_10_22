package homeworkfour;

import java.util.Scanner;

public class AddStudent {
	public static Student newStudent() {
		Scanner sc = new Scanner(System.in);
		Student student = new Student();
		
		System.out.println("Введіть ім'я ");
		student.setName(sc.next());
		
		System.out.println("Введіть фамілію ");
		student.setLastName(sc.next());
		
		System.out.println("Введіть стать (Men, Women) ");
		String gender1 = sc.nextLine();
		
		if (gender1.equals("Men") || gender1.equals("Women")) {
			Gender gender = Gender.valueOf(gender1);
			student.setGender(gender);
		}
		return student;
	}
}
