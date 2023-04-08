package honetasktwo;

public class Animal {
	String ration;
	String color;
	int weight;

	public Animal() {
		super();
	}

	public Animal(String ration, String color, int weight) {
		super();
		this.ration = ration;
		this.color = color;
		this.weight = weight;
	}

	public String getRation() {
		return ration;
	}

	public void setRation(String ration) {
		this.ration = ration;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public String getVoice() {
		return "arrrrrrhhhh";
	}

	public void eat() {
		System.out.println("nyam-nyam");
	}

	public void sleep() {
		System.out.println("z-z-z-z-z-z");
	}

	@Override
	public String toString() {
		return "[ration = " + ration + ", color = " + color + ", weight = " + weight;
	}

}
