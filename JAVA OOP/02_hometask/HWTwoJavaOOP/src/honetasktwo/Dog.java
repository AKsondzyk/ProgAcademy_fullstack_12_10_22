package honetasktwo;

public class Dog extends Animal {
	String name;

	public Dog() {
		super();
	}

	public Dog(String ration, String color, int weight, String name) {
		super(ration, color, weight);
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getVoice() {
		return name + " say 'gav-gav'";
	}

	public void eat() {
		System.out.println(name + " arrrrr, om-nom-nom");
	}

	public void sleep() {
		System.out.println(name + " sleeping  but ready to bite you");
	}

	@Override
	public String toString() {
		return "Dog " + super.toString() + ", name = " + name + "]";
	}

}
