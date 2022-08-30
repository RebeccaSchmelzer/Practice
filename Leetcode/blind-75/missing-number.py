from ast import List


class solution:
    def missingNum(self, nums: List[int]) -> int:
        res = len(nums) # iterate thru input and range arrays and add them
        # make the res equal to the length of the input array
        # iterate thru that length and subtract the input array value from each index, range - input! 
        for i in range(len(nums)):
            res += (i - nums[i]) # we want to add every value from the range array but subtract every val from nums 
        return res