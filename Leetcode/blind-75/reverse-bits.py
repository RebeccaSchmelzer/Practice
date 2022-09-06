class solution:
    def reverseBits(self, n:int) -> int:
        res = 0

        for i in range(32):
            bit = (n >> i) & 1 # get first bit from n
            res = res | (bit << (31 - i)) # put it in the 31 spot
        return res