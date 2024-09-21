from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2
    
class Rectangle(Shape):
    def __init__(self, length, width) -> None:
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width
    

circle = Circle(5)
print(circle.area())  # Output: 78.5
rectangle = Rectangle(4, 6)
print(rectangle.area())  # Output: 24