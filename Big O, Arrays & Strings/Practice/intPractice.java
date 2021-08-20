public class intCakeBigOQuestions
{
	public static int[] getProdOfAllIntsExceptIndex(int[] ogList) {
	    /*If array has less then 2 ints, return an exception as at 
	    any index there is no other ints to multiply.*/
	    if (ogList.length < 2) {
	        throw new IllegalArgumentException("getting product of nums at other indices requires at least 2 nums, 3 indices at least");
	    }
	    
	    /*init a new array with the length of the input array*/
	    /*this will hold the final array with all the products*/
	    int[] finalProds = new int[ogList.length];
	    
	    /*For each index, i'll find the product of all the ints
	    before it, and store the total product for each iteration.*/
	    /*First, init the product to be 1 as there are no other
	    indices before 0*/
	    int prodSoFar = 1;
	    /*so now iterate through the length of the ogList*/
	    for(int i = 0; i < ogList.length; i++) {
	        /*At the current index, put the product so far in the 
	        final array, I am creating a new array of products before
	        each index and storing it.*/
	        /*After storing the product so far, multiply it by current 
	         index of the ogList for the next iteration*/
	        finalProds[i] = prodSoFar;
	        prodSoFar *= ogList[i];
	         
	    }
	    
	    /*Now, find the product of all ints after the current index
	    The final array already has the product of all ints before
	    it, so now this loop will store the total product of all
	    the other ints.*/
	    /*We are doing this by instead of building another array to keep
	    track of the prods after the index, I am just multiplying the 
	    prod just stored (prodSoFar) by the multiply it by the 
	    matching integer in the finalProds array that is currently
	    storing the prods before each index*/
	    /*First, init prodSoFar again as one*/
	    int prodSoFar = 1;
	    /*Now iterate through the ogList but this time backwards as we
	    want the prods after each index.*/
	    for(int i = ogList.length - 1; i >= 0; i--) {
	        /*Now multiply the current index of the prods before index
	        (finalProds) by the current product. The, like last time, 
	        multiply the prodSoFar by the curent index of the ogList\
	        to store a higher value to store in the final array in the \
	        next iteration.*/
	        finalProds[i] *= prodSoFar;
	        prodSoFar *= ogList[i];
	    }
	    
	    /*Then, return the final list of ints*/
	    return finalProds;
	}
}