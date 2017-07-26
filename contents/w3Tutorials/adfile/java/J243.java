import java.math.*;

public class J243 {

     public static void main(String[] args) {
      long startTime = System.currentTimeMillis();

      // bigNum represents Long.MAX_VALUE
      BigInteger bigNum = new BigInteger(Long.MAX_VALUE + "");
      // bigNum is now larger than Long.MAX_VALUE
      bigNum.add(BigInteger.ONE);

      int count = 1;
      while (count <= 5) {
       if (isPrime(bigNum)) {
        System.out.println(bigNum);
        count++;
       }

       bigNum = bigNum.add(BigInteger.ONE);
      }

      long endTime = System.currentTimeMillis();
      System.out.println("Time spent is " +
       (endTime - startTime) + " milliseconds");
     }

     public static boolean isPrime(BigInteger num) {

      BigInteger halfNum = num.divide(new BigInteger("2"));

      for (BigInteger divisor = new BigInteger("2");
        divisor.compareTo(halfNum) >= 0;
        divisor = divisor.add(BigInteger.ONE)) {
       if (num.remainder(divisor).equals(BigInteger.ZERO)) {
        return false;
       }
      }

      return true;
     }
    }