class Animal:
    def __init__(self, species):
        self.species = species

    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Woof!"

class Cat(Animal):
    def sound(self):
        return "Meow!"

dog = Dog("Canine")
print(dog.sound())  # Output: Woof!
cat = Cat("Feline")
print(cat.sound())  # Output: Meow!