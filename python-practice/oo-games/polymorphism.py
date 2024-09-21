# Polymorphism Example
class Animal:
    def sound(self):
        return "Animal sound"

class Dog(Animal):
    def sound(self):
        return "Woof!"

class Cat(Animal):
    def sound(self):
        return "Meow!"

def make_sound(animal):
    return animal.sound()

animal = Animal()
print(make_sound(animal))  # Output: Animal sound
dog = Dog()
print(make_sound(dog))  # Output: Woof!
cat = Cat()
print(make_sound(cat))  # Output: Meow!