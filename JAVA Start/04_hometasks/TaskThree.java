package taskThree;

import java.util.Scanner;

public class TaskThree {

	public static void main(String[] args) {
// Выведите на экран прямоугольник из *. Причем высота и ширина прямоугольника вводятся с
// клавиатуры. Например ниже представлен прямоугольник с высотой 4 и шириной 5.
//*****
//*   *
//*   *
//*****

		Scanner sc = new Scanner(System.in);

		int height;
		int width;

		System.out.println("Введіть висоту");
		height = sc.nextInt();

		System.out.println("Введіть ширину");
		width = sc.nextInt();

		for (int i = 1; i <= height; i++) {
			for (int j = 1; j <= width; j++) {
				if (i == 1 || i == height) {
					System.out.print("*");
				} else {
					if (j == 1 || j == width) {
						System.out.print("*");
					} else {
						System.out.print(" ");
					}
				}
			}
			System.out.println();
		}

	}

}
