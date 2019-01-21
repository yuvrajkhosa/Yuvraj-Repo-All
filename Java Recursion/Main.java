import java.lang.String;
class Main {
static int amountOfEars = 0;

  public static void main(String[] args) {
    Sentence s = new Sentence();
    System.out.println(s.sentenceSplit("The Quick Brown Fox jumped over the giant           cow sitting their gaining weight COW!"));
    System.out.println(factorial(5));
    System.out.println(factorialIter(5));
    System.out.println(bunny(5));
    System.out.println(howManyNumbers(7540267, 7));
    System.out.println(piReplace("HellopiThere"));
  }

  public static int factorial(int n){
    if (n == 2){
      return n;
    }
    return (n * factorial(n-1));
    }
  public static int factorialIter(int n){
    int total = 1;
    for(int i = 1; i <= n; i++){
      total *= i;
    }
    return total;
  }

    //Coding Bat Recursion Problems
  public static int bunny(int bunnies) {
    if (bunnies == 0){
    return 0;
    }
    int ears = bunnies % 2 == 0 ? 3 : 2;
    return(ears + bunny(bunnies-1));
  }

  public static int howManyNumbers(int num, int whichNum){
    if (num <= 0) {
      return 0;
    }
    int isSeven = ((num % 10) == whichNum ? 1 : 0);
    return (isSeven + howManyNumbers(num / 10,whichNum));
  }


  public static String piReplace(String word){
    //System.out.println("Entry Word: " + word);
    if (word.length() <= 1){//Used to be '== 1'
      return(word);
    }
    String str = word.substring(0,1);
    int skipLetter = 0;
    if (word.substring(0,2).equals("pi")){
      str = "3.14";
      skipLetter = 1;
    }
    //System.out.println("Replacement String: " + str);
    return (str + piReplace(word.substring(1 + skipLetter,word.length())));


  }

}
