class Game:
    def __init__(self) -> None:
        self.rolls = []

    def roll(self, pins):
        self.rolls.append(pins)

    # Check for strike in the 10th frame
    def tenth_frame_bonus_strike(self):
        return len(self.rolls) >= 20 and self.rolls[18] == 10

    # Check for spare in the 10th frame
    def tenth_frame_bonus_spare(self):
        return len(self.rolls) >= 20 and self.rolls[18] + self.rolls[19] == 10

    def score(self):
        score = 0
        roll_index = 0

        for frame in range(10):  # A bowling game consists of 10 frames
            if roll_index >= len(self.rolls):
                break

            # If the roll is a strike
            if self.rolls[roll_index] == 10:
                score += 10
                if roll_index + 1 < len(self.rolls):
                    score += self.rolls[roll_index + 1]
                if roll_index + 2 < len(self.rolls):
                    score += self.rolls[roll_index + 2]
                roll_index += 1

            # If the roll is a spare
            elif roll_index + 1 < len(self.rolls) and self.rolls[roll_index] + self.rolls[roll_index + 1] == 10:
                score += 10
                if roll_index + 2 < len(self.rolls):
                    score += self.rolls[roll_index + 2]
                roll_index += 2

            # Regular frame case
            else:
                if roll_index + 1 < len(self.rolls):
                    score += self.rolls[roll_index] + self.rolls[roll_index + 1]
                roll_index += 2

        # Handle 10th frame bonuses
        if self.tenth_frame_bonus_strike():
            score += self.rolls[19] + self.rolls[20]
        elif self.tenth_frame_bonus_spare():
            score += self.rolls[20]

        return score


# Testing the game
bowling_game = Game()
bowling_game.roll(10)
bowling_game.roll(10)  # First frame: spare
print(bowling_game.score())  # Should return 23

bowling_game = Game()
# Rolling strikes for a perfect game
for _ in range(12):  # 10 frames + 2 extra rolls for strikes in the 10th frame
    bowling_game.roll(10)
print(bowling_game.score())  # Should return 300