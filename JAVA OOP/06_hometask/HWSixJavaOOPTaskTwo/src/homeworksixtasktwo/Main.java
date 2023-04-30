package homeworksixtasktwo;

public class Main {

	public static void main(String[] args) {
		int[] Arr = new int[4000];
		long sumByTread = 0;
		int sumByFORCycle = 0;

// Заповнюємо масив рандомними числами
		for (int i = 0; i < Arr.length; i++) {
			Arr[i] = (int) (Math.random() * 100);
		}
// Потоки виконання

		SumaCalc var1 = new SumaCalc(Arr, 0, 999);
		SumaCalc var2 = new SumaCalc(Arr, 1000, 1999);
		SumaCalc var3 = new SumaCalc(Arr, 2000, 2999);
		SumaCalc var4 = new SumaCalc(Arr, 3000, 3999);

		Thread thread1 = new Thread(var1);
		Thread thread2 = new Thread(var2);
		Thread thread3 = new Thread(var3);
		Thread thread4 = new Thread(var4);

// Час початку розрахунку по потоках
		long startTime1 = System.nanoTime();

		thread1.start();
		thread2.start();
		thread3.start();
		thread4.start();

		try {
			thread1.join();
			thread2.join();
			thread3.join();
			thread4.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
// Час завершення розрахунку по потоках
		long endTime1 = System.nanoTime();

		sumByTread = var1.getSuma() + var2.getSuma() + var3.getSuma() + var4.getSuma();
		System.out.println("Сума елементів в розрахунку по потоках = " + sumByTread);
		System.out.println("Витрачений час на розрахунок по потоках: " + (endTime1 - startTime1));

// Розрахунок суми в циклі
		long startTime2 = System.nanoTime();
		for (int i = 0; i < Arr.length; i++) {
			sumByFORCycle += Arr[i];
		}
		long endTime2 = System.nanoTime();

		System.out.println("Сума елементів в розрахунку в циклі = " + sumByFORCycle);
		System.out.println("Витрачений час на розрахунок в циклі: " + (endTime2 - startTime2));

	}
}
