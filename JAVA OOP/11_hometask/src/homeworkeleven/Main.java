package homeworkeleven;

import java.io.File;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		String site = "https://www.dou.ua";
		File file = new File("links.txt");

		try {
			Network.saveURLToFile(site, file);
		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			Network.checkURL(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
