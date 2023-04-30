package homeworksixtaskone;

public class Main {

	public static void main(String[] args) {
		Thread[] factorialArr = new Thread[100];
		for (int i = 0; i < factorialArr.length; i++) {
			FactorialByTread factCalc = new FactorialByTread(i);
			Thread thread = new Thread(factCalc);
			factorialArr[i] = thread;
			thread.start();
		}
	}
}

