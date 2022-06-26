from typing import List

# List is built in mutable sequence
class Solution:
    # define the function, including self and prices as a list of ints as the parameter
    # return an int
    # define the min price u can get and then compare to all the rest of i
    def maxProfit(self, prices: List[int]) -> int: 
     
        min_price = float('inf')
        max_profit = 0
        
        for i in range(len(prices)):
            #set min_price at the lowest
            if prices[i] < min_price:
                min_price = prices[i]

            #check and update max-profit if prices[i] >= min price
            elif prices[i] - min_price > max_profit:
                max_profit = prices[i] - min_price
                
        return max_profit

# you want the max profit from selling on one day and buying on another, te biggest difference in the array

    def maxProf2(self, prices: List[int]) -> int:
        l, r = 0, 1
        maxP = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                profit = prices[r] - profit[l]
                maxP = max(maxP, profit)
            else:
                l = r
            r += 1
        return maxP