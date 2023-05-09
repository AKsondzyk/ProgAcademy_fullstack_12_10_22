package taskone;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ArrayOperation {

	public static void operationsWithElements() {

		Random rn = new Random();

		List<Integer> list1 = new ArrayList<>();

		for (int i = 0; i < 10; i++) {
			list1.add(rn.nextInt(100));
		}
		System.out.println("Початковий набір даних");
		System.out.println(list1);

		for (int i = 0; i < 2; i++) {
			list1.remove(0);
		}

		list1.remove(list1.size() - 1);
		System.out.println("Набір даних після обробки");
		System.out.println(list1);
	}

}
