from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # to map all previous values
    
        for i, n in enumerate(nums): # iterate thru the index and actual number, so i and n
            diff = target-n #before adding to the map, check diff
            if diff in prevMap: # check if its in the map
                return [prevMap[diff], i] # if it is, return the index 
            prevMap[n] = i # set the value n as the current index
        