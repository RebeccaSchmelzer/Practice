class Game:
    def __init__(self) -> None:
        self.rolls = []

    def roll(self, pins):
        self.rolls.append(pins)

    def score(self):
        score = 0
        roll_index = 0

        for frame in range(10):  # A bowling game consists of 10 frames
            # Ensure we have enough rolls left
            if roll_index >= len(self.rolls):
                break

            # Strike case
            if self.rolls[roll_index] == 10:  # Strike
                score += 10
                if roll_index + 1 < len(self.rolls):
                    score += self.rolls[roll_index + 1]
                if roll_index + 2 < len(self.rolls):
                    score += self.rolls[roll_index + 2]
                roll_index += 1  # Strike uses 1 roll

            # Spare case
            elif roll_index + 1 < len(self.rolls) and self.rolls[roll_index] + self.rolls[roll_index + 1] == 10:  # Spare
                score += 10
                if roll_index + 2 < len(self.rolls):
                    score += self.rolls[roll_index + 2]
                roll_index += 2  # Spare uses 2 rolls

            # Regular frame
            elif roll_index + 1 < len(self.rolls):  # Check for valid indices
                score += self.rolls[roll_index] + self.rolls[roll_index + 1]
                roll_index += 2  # Move past the two rolls in this frame

        return score


# Testing the game
bowling_game = Game()
bowling_game.roll(10)  # First frame: 8 + 2 (spare)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
bowling_game.roll(10)
print(bowling_game.score())  # Should return 23