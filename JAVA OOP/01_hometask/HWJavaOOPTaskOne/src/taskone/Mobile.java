package taskone;

public class Mobile {
// Поля
	private String brands;
	private double display;
	private int screenRefreshRate;
	private int storage;
	private int ram;
	private String operatingSystem;
	private int price;

// Конструктор за замовчуванням
	public Mobile() {
		super();
	}

// Конструктор явний
	public Mobile(String brands, double display, int screenRefreshRate, int storage, int ram, String operatingSystem,
			int price) {
		super();
		this.brands = brands;
		this.display = display;
		this.screenRefreshRate = screenRefreshRate;
		this.storage = storage;
		this.ram = ram;
		this.operatingSystem = operatingSystem;
		this.price = price;
	}

//гетери та сетери 
	public String getBrands() {
		return brands;
	}

	public void setBrands(String brands) {
		this.brands = brands;
	}

	public double getDisplay() {
		return display;
	}

	public void setDisplay(double display) {
		this.display = display;
	}

	public int getScreenRefreshRate() {
		return screenRefreshRate;
	}

	public void setScreenRefreshRate(int screenRefreshRate) {
		this.screenRefreshRate = screenRefreshRate;
	}

	public int getStorage() {
		return storage;
	}

	public void setStorage(int storage) {
		this.storage = storage;
	}

	public int getRam() {
		return ram;
	}

	public void setRam(int ram) {
		this.ram = ram;
	}

	public String getOperatingSystem() {
		return operatingSystem;
	}

	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

// Метод в класі
	public String aboutPhone() {
		System.out.println("-----------------------");
		System.out.println("Device - Mobile");
		System.out.println("Brand - " + brands);
		System.out.println("Display - " + display);
		System.out.println("Screen Refresh Rate - " + screenRefreshRate);
		System.out.println("Storage - " + storage);
		System.out.println("RAM - " + ram);
		System.out.println("Operating System " + operatingSystem);
		System.out.println("-----------------------");
		return "Thanks";
	}

	@Override
	public String toString() {
		return "Mobile - " + brands + ", Storage - " + storage + ", RAM - " + ram + " Price = " + price
				+ " more - aboutPhone";
	}
}
