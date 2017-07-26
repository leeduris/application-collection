public class J218 {

  public static void main(String[] args) {
    int m[][] = { { 4, 2 }, { 1, 7 }, { 4, 5 }, { 1, 2 }, { 1, 1 }, { 4, 1 } };

    System.out.print("Before: ");
    printArray(m);
    
    sort(m);

    System.out.print("After:  ");
    printArray(m);
  }

  public static void sort(int m[][]) {
    for (int i = 0; i < m.length; i++) {
      double currentMin = m[i][0];
      int currentMinIndex = i;

      for (int j = i; j < m.length; j++) {
        if (currentMin > m[j][0] // primary sort
            || (currentMin == m[j][0] && m[currentMinIndex][1] > m[j][1])) // secondary
                                                                            // sort
        {
          currentMin = m[j][0];
          currentMinIndex = j;
        }
      }

      // Swap list[i] with list[currentMinIndex] if necessary;
      if (currentMinIndex != i) {
        int temp0 = m[currentMinIndex][0];
        int temp1 = m[currentMinIndex][1];
        m[currentMinIndex][0] = m[i][0];
        m[currentMinIndex][1] = m[i][1];
        m[i][0] = temp0;
        m[i][1] = temp1;
      }
    }
  }

  public static void printArray(int m[][]) {
      System.out.print("{");
    for (int i = 0; i < m.length-1; i++) {
      System.out.print("{" + m[i][0] + "," + m[i][1] + "},");
    }
      System.out.print("{" + m[m.length-1][0] + ", " + m[m.length-1][1] + "}}\n");
  }

}
