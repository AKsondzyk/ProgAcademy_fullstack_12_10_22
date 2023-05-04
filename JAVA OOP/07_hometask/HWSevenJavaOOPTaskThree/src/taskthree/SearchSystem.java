package taskthree;

import java.io.File;

public class SearchSystem {
	private int counter = 1;

	public void searchingFiles(String fileName, File directory) {

		if (directory.isDirectory()) {
			File[] fileArray = directory.listFiles();
			if (fileArray != null) {
				for (File file : fileArray) {
					if (file.isFile() && file.getName().equals(fileName)) {
						System.out.println("Файл знаходиться у " + file.getPath());
					} else if (file.isDirectory() && counter < 3) {
						NewThread nt = new NewThread(this, fileName, file);
						counter += 1;
					} else if (file.isDirectory() && counter >= 3) {
						searchingFiles(fileName, file);
						counter -= 1;
					}
				}
			} else {
				System.out.println("У вказаній директорії " + directory + " не існує даного файлу");
			}
		} else {
			System.out.println("Кінець пошуку, файл не знайдено");
		}
	}
}