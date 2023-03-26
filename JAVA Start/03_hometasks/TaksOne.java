package taskOneMain;

import java.util.Scanner;

public class TaksOne {

	public static void main(String[] args) {
// Написать программу которая считает 4 целых числа с клавиатуры и выведет на экран самое
// большое из них.
		
		Scanner sc = new Scanner(System.in);

		int number1;
		int number2;
		int number3;
		int number4;
		int maxNumber;

		System.out.println("Input number 1");
		number1 = sc.nextInt();

		System.out.println("Input number 2");
		number2 = sc.nextInt();

		System.out.println("Input number 3");
		number3 = sc.nextInt();

		System.out.println("Input number 4");
		number4 = sc.nextInt();

		maxNumber = number1;

		if (number2 > maxNumber) {
			maxNumber = number2;
		}
		if (number3 > maxNumber) {
			maxNumber = number3;
		}
		if (number4 > maxNumber) {
			maxNumber = number4;
		}

		System.out.println("Max number = " + maxNumber);

	}

}
