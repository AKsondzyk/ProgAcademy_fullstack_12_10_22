package taskthree;

public class HMSixTaskThree {

	public static void main(String[] args) {
// Выведите на экран 10 строк со значением числа Пи. Причем в первой строке должно быть 2 знака
// после запятой, во второй 3, в третьей 4 и т. д

		for (int i = 2; i < 12; i++) {
			String result = String.format("%." + i + "f", Math.PI);
			System.out.println(result);
		}
	}

}
