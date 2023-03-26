package tasktwo;

import java.io.File;
import java.util.Arrays;
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.IOException;


public class HMEightTaskTwo {

	public static void main(String[] args) {
// Напишите метод для сохранения в текстовый файл двухмерного массива целых чисел

		Scanner sc = new Scanner(System.in);

// Створення двомірного масиву

		int rowLenght;
		System.out.println("Ведіть максимальну кількість рядків масиву");
		rowLenght = sc.nextInt();

		int columnLenght;
		System.out.println("Ведіть максимальну кількість колонок масиву");
		columnLenght = sc.nextInt();

		int[][] array = new int[rowLenght][columnLenght];

		for (int i = 0; i < rowLenght; i++) {
			for (int j = 0; j < columnLenght; j++) {
				System.out.println("Введіть значення елементу з індексом " + i + "," + j);
				array[i][j] = sc.nextInt();
			}
		}
		System.out.println("Ваш масив:");
		System.out.println(Arrays.deepToString(array));
		
// Виклик функції
		saveToFile(array);
	}

	public static void saveToFile(int[][] array) {
		File file = new File("HWEightTaskTwo.txt");
		String separator = " ";
		try (PrintWriter pw = new PrintWriter(file)) {
			for (int k = 0; k < array.length; k++) {
				for (int l = 0; l < array[k].length; l++) {
					pw.print(array[k][l]);
					if (!(k == array.length - 1 && l == array[k].length - 1)) {
						pw.print(separator);
					}
				}
				pw.println();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
