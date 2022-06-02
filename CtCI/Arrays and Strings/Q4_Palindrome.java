
import java.util.*;

public class Q4_Palindrome {
    //given s string, check if it can be a palindrome if rearranged.
    //for even strs, everything is mirrored and for odd strs, the middle char is the pivot
    public boolean canPermutePalindrome(String s) {
        //init a hashmap with char vals and int vals - look into hashmaps
        //map of chars to integers
        HashMap < Character, Integer > map = new HashMap < > ();
        for (int i = 0; i < s.length(); i++) {
            //put all values in hashmap
            //s.charat(i) put that first
            //then put the int, its default 0 for everyone and then its 1 with the add 1
            //so everyone starts at 1 
            //then when we get to the second half of the palindrome, updates the vals that already have mapping, incremeted by one. getOrDefault only sets to 0 when theres no mapping! every other time its incrementing
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
        }
        //counter for vals in string
        int count = 0;
        //go thru all the keys and count the mod%2 to see if it appears 2wice
        for (char key: map.keySet()) {
            count += map.get(key) % 2;
        }
        return count <= 1;
    }
}


//https://leetcode.com/problems/palindrome-permutation/solution/ for the visual