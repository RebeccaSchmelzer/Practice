import java.util.*;

public class Q4_Palindrome {
    //given s string, check if it can be a palindrome if rearranged.
    //for even strs, everything is mirrored and for odd strs, the middle char is the pivot
    public static boolean isPalindromePermutation(String s) {
        HashMap <Character, Integer> map = new HashMap<>();
        for(int i = 0; i < s.length(); i++) {
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) +1);
        }
        int count=0;
        for(char key: map.keySet()) {
            count += map.get(key) %2;
        }
        return count <= 1;
    }
}