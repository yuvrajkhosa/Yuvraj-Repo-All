//Recreation of split and trim functions
import java.util.*;
class Sentence{
  ArrayList<String> words = new ArrayList<String>(1);
  int endSub;//To counter any random whitespace
  public ArrayList<String> sentenceSplit(String s){
    int i = 0;

    //System.out.println(s);
    if(s.equals("")){//Incase Given empty String
      System.out.println("HERE");
      this.words.add(s);
      return(this.words);
    }
    while(s.charAt(i) == ' '){//To get rid of whitespace ("  Hello")
        i++;
      }
    this.endSub = i;//Where the whitespace ended

      while(this.endSub < s.length()){//Find the end of word
        if(s.charAt(this.endSub) == ' '){//When found end
          this.words.add(s.substring(i, this.endSub));
          break;
        }
        if(this.endSub == s.length() - 1){//Not found means at end of word | BASECASE
          this.words.add(s.substring(i, this.endSub + 1));
          return(this.words);
        }
      this.endSub++;
      }
      s = s.substring(this.endSub, s.length());
      return(sentenceSplit(s));//Recursion
  }
}
