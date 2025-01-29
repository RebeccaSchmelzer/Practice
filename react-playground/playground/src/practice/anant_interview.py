import random
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
        self.frames = {i : [0,0] for i in range(1,11)}
        self.frames[10].append(0)
        self.current_frame = 1
        self.roll_idx = 0
        self.score = 0
        self.strike = False

    
    def roll(self, pins) -> None:
        self.frames[self.current_frame][self.roll_idx] = pins
        if pins == 10:
            if self.strike:
                self.score += 20
            else:
                self.score += 10
                self.strike = True
            self.current_frame += 1
        elif self.roll_idx == 0:
            self.roll_idx = 1 
        else:
            self.current_frame += 1
            self.roll_idx = 0
    def calculate_score(self):
        return self.score


        
    
x = Game()
x.roll(10)
x.roll(10)
x.roll(10)
print(x.frames)
print(x.calculate_score())


