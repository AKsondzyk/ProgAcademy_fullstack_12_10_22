package taskthree;

import java.util.Arrays;
import java.util.Random;

public class HMFiveTaskThree {

	public static void main(String[] args) {
// Создать массив случайных чисел (размером 15 элементов). Создайте второй массив в два раза
// больше, первые 15 элементов должны быть равны элементам первого массива, а остальные
// элементы заполнить удвоенных значением начальных. Например:
// Было → {1,4,7,2}
// Стало → {1,4,7,2,2,8,14,4}

		Random rn = new Random();

		int[] arr = new int[15];

		for (int i = 0; i < arr.length; i++) {
			arr[i] = rn.nextInt(0, 100);
		}

		int[] arrtwo = new int[arr.length * 2];

		for (int j = 0; j < arrtwo.length; j++) {
			if (j <= arr.length - 1) {
				arrtwo[j] = arr[j];
			} else {
				arrtwo[j] = arr[j - arr.length] * 2;
			}
		}

		System.out.println(Arrays.toString(arr));
		System.out.println(Arrays.toString(arrtwo));
	}

}
