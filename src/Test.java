public class Test {
    public static void main(String[] args) {
        String str = "hello Test";
        System.out.println(str);
        // 1111
        // 1110

        // 1110
        // 1101

        // 1100
        // 1011

        // 1000
        // 0111
        System.out.println("result=" + countOnes(15));
    }

    public static int countOnes(int x) {
        int ones = 0;
        while (x > 0) {
            x &= (x -1);
            System.out.println(x);
            ones ++;
        }
        return ones;
    }
}
