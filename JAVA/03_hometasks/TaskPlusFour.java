package taskPlusFour;

import java.util.Scanner;

public class TaskPlusFour {

	public static void main(String[] args) {
// Дан треугольник координаты вершин А(0,0), В(4,4), С(6,1). Пользователь вводит с клавиатуры
// координаты точки x и y (вещественные числа). Написать программу которая определит лежит ли
// эта точка внутри треугольника или нет.

		Scanner sc = new Scanner(System.in);

// Координати вершин трикутника ABC
		double xA = 0;
		double yA = 0;
		double xB = 4;
		double yB = 4;
		double xC = 6;
		double yC = 1;

// Координати точки яку задає користувач
		double pointX;
		double pointY;

		System.out.println("Введіть координату X вашої точки");
		pointX = sc.nextDouble();
		System.out.println("Введіть координату Y вашої точки");
		pointY = sc.nextDouble();

// Довжини сторін трикутника
		double xAB = xB - xA;
		double yAB = yB - yA;
		double xBC = xC - xB;
		double yBC = yC - yB;
		double xCA = xA - xC;
		double yCA = yA - yC;

// Довжини векторів з вершин до точки		
		double xAO = pointX - xA;
		double yAO = pointY - yA;
		double xBO = pointX - xB;
		double yBO = pointY - yB;
		double xCO = pointX - xC;
		double yCO = pointY - yC;

// Векторний добуток
		double vectorOAB = xAO * yAB - yAO * xAB;
		double vectorOBC = xBO * yBC - yBO * xBC;
		double vectorOCA = xCO * yCA - yCO * xCA;

// Перевірка
		if ((vectorOAB <= 0 && vectorOBC <= 0 && vectorOCA <= 0)
				|| (vectorOAB >= 0 && vectorOBC >= 0 && vectorOCA >= 0)) {
			System.out.println("Задана точка лежить у межах трикутника");
		} else {
			System.out.println("Нажаль задана точка лежить ПОЗА межами трикутника");
		}

	}

}
