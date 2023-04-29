package homeworfive;

import java.io.File;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		File folderIn = new File("D:\\ExampleFolderForHW");
		File folderOut = new File("D:\\\\ExampleFolderForHW\\Copy");
		folderOut.mkdirs();
		try {
			System.out.println(CopyFile.copyFilesMethod(folderIn, folderOut, "ico"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
