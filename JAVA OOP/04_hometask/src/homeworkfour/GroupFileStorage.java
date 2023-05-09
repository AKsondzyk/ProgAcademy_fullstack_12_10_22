package homeworkfour;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Scanner;

public class GroupFileStorage {

	public static void saveGroupToCSV(Group group) {
//		Student[] students = group.getStudents();
		List<Student> students = group.getStudents();
		File file = new File(group.getGroupName() + ".csv");
		String separator = ",";
		int count = 0;
		try (PrintWriter pw = new PrintWriter(file)) {
//			for (int i = 0; i < students.length; i++) {
//             if (students[i] != null) {
//          count++;
//			pw.println(count + separator + students[i].getName() + separator + students[i].getLastName() + separator
//					+ students[i].getGender() + separator + students[i].getId() + separator
//					+ students[i].getGroupName());
//				}
//			}
			for (Student student : students) {
				pw.println(student.getName() + separator + student.getLastName() + separator + student.getGender()
						+ separator + student.getId());
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static Group loadGroupFromCSV(File file) throws IOException {
		Group group = new Group();
		group.setGroupName("Завантажена група з файлу");
		try (Scanner sc = new Scanner(file)) {
			for (; sc.hasNextLine();) {
				String[] studentArr = sc.nextLine().split("[,]");
				Student student = new Student();
				student.setName(studentArr[1]);
				student.setLastName(studentArr[2]);
				if (studentArr[3].equals("Women")) {
					student.setGender(Gender.Women);
				} else {
					student.setGender(Gender.Men);
				}
//				student.setId(Integer.parseInt((studentArr[4])));
//				student.setGroupName(studentArr[5]);

				try {
					group.addStudent(student);
				} catch (GroupOverflowException e) {
					e.printStackTrace();
				}
				System.lineSeparator();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println(group);
		return group;
	}

	public static File findFileByGroupName(String groupName, File workFolder) {

		File[] files = workFolder.listFiles();
		File foundFile = null;
		for (int i = 0; i < files.length; i++) {
			if (files[i].isFile()) {
				if (files[i].getName().split("[.]")[0].equals(groupName)) {
					foundFile = files[i];
				}

			}
		}
		return foundFile;
	}
}
