package homework.two;

import java.util.Scanner;

public class TaskThree {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

//		Один литр топлива стоит 1.2$. Ваш автомобиль тратит на 100 км пути 8 литров топлива.
//		Вы собрались в поездку в соседний город. Расстояние до этого города составляет 120
//		км. Вычислите и выведите на экран сколько вам нужно заплатить за топливо для
//		поездки.

		System.out.println("Введіть ціну пального ($) за 1 літр");

		double price = sc.nextDouble();

		double hundred = 100;

		System.out.println("Введіть витрату вашого авто на 100 км шляху");

		double expense = sc.nextDouble();

		System.out.println("Введіть відстань (км) яку ви хочете подолати");

		double range = sc.nextDouble();

		double spentLiters = range * expense / hundred;

		double spentMoney = spentLiters * price;

		System.out.println("Сума яку потрібно витратити на пальне = " + spentMoney + " $");
	}

}
