package taskOne;

import java.util.Scanner;

public class TaskOne {

	public static void main(String[] args) {
// Вычислить с помощью цикла факториал числа - n введенного с клавиатуры (4<n<16). Факториал
// числа это произведение всех чисел от этого числа до 1. Например 5!=5*4*3*2*1=120

		Scanner sc = new Scanner(System.in);

		int userNumber;
		long result = 1;

		System.out.println("Введіть число від 4 до 16");
		userNumber = sc.nextInt();

		if (userNumber >= 4 && userNumber <= 16) {

			for (int i = 1; i <= userNumber; i++) {
				result = result * i;
			}
			System.out.print("Факторіал числа " + userNumber + " дорівнює " + result);
		} else {
			System.out.print("Введене вами число не відповідає умові");
		}

	}

}
