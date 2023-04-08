package honetasktwo;

public class Cat extends Animal {
	String name;

	public Cat() {
		super();
	}

	public Cat(String ration, String color, int weight, String name) {
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
		return name + " say 'myr-myr'";
	}

	public void eat() {
		System.out.println(name + " om-nom-nom, myr-myr");
	}

	public void sleep() {
		System.out.println(name + " sleep like angel");
	}

	@Override
	public String toString() {
		return "Cat " + super.toString() + ", name = " + name + "]";
	}

}
