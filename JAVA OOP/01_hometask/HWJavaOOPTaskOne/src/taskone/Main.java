package taskone;

public class Main {

	public static void main(String[] args) {
// Создайте пользовательский класс для описания товара (предположим, это задел для
// интернет-магазина). В качестве свойств товара можете использовать значение цены,
// описание, вес товара. Создайте пару экземпляров вашего класса и протестируйте их
// работу

		Mobile phone1 = new Mobile();
		phone1.brands = "Apple";
		phone1.display = 6.1;
		phone1.screenRefreshRate = 60;
		phone1.storage = 256;
		phone1.ram = 3;
		phone1.operatingSystem = "IOS";
		phone1.price = 60000;

		System.out.println(phone1);
		System.out.println(phone1.aboutPhone());
		System.out.println();

		Mobile phone2 = new Mobile();
		phone2.brands = "Oneplus";
		phone2.display = 6.7;
		phone2.screenRefreshRate = 120;
		phone2.storage = 256;
		phone2.ram = 8;
		phone2.operatingSystem = "Android";
		phone2.price = 48000;

		System.out.println(phone2);
		System.out.println(phone2.aboutPhone());
		System.out.println();

		Mobile phone3 = new Mobile("huawei", 6.1, 90, 128, 6, "android", 20000);
		phone3.setPrice(30000);

		System.out.println(phone3);
		System.out.println(phone3.aboutPhone());

	}

}
