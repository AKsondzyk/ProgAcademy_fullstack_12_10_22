package taskPlusTwo;

import java.util.Scanner;

public class TaksPlusTwo {

	public static void main(String[] args) {
// С клавиатуры вводится целое шестизначное число. Проверить, является ли оно палиндромом.
// Примечание: палиндромом называется число, слово или текст, которые одинакового читаются
// слева направо и справа налево. Например, это числа 143341, 552255, 710017 и т. д.

		Scanner sc = new Scanner(System.in);

		int userNumber;

		System.out.println("Введіть ваше число");
		userNumber = sc.nextInt();

		int firstNumber = userNumber / 100000;
		int secondNumber = userNumber / 10000 % 10;
		int thirdNumber = userNumber / 1000 % 10;
		int fourNumber = userNumber / 100 % 10;
		int fiveNumber = userNumber / 10 % 10;
		int sixNumber = userNumber % 10;

		if (firstNumber == sixNumber && secondNumber == fiveNumber && thirdNumber == fourNumber) {
			System.out.println("ВВедене вами число " + userNumber + " є паліндромом");
		} else {
			System.out.println("Нажаль введене вами число " + userNumber + " не є паліндромом");
		}
	}
}
