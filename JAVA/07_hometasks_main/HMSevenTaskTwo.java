package tasktwo;

import java.util.Scanner;

public class HMSevenTaskTwo {

	public static void main(String[] args) {
// Реализуйте метод рисующий на экране прямоугольник из звездочек «*» — его параметрами будут
// целые числа которые описывают длину и ширину такого прямоугольника.

		Scanner sc = new Scanner(System.in);

		int height;
		int width;

		System.out.println("Введіть висоту");
		height = sc.nextInt();

		System.out.println("Введіть ширину");
		width = sc.nextInt();

		System.out.println(createRectangle(height, width));
	}

	public static String createRectangle(int height, int width) {
		String result = "";
		for (int i = 1; i <= height; i++) {
			for (int j = 1; j <= width; j++) {
				result += "*";
			}
			result += "\n";
		}
		return result;
	}
}
