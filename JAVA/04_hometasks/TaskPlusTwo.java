package taskPlusTwo;

import java.util.Scanner;

public class TaskPlusTwo {

	public static void main(String[] args) {

// С помощью вложенных циклов выведите на экран «песочные часы», максимальная ширина
// которых считывается с клавиатуры (число нечетное). В примере ширина равна 5.
// *****
//  ***
//   *
//  ***
// *****

		Scanner sc = new Scanner(System.in);

		System.out.println("Введіть ширину основи (непарне число)");
		int width = sc.nextInt();

		if (width % 2 != 0) {

			for (int i = 0; i < width; i++) {
				for (int j = 0; j < width; j++) {
					if (i <= j && j <= width - i - 1) {
						System.out.print("*");
					} else if (i >= j && j >= width - i - 1) {
						System.out.print("*");
					} else {
						System.out.print(" ");
					}
				}
				System.out.println();
			}

		} else {
			System.out.println("Вами введено парне число, умова не виконується");
		}

	}

}
