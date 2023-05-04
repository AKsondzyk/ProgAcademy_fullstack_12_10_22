package taskone;

public class Main {

	public static void main(String[] args) {

		Port dockOne = new Port();
		Port dockTwo = new Port();

		Ship shipOne = new Ship(dockOne);
		Ship shipTwo = new Ship(dockTwo);
		Ship shipThree = new Ship(dockOne);

		Thread threadOne = new Thread(shipOne);
		Thread threadTwo = new Thread(shipTwo);
		Thread threadThree = new Thread(shipThree);

		threadOne.start();
		threadTwo.start();
		threadThree.start();

		try {
			threadOne.join();
			threadTwo.join();
			threadThree.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
