class Search{
  static int prevMid;
  static int mid = -2;
  public int checkInt(int i,int arr[]){
    return searchInt(i, arr,arr.length,0);
  }

  private int searchInt(int num, int[] arr, int right, int left){
   // prevMid = mid;
    mid = (right + left) / 2;
    /*if (mid == prevMid){
      System.out.println("Not found");
      return -1;
    }*/
    
    System.out.println("The mid is: " + mid + " Left: " + left + " Right: " + right);
    if (right < left){
      System.out.println("Not found");
      return -1;
    }
    
    
    if (num == arr[mid]){
      System.out.println("Found at index: " + num);
      System.out.println("The mid is: " + mid + " Left: " + left + " Right: " + right);
      return num;
    }
    if (num > arr[mid]){
      return searchInt(num,arr,right, mid + 1);//We already know that it isn't the midpoint. SO move one more to the right. This way it can even go past each other. 
    }
    if (num < arr[mid]){
      return searchInt(num,arr,mid - 1,left);
    }
   
    return -1;
  }
}

