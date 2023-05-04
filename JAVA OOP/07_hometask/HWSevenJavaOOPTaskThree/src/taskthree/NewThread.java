package taskthree;

import java.io.File;

public class NewThread implements Runnable{

	private SearchSystem searchSystem;
	private String fileName;
	private File directory;

	public NewThread(SearchSystem searchSystem, String fileName, File directory) {
		this.searchSystem = searchSystem;
		this.fileName = fileName;
		this.directory = directory;
		Thread th = new Thread(this);
		th.start();
	}

	@Override
	public void run() {
		searchSystem.searchingFiles(fileName, directory);
	}
}
