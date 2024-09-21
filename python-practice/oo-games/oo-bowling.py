class BowlingGame:
    def __init__(self):
        # Initialize an empty list to store rolls
        self.rolls = []

    def roll(self, pins):
        # Add a roll with the number of pins knocked down
        self.rolls.append(pins)

    def calculate_score(self):
        score = 0
        roll_index = 0

        for frame in range(10):  # There are 10 frames in a game
            if self.is_strike(roll_index):  # Strike condition
                score += 10 + self.strike_bonus(roll_index)
                roll_index += 1
            elif self.is_spare(roll_index):  # Spare condition
                score += 10 + self.spare_bonus(roll_index)
                roll_index += 2
            else:  # Open frame
                score += self.frame_score(roll_index)
                roll_index += 2
                
        return score
    
    def is_strike(self, roll_index):
        # A strike occurs if all 10 pins are knocked down on the first roll
        return self.rolls[roll_index] == 10 if roll_index + 1 < len(self.rolls) else 0
    
    def is_spare(self, roll_index):
        # A spare occurs if the sum of two rolls in a frame equals 10
        return self.rolls[roll_index] + self.rolls[roll_index + 1] == 10 if roll_index + 1 < len(self.rolls) else 0
    
    def strike_bonus(self, roll_index):
    # The bonus for a strike is the sum of the next two rolls
        if roll_index + 2 < len(self.rolls):
            return self.rolls[roll_index + 1] + self.rolls[roll_index + 2]
        else:
            return 0
    
    def spare_bonus(self, roll_index):
        # The bonus for a spare is the next roll
        return self.rolls[roll_index + 2]
    
    def frame_score(self, roll_index):
        # The score for an open frame is simply the sum of the two rolls
        return self.rolls[roll_index] + self.rolls[roll_index + 1] if roll_index + 1 < len(self.rolls) else 0

# Example usage:
game = BowlingGame()
# Example sequence of rolls (rolls should match actual gameplay for testing)
game.roll(10)  # Strike in the first frame
game.roll(7)
game.roll(3)   # Spare in the second frame
game.roll(9)
game.roll(0)   # Open frame in the third frame
# Continue adding rolls until the game is complete...
game.roll(10)  # Strike for the 10th frame's first roll
game.roll(10)  # Strike in bonus roll 1
game.roll(9)   # 9 pins in the last bonus roll

print(game.calculate_score())  # Outputs the final score of the game


## oo bc instead of keeping in info in local vars like in functional, we store game state in instance vars, encapsed in methods for clarity
# helper methods are encapsulating specific logic

# we can extend this to more logic added like tracking frames and handling edge cases. 