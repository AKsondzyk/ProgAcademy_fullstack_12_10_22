package taksPlusThree;

import java.util.Scanner;

public class TaskPlusThree {

	public static void main(String[] args) {
// С помощью цикла реализуйте алгоритм нахождения вещественного корня используя
// итерационную формулу Герона.

		Scanner sc = new Scanner(System.in);

		double userNumber;

		System.out.println("Введіть число");
		userNumber = sc.nextDouble();

		double userDelta;
		System.out.println("Введіть точність обчислення");
		userDelta = sc.nextDouble();

		double x0 = userNumber;
		double x1 = 1.0 / 2.0 * (x0 + userNumber / x0);
		double d = Math.abs(x0 - x1);

		for (; d >= 2.0 * userDelta && d * d >= 2.0 * userDelta;) {
			x0 = x1;
			x1 = 1.0 / 2.0 * (x0 + userNumber / x0);
			d = Math.abs(x0 - x1);
		}
		System.out.println("Квадратний корінь з числа " + userNumber + " дорівнює " + x1);
	}

}
