from ast import List


class solution:
    def countBits(self, n:int) -> List[int]:
        dp = [0] * (n+1) # dp and ans are the same so just return that
        ans =[0] #will alwasy have one 0
        offset = 1
        for i in range(1, n+1): #non inclusive, goes from 1 to n
            #check to double offset
            if offset * 2 == i:
                offset = i
            dp[i] = 1 + dp[i - offset]

        return dp