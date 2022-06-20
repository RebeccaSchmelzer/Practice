public class Q3_URLify {
    

    //use char arrays bc java strs immutable
    public static void URLify(char[] str, int length) {
        int spaceCount = 0, newLen, i;
        for(i = 0; i<str.length; i++) {
            if(str[i] == ' ') {
                spaceCount++;
            }
        }

        newLen = length + spaceCount*2;
        str[newLen] = '\0';
        for(i = length -1; i >=0; i--) {
            if(str[i] == ' ') {
                str[newLen -1] = '0';
                str[newLen -2] = '2';
                str[newLen -3] = '%';
                newLen = newLen-3;
            }
            else {
                str[newLen - 1] = str[i];
                newLen--;
            }
        }
    
    }
    
    
}
