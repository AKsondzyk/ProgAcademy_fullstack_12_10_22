package coffe;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		System.out.println("Введіть ціну за каву");

		int coffeCost = sc.nextInt();

		System.out.println("Введіть кількість товару");

		int cups = sc.nextInt();

		int totalSum;

		totalSum = coffeCost * cups;

		System.out.println("Сума замовлення " + totalSum + " UAH");
	}

}
