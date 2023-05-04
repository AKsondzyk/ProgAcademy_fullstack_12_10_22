package taskone;

public class Ship implements Runnable {
	private Port dock;
	private int cargo = 10;

	public Ship(Port dock) {
		super();
		this.dock = dock;
	}

	@Override
	public void run() {
		dock.unload(cargo);
	}
}
