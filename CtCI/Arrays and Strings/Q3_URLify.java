public class Q3_URLify {
    

    //use char arrays bc java strs immutable
    public static void permutation(char[] str, int length) {
        //count the spaces first
        int spaceCount = 0, newLen, i;
        for(i = 0; i<str.length;i++) {
            //use single quotes for char arrays
            if(str[i] == ' ') {
                spaceCount++;
            }
        }
        //triple the len
        newLen = length + spaceCount * 2;
        //make the last char null
        str[newLen] = '\0';
        for(i = length-1; i>0;i--) {
            if(str[i]==' ') {
                str[newLen - 1] = '0';
                str[newLen - 2] = '2';
                str[newLen - 3] = '%';
                newLen = newLen-3;
            } else {
                str[newLen-1] = str[i];
                newLen--;
            }
        } 
    }
    
}
