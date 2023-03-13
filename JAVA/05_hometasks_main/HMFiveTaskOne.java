package taskone;

public class HMFiveTaskOne {

	public static void main(String[] args) {
// Дан массив целых чисел вида — {0,5,2,4,7,1,3,19}. Написать программу для подсчета количества
// нечетных чисел в нем.

		int[] array = new int[] { 0, 5, 2, 4, 7, 1, 3, 19 };

		int result = 0;

		for (int i = 0; i < array.length; i++) {
			if (array[i] % 2 != 0) {
				result += 1;
			}

		}
		System.out.println("Кількість непарних чисел в масиві = " + result);
	}

}
