package homeworksixtasktwo;

public class SumaCalc implements Runnable {
	private int firstIndex;
	private int lastIndex;
	private int[] array;
	private long suma = 0;

	public long getSuma() {
		return suma;
	}

	public SumaCalc(int[] array, int firstIndex, int lastIndex) {
		super();
		this.array = array;
		this.firstIndex = firstIndex;
		this.lastIndex = lastIndex;
	}

	private long sumaCalculator(int[] array, int firstIndex, int lastIndex) throws ArrayIndexOutOfBoundsException {
		if (lastIndex > (array.length)) {
			throw new ArrayIndexOutOfBoundsException();
		} else {
			for (int i = firstIndex; i <= lastIndex; i++) {
				suma += array[i];
			}
		}
		return suma;

	}

	@Override
	public void run() {
		sumaCalculator(array, firstIndex, lastIndex);
	}

}
