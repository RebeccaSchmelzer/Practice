class solution:
    def hammingWeight(self, n: int) -> int:
        res = 0 
        while n > 0:
            res += n % 2 #if 0 nothing is added so it doesnt matter, only increments with 1
            n = n >> 1
        return res


    def hammingWeightMoreEfficient(self, n: int) -> int:
        res = 0 
        while n > 0:
            n = n & (n-1)
            res += 1
        return res