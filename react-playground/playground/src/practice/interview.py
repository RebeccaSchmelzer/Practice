# a bowling game test
# how to score the game
# single game is 10 frames, each frame, each player has 2 opps to knock down 10 pins
# strike is 10 knocked down in the first shot + value of next two rolls
# spare is 10 knocked down in one frame, bonus = number of pins knocked down for the next roll only
# on tenth and final frame, if player rolls strike or spare you're allowed to roll those next 2 balls or 1 ball in terms of strike
# requirement:
    # class called game - 2 methods
    # roll that excepts pins, number of pins knocked down in that roll
    # score - returns total score that that player got, no parameters

# 2 rolls per frame, up to 20 rolls in the game
# extra roll at the end

class Game:
    def __init__(self) -> None:
        self.rolls = [] 

    def roll(self, pins):
        self.rolls.append(pins)

    # redundant code!
    # strike in 10th frame
    # original version used negative indexing which did not correctly index the last frame
    # couldnt handle the difference between the last frame and earlier frames
    # def tenth_frame_bonus_strike(self):
    #     # check if there have been at least 20 rolls and that a 10th frame exists
    #     # and if the the first roll in the 10th frame is a strike.
    #     if len(self.rolls) >= 20 and self.rolls[18] == 10:
    #         return True
    #     else:
    #         return False
    
    # def tenth_frame_bonus_spare(self):
    #     # same as for spare! check if a 10th frame has at least occured and if the last 2 rolls before the bonus is equal to 10 pins knocked down
    #     # (we start at index 0 so last 2 rolls before bonus is 18 and 19)
    #     if len(self.rolls) >= 20 and self.rolls[18] + self.rolls[19] == 10:
    #         return True
    #     else:
    #         return False

    def score(self):
        score = 0
        roll_index = 0
        
        # fixed up this for loop!
        # need to loop over frames not rolls, we need to run this loop exactly 10 times, once for each frame.
        # although the frame variable itself isn't being used, all we need is roll_index to be iterated through the rolls array 
        # as well as an arbitrary variable frame to define to make sure the for loop runs only 10 times for each of the 10 frames. 
        for frame in range(10):

            #check that roll_index is within range first
            if roll_index >= len(self.rolls):
                break

            # if the roll is strike
            if self.rolls[roll_index] == 10: 
                # add the score of 10 pins knocked down
                # add the 2 bonus scores of the next 2 indexes (if they exist)
                score += (10 + (self.rolls[roll_index + 1] if roll_index + 1 < len(self.rolls) else 0) 
                            + (self.rolls[roll_index + 2] if roll_index + 2 < len(self.rolls) else 0))
                roll_index += 1

            # if roll is spare
            # check if roll_index + 1 exists in self.rolls and if the current and next roll is 10 pins knocked down
            elif roll_index + 1 < len(self.rolls) and self.rolls[roll_index] + self.rolls[roll_index + 1] == 10: 
                # add the spare score (10) to the final score as well as the first roll of the next frame as a bonus
                score += (10 + (self.rolls[roll_index + 2] 
                        if roll_index + 2 < len(self.rolls) else 0))
                roll_index += 2

            # regular roll
            else: 
                # add the score of the entire frame, the current roll_index and the next one as well
                # checking to make sure that we're still within the boundary of the rolls array
                score += ((self.rolls[roll_index] + self.rolls[roll_index + 1]) 
                          if roll_index + 1 < len(self.rolls) 
                          else self.rolls[roll_index])
                roll_index += 2

        # 10th frame bonus cases now handled outside the loop after roll_index boundary checks start returning 0
        # check if it's a strike or a spare
        # if strike add the bonus 2 rolls at index 19 and 20, given that index 18 was the strike roll in the 10th frame
        # if spare it means that we only add the last index as the only bonus roll to the final score given that index 18 and 19 added up to a spare
        
        # now redundant! with new test case added I saw the redundancy of the extra 10th frame logic added here.
        # other test cases worked with this logic added because they didn’t involve combos of regular rolls and strikes at the end that exposed the issue with the extra 10th frame logic. this newest test case exposed double counting the bonus score in the 10th frame. 
        # now taking this out I see that the score function in itself, using the loop logic only and not adding more for the 10th frame, can correctly calculate the score of a bowling game.
        # if self.tenth_frame_bonus_strike():
        #     score += self.rolls[19] + self.rolls[20]
        #     print("final", score)
        # elif self.tenth_frame_bonus_spare():
        #     score += self.rolls[20]
            
        return score

# spare bonus test case
bowling_game = Game()
bowling_game.roll(8)
bowling_game.roll(2)
bowling_game.roll(3)
bowling_game.roll(7)
print(bowling_game.score())

# perfect game of 10 strikes plus 2 bonus rolls in 10th frame
b_300 = Game()
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
b_300.roll(10)
print(b_300.score())

# strike then a normal game should amount to 24 with 3 and 4 adding to the strike score and the addition of 3 and 4 on top of that
strike_normal_mix = Game()
strike_normal_mix.roll(10)
strike_normal_mix.roll(3)
strike_normal_mix.roll(4)
print(strike_normal_mix.score())

# starting out with low scores then seeing the bonus of a strike as well as 2 spares to see the score go up exponentially to 53
strike_spare_mix = Game()
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(1)
strike_spare_mix.roll(10)
strike_spare_mix.roll(7)
strike_spare_mix.roll(3)
strike_spare_mix.roll(5)
strike_spare_mix.roll(5)
print(strike_spare_mix.score())

low_game_high_end = Game()
# 1
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 2
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 3
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 4
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 5
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 6
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 7
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 8
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 9
low_game_high_end.roll(1)
low_game_high_end.roll(1)
# 10
low_game_high_end.roll(10)
low_game_high_end.roll(10)
low_game_high_end.roll(10)
print(low_game_high_end.score())

# pure spare game test case!
spare_game = Game()
for i in range(10):
    spare_game.roll(5)
    spare_game.roll(5)
spare_game.roll(5)
print(spare_game.score())