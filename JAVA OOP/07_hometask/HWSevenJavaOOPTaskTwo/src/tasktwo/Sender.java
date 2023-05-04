package tasktwo;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class Sender implements Runnable {
	private File file = new File("file.jpg");
	private long fileSize = file.length();
	private CopyFiles copyfile;

	public Sender(CopyFiles copyfile) {
		super();
		this.copyfile = copyfile;
	}

	@Override
	public void run() {
		try (InputStream is = new FileInputStream(file)) {
			byte[] bytes = new byte[1000000];
			int length;
			while (fileSize > 0) {
				length = is.read(bytes, 0, 1000000);
				copyfile.setBytes(bytes, length);
				fileSize -= length;
				System.out.println("Скопійовано " + (file.length() - fileSize) * 100 / file.length() + "% файлу");
			}
			copyfile.setStop(true);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
