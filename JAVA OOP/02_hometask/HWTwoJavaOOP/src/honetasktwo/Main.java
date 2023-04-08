package honetasktwo;

public class Main {

	public static void main(String[] args) {

		Cat cat1 = new Cat("wiskas", "black", 2, "Kuzya");
		System.out.println(cat1);
		cat1.eat();
		System.out.println(cat1.getVoice());
		cat1.sleep();

		System.out.println();

		Dog dog1 = new Dog("all what give", "white", 7, "Barsick");
		System.out.println(dog1);
		dog1.eat();
		System.out.println(dog1.getVoice());
		dog1.sleep();

		System.out.println();

		Veterinarian doctor1 = new Veterinarian("Aybolit");
		doctor1.treatment(cat1);

	}

}
