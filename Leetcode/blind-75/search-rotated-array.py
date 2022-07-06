from ast import List


class solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums-1)

        while l <= r:
            m = (l + r) //2
            if target == nums[m]:
                return m
            
            # left
            if nums[l] <= nums[m]: 
                if target > nums[m] or target < nums[l]:
                    l = m+1
                else:
                    r = m -1
            #right
            else:
                if target < nums[m] or target > nums[r]:
                    r + m -1
                else:
                    l = m + 1
        return -1
