package taskone;

public class Main {

	public static void main(String[] args) {
// Создайте пользовательский класс для описания товара (предположим, это задел для
// интернет-магазина). В качестве свойств товара можете использовать значение цены,
// описание, вес товара. Создайте пару экземпляров вашего класса и протестируйте их
// работу

		Mobile phone1 = new Mobile();
		phone1.setBrands("Apple");
		phone1.setDisplay(6.1);
		phone1.setScreenRefreshRate(60);
		phone1.setStorage(256);
		phone1.setRam(3);
		phone1.setOperatingSystem("IOS");
		phone1.setPrice(60000);

		System.out.println(phone1);
		System.out.println(phone1.aboutPhone());
		System.out.println();

		Mobile phone2 = new Mobile();
		phone2.setBrands("Oneplus");
		phone2.setDisplay(6.7);
		phone2.setScreenRefreshRate(120);
		phone2.setStorage(256);
		phone2.setRam(8);
		phone2.setOperatingSystem("Android");
		phone2.setPrice(48000);

		System.out.println(phone2);
		System.out.println(phone2.aboutPhone());
		System.out.println();

		Mobile phone3 = new Mobile("huawei", 6.1, 90, 128, 6, "android", 20000);
		phone3.setPrice(30000);

		System.out.println(phone3);
		System.out.println(phone3.aboutPhone());

	}

}
