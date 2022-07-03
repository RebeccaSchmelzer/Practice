from ast import List


class solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums) #bc we have to set it to some value, bc if arr len = 1, u have to return the max
        curMin, curMax = 1, 1 
        
        for n in nums:
            if n == 0:
                curMin, curMax = 1, 1 
                continue 
            
            tmp = curMax * n # tmp to not change curMax on line 15 when we wanna wanna compare again on line 16
            curMax = max(n * curMax, n * curMin, n)
            curMin = max(tmp, n * curMin, n)
            res = max(res, curMax, curMin)

        return res