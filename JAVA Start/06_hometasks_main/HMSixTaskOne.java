package taskone;

import java.util.Scanner;

public class HMSixTaskOne {

	public static void main(String[] args) {
// Считайте строку текста с клавиатуры. Подсчитайте сколько раз в нем встречается символ «b»

		Scanner sc = new Scanner(System.in);

		String text;
		System.out.println("Input some text:");
		text = sc.nextLine();

		System.out.println(text);

		char findSymbol = 'b';
		int result = 0;

		char[] symbols = text.toCharArray();

		for (int i = 0; i < symbols.length; i++) {
//			if (symbols[i].equals(findSymbol)) {
			if (symbols[i] == findSymbol) {
				result += 1;
			}
		}

		System.out.println("кількість літер 'b' у введеному тексті = " + result);

	}

}
