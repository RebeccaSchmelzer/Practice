//first check if string is unicode or ascii
//check if len > 128 ie the num of chars in ascii
//create an array of bools
//loop thru the bools to and check if the char has been set to true
//if it has, it is not unique and return false
//if it hasnt, set the char to true and keep going thru the loop.

public class Q1_isUnique {



    public static void main(String[] args) {
		String[] words = {"abcde", "hello", "apple", "kite", "padle"};
		for (String word : words) {
			System.out.println(word + ": " + isUniqueChars(word));
		}
	}


	public static boolean isUniqueChars(String str) {
		if (str.length() > 128) {
			return false;
		}
		boolean[] char_set = new boolean[128];
		for(int i = 0; i < str.length(); i++) {
			int val = str.charAt(i);
			if(char_set[val] == true) return false;
			char_set[val] = true;
		}
		return true;
    }

}

