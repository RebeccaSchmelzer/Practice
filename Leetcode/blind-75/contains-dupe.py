


from typing import List


class Solution:
    def containsDupe(self, nums: List[int]) -> bool:
        hashset = set() # init  a set
    
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n) 
        return False