package tasktwo;

import java.util.Scanner;

public class HMSixTaskTwo {

	public static void main(String[] args) {
// Вводится строка из слов, разделенных пробелами. Найти самое длинное слово и вывести его на экран.

		Scanner sc = new Scanner(System.in);

		String text;
		System.out.println("Input some text:");
		text = sc.nextLine();

		String[] result = text.split("[ ]");
		String finaltext = result[0];

		for (int i = 0; i < result.length; i++) {
			if (result[i].length() >= finaltext.length()) {
				finaltext = result[i];
			}
		}

		System.out.println(finaltext);
	}

}
