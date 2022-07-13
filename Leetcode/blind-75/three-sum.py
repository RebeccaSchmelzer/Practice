from ast import List


class solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = [] #init a res
        nums.sort() 

        for i, a in enumerate(nums):
            if i > 0 and a == nums[i-1]: #check for a dupes by checking that we dont use the same value as a twice.
                # check that this isnt the first num in the array and that a is equal to its neighbor
                # so were gonna continue were not gonna use this value
                continue
            # now 2 pters!
            l,r = i+1, len(nums)-1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                #check to move pointers left or right based on the two sum
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l-1] and l < r: # keep shifting pattern until no dupes
                        l += 1

        return res