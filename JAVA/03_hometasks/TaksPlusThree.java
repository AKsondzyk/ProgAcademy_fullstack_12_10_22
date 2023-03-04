package taskPlusThree;

import java.util.Scanner;

public class TaksPlusThree {

	public static void main(String[] args) {
// Есть круг с центром в начале координат и радиусом 4. Пользователь вводит с клавиатуры
// координаты точки x и y (вещественные числа). Написать программу которая определит лежит ли
// эта точка внутри круга или нет

		Scanner sc = new Scanner(System.in);

		double pointX;
		double pointY;
		double radius = 4.0;

		System.out.println("Введіть координату X");
		pointX = sc.nextDouble();

		System.out.println("Введіть координату Y");
		pointY = sc.nextDouble();

		if (Math.pow(pointX, 2) + Math.pow(pointY, 2) <= Math.pow(radius, 2)) {
			System.out.println("Ваша точка лежить в межах даного круга");
		} else {
			System.out.println("Ваша точка лежить поза межами даного круга");
		}
	}
}
