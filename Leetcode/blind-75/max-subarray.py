from ast import List


class solution:
    def maxSubarray(self, nums: List[int]) -> int:
        maxSub = nums[0] # 0th val will always exist so make it the first of maxSub
        curSum = 0 # curSum init

        for n in nums: 
            if curSum < 0:
                curSum = 0 # set curSum back to zero if the prefix is neg, then add the curr val to the sum
            curSum += n

            maxSub = max(maxSub, curSum) # set the max subarray as the max between 
        return maxSub