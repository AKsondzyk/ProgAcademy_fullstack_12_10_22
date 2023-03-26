package tasksPlusOne;

import java.util.Scanner;

public class tasksPlusOne {

	public static void main(String[] args) {
// С помощью цикла (только одного) нарисовать фигуру изображенную ниже. Максимальная высота
// этой фигуры вводится с клавиатуры (в примере максимальная высота — 4.).
// *
// **
// ***
// ****
// ***
// **
// *

		Scanner sc = new Scanner(System.in);

		int h;
		
		System.out.println("Введіть висоту трикутника");
		h = sc.nextInt();
	
		for (int i = 1; i <= ((h * 2) - 1); i++) {

            if (i <= h) {
                for (int j = 1; j <= i; j++) {
                    System.out.print("*");
                }
            } else {
                for (int k = 1; k <= ((2 * h) - i); k++) {
                    System.out.print("*");
                }
            }
            System.out.println();
        }
	
	}

}
