package taskone;

public class Port {

	public synchronized void unload(int cargo) {

		String ShipThread = Thread.currentThread().getName();

		System.out.println("Корабель що працює в потоці під номером " + ShipThread + " почав вивантаження");
		for (int i = 0; i < cargo; i++) {
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println("Вантаж " + (i + 1) + " вивантажено");
		}
		System.out.println("Корабель що працював в потоці під номером " + ShipThread + " завершив вивантаження");
	}
}
