from ast import List


class solution:
    def maxAreaBruteForce(self, height: List[int]) -> int:
        res = 0 # define the result

        for l in range(len(height)):
            for r in range(l+1, len(height)):
                area = (r -l) * min(height[l], height[r]) # use bottleneck to find height
                res = max(res, area)
        return res 

    def maxAreaLinear(self, height: List[int]) -> int:
        res = 0
        l, r = 0, len(height) -1

        while l < r:
            area = (r -l) * min(height[l], height[r]) # use bottleneck to find height
            res = max(res, area)

            if height[l] < height[r]:
                l += 1
            elif height[r] < height[l]:
                r -= 1
            else: #if equal
                r -= 1 
        return res