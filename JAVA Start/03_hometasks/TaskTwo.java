package taskTwoMain;

import java.util.Scanner;

public class TaskTwo {

	public static void main(String[] args) {
// Есть девятиэтажный дом, в котором 5 подъездов. Номер подъезда начинается с единицы. На
// одном этаже 4 квартиры. Напишите программу которая, получит номер квартиры с клавиатуры, и
// выведет на экран, на каком этаже, какого подъезда расположена эта квартира. Если такой
// квартиры нет в этом доме, то нужно сообщить об этом пользователю

		Scanner sc = new Scanner(System.in);

		int maxEntrance = 5;
		int maxFloor = 9;
		int maxApartment = 4;

		int floor;
		int entrance;
		int apartment;

		System.out.println("Введіть номер картири");
		apartment = sc.nextInt();

		if (apartment <= (maxEntrance * maxFloor * maxApartment) && apartment > 0) {

			entrance = (apartment - 1) / (maxApartment * maxFloor) + 1;
			floor = ((apartment - 1) % (maxApartment * maxFloor) / maxApartment + 1);

			System.out.println("Квартира знаходиться у " + entrance + " підїзді на " + floor + " поверсі");
		} else {
			System.out.println("Введеної вами квартири в цьому будинку немає");
		}
	}
}