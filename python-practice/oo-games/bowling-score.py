# bowling game
# strke when all 10 pins are knocked down in 1 roll
# spare when all knocked down in 2 rolls
# An open frame occurs when less than 10 pins are knocked down after two rolls. The score is simply the total number of pins knocked down in that frame.

# we need to track the score frame by frame (pin) and handle edge cases like strikes abnd spares. 

def calculate_bowling_score(rolls):
    score = 0
    roll_index = 0

    for frame in range(10):
        if rolls[roll_index] == 10:
            score += 10 + rolls[roll_index + 1] + rolls[roll_index + 2]
            roll_index += 1
        elif rolls[roll_index] + roll_index[roll_index + 1] == 10:
            score += 10 + rolls[roll_index + 2]
            roll_index += 1
        else:
            score += rolls[roll_index] + rolls[roll_index + 1]
            roll_index += 2
    return score
