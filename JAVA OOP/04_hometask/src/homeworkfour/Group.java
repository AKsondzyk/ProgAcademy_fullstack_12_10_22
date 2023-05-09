package homeworkfour;

import java.util.Arrays;
import java.util.Objects;
import java.util.ArrayList;
import java.util.List;

public class Group {
	private String groupName;
//	private Student[] students = new Student[10];
	private List<Student> students = new ArrayList<>();

	public Group() {
		super();
	}

//	public Group(String groupName, Student[] students) {
	public Group(String groupName) {
		super();
		this.groupName = groupName;
//		this.students = students;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

//	public Student[] getStudents() {
	public List<Student> getStudents() {
		return students;
	}

//	public void setStudents(Student[] students) {
//		this.students = students;
//	}

	public void addStudent(Student student) throws GroupOverflowException {
//		for (int i = 0; i < students.length; i++) {
//			if (students[i] == null) {
//				students[i] = student;
//				return;
//			}
//		}
		if (students.size() < 10) {
			students.add(student);
			return;
		}
		throw new GroupOverflowException("Група заповнена");
	}

	public Student searchStudentByLastName(String lastName) throws StudentNotFoundException {
//		for (int i = 0; i < students.length; i++) {
//			if (students[i] != null) {
//				if (students[i].getLastName().equals(lastName)) {
//					return students[i];
//				}
//			}
//		}
		for (Student student : students) {
			if (student.getLastName().equals(lastName)) {
				return student;
			}
		}
		throw new StudentNotFoundException("Студента не знайдено");
	}

	public boolean removeStudentByID(int id) {
//		for (int i = 0; i < students.length; i++) {
//			if (students[i] != null) {
//				if (students[i].getId() == id) {
//					students[i] = null;
//					return true;
//				}
//			}
//		}
		for (Student student : students) {
			if (student.getId() == id) {
				students.remove(student);
				return true;
			}
		}
		return false;
	}

	@Override
	public String toString() {
//		return "Group [groupName=" + groupName + ", students=" + Arrays.toString(students) + "]";
		return "Group [groupName=" + groupName + ", students=" + students.toString() + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
//		result = prime * result + Arrays.hashCode(students);
//		result = prime * result + Objects.hash(groupName);
		result = prime * result + students.hashCode();
		result = prime * result + groupName.hashCode();
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Group other = (Group) obj;
//		return Objects.equals(groupName, other.groupName) && Arrays.equals(students, other.students);
        if (groupName == null) {
            if (other.groupName != null)
                return false;
        } else if (!groupName.equals(other.groupName))
            return false;
        if (students == null) {
            if (other.students != null)
                return false;
        } else if (!students.equals(other.students))
            return false;
        return true;
	}

	public boolean findIdenticalStudents() {
//		for (int i = 0; i < students.length; i++) {
//			for (int j = 0; j < students.length; j++) {
//				if (i != j && students[i] != null && students[i].equals(students[j])) {
//					return true;
//				}
//			}
//		}
//		return false;
//	}
		for (int i = 0; i < students.size() - 1; i++) {
			for (int j = i + 1; j < students.size(); j++) {
				if (students.get(i).equals(students.get(j))) {
					return false;
				}
			}
		}
		return true;
	}
}
