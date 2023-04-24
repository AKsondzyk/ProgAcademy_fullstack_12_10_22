package homeworkfour;

public class Human {
	private String name;
	private String lastName;
	Gender gender;

	public Human() {
		super();
	}

	public Human(String name, String lastName, Gender gender) {
		super();
		this.name = name;
		this.lastName = lastName;
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "name=" + name + ", lastName=" + lastName + ", gender=" + gender + " ";
	}

}
