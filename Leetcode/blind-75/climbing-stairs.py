class solution:
    def climbingStairs(self, n:int) -> int:
        one, two = 1, 1 

        for i in range(n-1):
            #update 1 first, but set it in a var so u can make it two after the addition
            temp = one
            one = one + two
            two = temp

        return one