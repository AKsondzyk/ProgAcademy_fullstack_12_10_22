package taskTwo;

public class TaskTwo {

	public static void main(String[] args) {
// Напечатайте таблицу умножения на 5. Предпочтительно печатать 1 x 5 = 5, 2 x 5 = 10, 
// а не просто 5, 10 и т. д.

		int five = 5;
		int result;

		for (int i = 1; i <= 10; i++) {
			result = i * five;
			System.out.println(i + " x " + five + " = " + result);
		}

	}

}
