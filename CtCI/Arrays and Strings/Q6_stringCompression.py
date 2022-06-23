from typing import List
# append a dummy last char

class Solution:
    def compress(self, chars: List[str]) -> int:
        
        chars.append("*" if chars and chars[-1] != "*" else "$")

        left, count = 0, 0
        for right, char in enumerate(chars):
            if chars[left] == char:
                count += 1
            else:
                left += 1
                if count > 1:
                    for digit in str(count):
                        chars[left] = digit
                        left += 1

                chars[left] = char
                count = 1

        return left