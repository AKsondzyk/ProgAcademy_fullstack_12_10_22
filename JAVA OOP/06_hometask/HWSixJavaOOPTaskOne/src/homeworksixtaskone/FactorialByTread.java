package homeworksixtaskone;

import java.math.BigInteger;

public class FactorialByTread implements Runnable {
	private int number;
	private BigInteger factorialSum = BigInteger.ZERO;

	public FactorialByTread(int number) {
		super();
		this.number = number;
	}

	public BigInteger getFactorialSum() {
		return factorialSum;
	}

	public BigInteger calculateFactorial(int n) {
		if (n != 0) {
			factorialSum = BigInteger.ONE;
		}
		for (int i = 2; i <= n; i++) {
			factorialSum = factorialSum.multiply(BigInteger.valueOf(i));
		}
		return factorialSum;
	}

	@Override
	public void run() {
		System.out.println("Thread " + number + ", factorial = " + calculateFactorial(number));

	}

}
