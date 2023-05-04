package taskthree;

import java.io.File;

public class Main {

	public static void main(String[] args) {
		
		String fileName = "file.jpg";
		File directory = new File("D:\\");		
		
		SearchSystem searchSystem = new SearchSystem();		
		NewThread nt = new NewThread(searchSystem, fileName, directory);

	}

}
