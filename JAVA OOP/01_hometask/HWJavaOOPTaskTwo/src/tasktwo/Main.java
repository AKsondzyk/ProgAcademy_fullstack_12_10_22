package tasktwo;

public class Main {

	public static void main(String[] args) {

		Triangle triangle1 = new Triangle(10, 10, 12);
		System.out.println(triangle1);
		System.out.println(triangle1.getArea());
		
		Triangle triangle2 = new Triangle();
		triangle2.setSideA(5);
		triangle2.setSideB(7);
		triangle2.setSideC(7);
		
		System.out.println(triangle2);
		System.out.println(triangle2.getArea());
	}

}
