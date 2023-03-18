package taskone;

public class HMSevenTaskOne {

	public static void main(String[] args) {
// Напишите метод который вернет максимальное число из массива целых чисел.

		int[] array = new int[] { 0, 5, -2, 4, 20, 7, -1, 3, 2 };

		
		int result = findMax(array);

		System.out.println("Максимальне чиcло в масиві = " +  result);
	}

	public static int findMax(int[] array) {
		int maxNumber = array[0];
		for (int i = 0; i < array.length; i++) {
			if (array[i] >= maxNumber) {
				maxNumber = array[i];
			}
		}
		return maxNumber;
	}
}