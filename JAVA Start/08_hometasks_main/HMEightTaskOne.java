package taskone;

import java.io.File;
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.IOException;

public class HMEightTaskOne {

	public static void main(String[] args) {
// Создайте консольный «текстовый редактор» с возможностью сохранения набранного текста в файл

		Scanner sc = new Scanner(System.in);
		File file = new File("HWEightTaskOne.txt");

		try (PrintWriter pw = new PrintWriter(file)) {

			String text;
			System.out.println("Input some text:");
			text = sc.nextLine();

			pw.println(text);

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
