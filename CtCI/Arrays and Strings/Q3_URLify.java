public class Q3_URLify {
    

        //use char arrays bc java strs immutable
    public static void URLify(char[] str, int length) {
        //init counter for spaces, new len for trippling, index i
        int spaceCount = 0, newLen, i;
        //find all spaces
        for(i = 0; i < length; i++) {
            if (str[i] == ' ') {
                spaceCount++;
            }
        }
        //init newlen to the given length plus the space count * 2, its trippled bc the og len already has space
        newLen = length + spaceCount * 2;
        //give a null char to the very end
        str[newLen] = '\0';
        //iterate starTING AT THE END, REVERSE THAT BITCH
        for(i = length-1; i >= 0; i--){
            //IF THERE A SPACE
            if(str[i] == ' ') {
                //so starting at the end, if theres a space, new len-1 and so on with replace it
                //then push new len back -3 to a new string starting point.
                str[newLen - 1] = '0';
                str[newLen - 2] = '2';
                str[newLen - 3] = '%';
                newLen = newLen-3;
            }
            //if its a normal char, just skip it by pushing back the newlen - 1 and setting that to i
            //then decrement newLen again
            else {
                str[newLen -1] = str[i];
                newLen--;
            }
        }
    }
}
