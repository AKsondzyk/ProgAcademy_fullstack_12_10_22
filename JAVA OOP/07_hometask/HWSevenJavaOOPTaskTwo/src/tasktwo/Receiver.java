package tasktwo;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class Receiver implements Runnable {
	private File fileOut = new File("fileCopy.jpg");
	private CopyFiles copyfile;

	public Receiver(CopyFiles copyfile) {
		super();
		this.copyfile = copyfile;
	}

	@Override
	public void run() {
		try (OutputStream os = new FileOutputStream(fileOut)) {
			while (!copyfile.isStop()) {
				os.write(copyfile.getBytes());
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
