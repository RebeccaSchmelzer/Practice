class Car:
    def __init__(self, make, model) -> None:
        self.make = make
        self.model = model

    def get_make(self):
        return self.make
    
    def get_model(self):
        return self.model
    
    def set_make(self, make):
        self.make = make

    def set_model(self, model):
        self.model = model