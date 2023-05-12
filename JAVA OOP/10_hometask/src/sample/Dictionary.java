package sample;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Dictionary {
	private Map<String, String> words = new HashMap<>();

	public Dictionary() {
		words.put("Cat", "Кіт");
		words.put("Dog", "Собака");
		words.put("Hamster", "Хомяк");
		words.put("Parrot", "Папуга");
		words.put("Rat", "Щур");
		words.put("Spider", "Павук");
		words.put("Snake", "Змія");
		words.put("Fish", "Риба");
	}

	public Map<String, String> getWords() {
		return words;
	}

	public void setWords(Map<String, String> words) {
		this.words = words;
	}

	@Override
	public String toString() {
		return "Dictionary [words=" + words + "]";
	}

	public void addWord() {
		try (Scanner sc = new Scanner(System.in)) {
			System.out.println("Введіть нове слово англійською");
			String engWord = sc.nextLine();
			System.out.println("Введіть переклад");
			String ukrWord = sc.nextLine();
			words.put(engWord, ukrWord);
		}
	}

	public void saveDictionary() {
		File file = new File("Dictionary.csv");
		try {
			file.createNewFile();
		} catch (IOException e) {
			e.printStackTrace();
		}
		try (PrintWriter pw = new PrintWriter(file)) {
			for (String kString : words.keySet()) {
				pw.println(kString + ";" + words.get(kString));
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

	}

	public static void translate(File in, File out, Dictionary dct) {
		String text = "";
		try (Scanner sc = new Scanner(in)) {
			for (; sc.hasNextLine();) {
				text += sc.nextLine() + System.lineSeparator();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		String[] wordsEng = text.trim().split("[ ]");
		String wordsUkr = "";
		for (String string : wordsEng) {
			if (dct.getWords().containsKey(string)) {
				wordsUkr = wordsUkr + dct.getWords().get(string) + " ";
			}
		}
		try (PrintWriter pw = new PrintWriter(out)) {
			pw.println(wordsUkr.trim());
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
}