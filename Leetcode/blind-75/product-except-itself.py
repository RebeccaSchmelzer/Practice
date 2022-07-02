from ast import List


class Solution:
    def productExceptSelf(self, nums:List[int]) -> List[int]:
        res = [1] * (len(nums)) #result array, does not count as extra space. make it the length of input arr
        prefix = 1 # define prefix as default val 1
        for i in range(len(nums)): # prefix loop
            res[i] = prefix # input the prefix
            prefix *= nums[i] # update prefix by multiplying current val
        postfix = 1
        for i in range(len(nums) -1, -1, -1): # start at the end and go to the INNI DE BENNINGING
            res[i] *= postfix # multiply by vaue thats already in result
            postfix *= nums[i]
        return res


