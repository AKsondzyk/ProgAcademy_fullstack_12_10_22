package taskthree;

import java.util.Scanner;

public class HMSevenTaskThree {

	public static void main(String[] args) {
// Напишите метод который реализует линейный поиск элемента в массиве целых чисел. Если такой
// элемент в массиве есть то верните его индекс, если нет то метод должен возвращать число - «-1».

		Scanner sc = new Scanner(System.in);

		int element;
		System.out.println("Введіть число яке шукаєте");
		element = sc.nextInt();

		int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 100, -1, -2, -5, -6, -4, -8 };

		int result = findElement(array, element);

		System.out.println("в масиві елемент знаходиться по індексу = " + result);

	}

	public static int findElement(int[] array, int element) {
		int index = -1;
		for (int i = 0; i < array.length; i++) {
			if (array[i] == element) {
				index = i;
				break;
			}
		}
		return index;
	}

}
