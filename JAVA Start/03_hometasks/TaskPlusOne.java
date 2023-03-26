package taskPlusOne;

import java.util.Scanner;

public class TaskPlusOne {

	public static void main(String[] args) {
// Пользователь вводит целое четырехзначное число. Проверить, является ли оно номером
// «счастливого билета». Примечание: счастливым билетом называется число, в котором, при четном
// количестве цифр в числе, сумма цифр его левой половины равна сумме цифр его правой
// половины. Например, рассмотрим число 1322. Его левая половина равна 13, а правая 22, и оно
// является счастливым билетом (т. к. 1 + 3 = 2 + 2).

		Scanner sc = new Scanner(System.in);

		int happyTicket;

		System.out.println("ВВедіть ваше число");
		happyTicket = sc.nextInt();

		int leftPart = happyTicket / 100;
		int rightPart = happyTicket % 100;

		int leftSum = leftPart / 10 + leftPart % 10;
		int rightSum = rightPart / 10 + rightPart % 10;

		if (leftSum == rightSum) {
			System.out.println("Ваше число є номером 'щасливого квитка'");
		} else {
			System.out.println("Нажаль ваше число не є номером 'щасливого квитка'");
		}
	}

}
