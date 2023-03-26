package taskthree;

import java.io.File;

public class HMEightTaskThree {

	public static void main(String[] args) {
// Реализуйте метод который выведет на экран список всех каталогов расположенных в каталоге
// адрес которого будет параметром этого метода

		checkFolders("./");

	}

	public static void checkFolders(String folderName) {
		File folder = new File(folderName);
		boolean check = false;
		System.out.println("У " + folder.getAbsolutePath() + " знаходяться такі директорії");
		File[] folderElements = folder.listFiles();
		for (int i = 0; i < folderElements.length; i++) {
			if (folderElements[i].isDirectory()) {
				System.out.println(folderElements[i].getName());
				check = true;
			}
		}
		if (!check) {
			System.out.println("Вказана директорія не містить вкладених директорій");
		}
	}

}
