package tasktwo;

public class Main {

	public static void main(String[] args) {

		CopyFiles copyfile = new CopyFiles();

		Sender sender = new Sender(copyfile);
		Receiver receiver = new Receiver(copyfile);

		Thread thread1 = new Thread(sender);
		Thread thread2 = new Thread(receiver);

		thread1.start();
		thread2.start();

		try {
			thread1.join();
			thread2.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}

}
