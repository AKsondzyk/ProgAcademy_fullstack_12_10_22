package taskThree;

import java.util.Scanner;

public class TaskThree {

	public static void main(String[] args) {
// Треугольник существует только тогда, когда сумма любых двух его сторон больше третьей. 	
// Дано: a, b, c – стороны предполагаемого треугольника.
// Напишите программу, которая укажет, существует ли такой треугольник или нет.

		Scanner sc = new Scanner(System.in);

		double aSide;
		double bSide;
		double cSide;

		System.out.println("Введіть довжину сторони a");
		aSide = sc.nextDouble();
		System.out.println("Введіть довжину сторони b");
		bSide = sc.nextDouble();
		System.out.println("Введіть довжину сторони c");
		cSide = sc.nextDouble();
		
		if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
			System.out.println("Таких значень довжин не існує");
		} 
		else {
			if((aSide + bSide) > cSide && (aSide + cSide) > bSide && (bSide + cSide) > aSide) {
				System.out.println("Такий трикутник існує");
			}
			else {
				System.out.println("Нажаль такого трикутника не існує");
			}
		}
	}

}
