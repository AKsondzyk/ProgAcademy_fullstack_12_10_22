package tasktwo;

import java.util.Scanner;
import java.util.Arrays;

public class HMFiveTaskTwo {

	public static void main(String[] args) {
// Написать код для возможности создания массива целых чисел (размер вводиться с клавиатуры) и
// возможности заполнения каждого его элемента вручную. Выведите этот массив на экран.

		Scanner sc = new Scanner(System.in);

		int arrlenght;
		System.out.println("Введіть довжину масиву");
		arrlenght = sc.nextInt();

		int[] arr = new int[arrlenght];

		for (int i = 0; i < arrlenght; i++) {
			System.out.println("Введіть значення елементу з індексом " + i);
			arr[i] = sc.nextInt();
		}
		System.out.println("Ваш масив");
		System.out.println(Arrays.toString(arr));

	}

}
