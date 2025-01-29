class Game:
    def __init__(self) -> None:
        self.rolls = []

    def roll(self, pins):
        self.rolls.append(pins)

    def score(self):
        score = 0
        roll_index = 0

        for frame in range(10):  # A bowling game consists of 10 frames
            # Strike case
            if roll_index < len(self.rolls) and self.rolls[roll_index] == 10:  # Strike
                score += 10
                if roll_index + 1 < len(self.rolls):
                    score += self.rolls[roll_index + 1]  # Bonus from the next roll
                if roll_index + 2 < len(self.rolls):
                    score += self.rolls[roll_index + 2]  # Bonus from the roll after next
                roll_index += 1  # Move to next roll

            # Spare case
            elif roll_index + 1 < len(self.rolls) and self.rolls[roll_index] + self.rolls[roll_index + 1] == 10:  # Spare
                score += 10
                if roll_index + 2 < len(self.rolls):
                    score += self.rolls[roll_index + 2]  # Bonus from the next roll
                roll_index += 2  # Move to the roll after the spare

            # Regular frame case
            else:
                if roll_index + 1 < len(self.rolls):  # Ensure valid index
                    score += self.rolls[roll_index] + self.rolls[roll_index + 1]
                roll_index += 2  # Move past the two rolls

        return score


# Testing the game
bowling_game = Game()
# Rolling strikes for a perfect game
for _ in range(12):  # 10 frames + 2 extra rolls for strikes in the 10th frame
    bowling_game.roll(10)
print(bowling_game.score())  # Should return 300

# Testing another scenario
simple_bowling_game = Game()
simple_bowling_game.roll(8)  # First frame: 8
simple_bowling_game.roll(2)  # First frame spare
simple_bowling_game.roll(3)  # Second frame: 3
simple_bowling_game.roll(7)  # Second frame spare
print(simple_bowling_game.score())  # Should return 23