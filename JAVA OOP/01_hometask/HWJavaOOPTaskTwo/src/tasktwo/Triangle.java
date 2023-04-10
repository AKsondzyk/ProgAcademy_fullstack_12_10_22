package tasktwo;

public class Triangle {
// Поля
	private double sideA;
	private double sideB;
	private double sideC;
	private double area;

	public Triangle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Triangle(double sideA, double sideB, double sideC) {
		super();
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}

	public double getSideA() {
		return sideA;
	}

	public void setSideA(int sideA) {
		this.sideA = sideA;
	}

	public double getSideB() {
		return sideB;
	}

	public void setSideB(int sideB) {
		this.sideB = sideB;
	}

	public double getSideC() {
		return sideC;
	}

	public void setSideC(int sideC) {
		this.sideC = sideC;
	}

//	public String getArea() {
//		double halfPerimetr = (sideA + sideB + sideC) / 2;
//		area = Math.sqrt(halfPerimetr * (halfPerimetr - sideA) * (halfPerimetr - sideB) * (halfPerimetr - sideC));
//		return "Площа вашого трикутника = " + area;
//	}
	
	public double getArea() {
		double halfPerimetr = (sideA + sideB + sideC) / 2;
		area = Math.sqrt(halfPerimetr * (halfPerimetr - sideA) * (halfPerimetr - sideB) * (halfPerimetr - sideC));
		return area;
	}
	

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Сторони вашого трикутника: A = " + sideA + " B = " + sideB + " C = " + sideC;
	}

}
