package homeworkeleven;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;

public class Network {
	public static String linksFromSite(String site, String code) throws IOException {
		URL url = new URL(site);
		HttpURLConnection conect = (HttpURLConnection) url.openConnection();
		String result = "";
		try (BufferedReader br = new BufferedReader(new InputStreamReader(conect.getInputStream(), code))) {
			for (;;) {
				String temp = br.readLine();
				if (temp == null) {
					break;
				}
				result += temp + System.lineSeparator();
			}
			return result;
		}
	}

	public static void saveURLToFile(String site, File file) throws IOException {
		try (PrintWriter pr = new PrintWriter(file)) {
			String html = linksFromSite(site, "UTF-8");
			String[] s = html.split("http");
			for (int i = 1; i < s.length; i++) {
				int index = 0;
				s[i] = "http" + s[i].replaceAll("\'", "\"");
				if (s[i].indexOf("\"") != -1) {
					index = s[i].indexOf("\"");
				}
				pr.print(s[i].substring(0, index) + System.lineSeparator());
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void checkLinks(String site) throws IOException {
		URL url = new URL(site);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();

		if (connection.getResponseCode() == 200) {
			System.out.println("З'єднання з: " + site + " можливе");
		} else {
			System.out.println("Посилання: " + site + " - НЕдоступне");
		}

	}

	public static void checkURL(File file) throws IOException {
		try (BufferedReader br = new BufferedReader(new FileReader(file))) {
			String temp = "";
			for (;;) {
				temp = br.readLine();
				if (temp == null) {
					break;
				}
				checkLinks(temp);
			}
		}
	}
}
