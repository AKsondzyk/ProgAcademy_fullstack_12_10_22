package sample;

import java.io.File;

public class Main {

	public static void main(String[] args) {
		File inFile = new File("English.in");
		File outFile = new File("Ukranian.out");
		Dictionary dct = new Dictionary();

		Dictionary.translate(inFile, outFile, dct);
		dct.addWord();
		dct.saveDictionary();
	}

}
