package tasktwo;

import java.util.Arrays;

public class CopyFiles {
	byte[] bytes;
	private boolean check;
	private boolean stop;

	public CopyFiles() {
		super();
	}

	public synchronized byte[] getBytes() {
		while (!check) {
			try {
				wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		byte[] temp = this.bytes;
		check = false;
		notifyAll();
		return temp;
	}

	public synchronized void setBytes(byte[] bytes, int length) {
	    while (check) {
	        try {
	            wait();
	        } catch (InterruptedException e) {
	            e.printStackTrace();
	        }
	    }
	    this.bytes = Arrays.copyOf(bytes, length);
	    check = true;
	    notifyAll();
	}

	public boolean isStop() {
		return stop;
	}

	public void setStop(boolean stop) {
		this.stop = stop;
	}
}
