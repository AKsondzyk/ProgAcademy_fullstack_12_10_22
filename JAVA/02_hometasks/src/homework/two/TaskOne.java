package homework.two;

public class TaskOne {

	public static void main(String[] args) {

//	Написать программу которая вычислит и выведет на экран площадь треугольника если
//	известны его стороны (sideA = 0.3, sideB = 0.4, sideC = 0.5). Для вычисления
//	использовать формулу Герона.

		double sideA = 0.3;
		double sideB = 0.4;
		double sideC = 0.5;

		double halfPerimeter = (sideA + sideB + sideC) / 2;

		double area = Math
				.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));

		System.out.println("Площа заданого трикутника = " + area + " одиниць вимірювання");
	}
}