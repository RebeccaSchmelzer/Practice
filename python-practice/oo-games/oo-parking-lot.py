class Vehicle:
    def __init__(self, size) -> None:
        self.size = size
    
class Motorcycle(Vehicle):
    def __init__(self) -> None:
        super().__init__("small")

class Car(Vehicle):
    def __init__(self) -> None:
        super().__init__("medium")

class Bus(Vehicle):
    def __init__(self) -> None:
        super().__init__("large")

class ParkingSpot:
    def __init__(self, size) -> None:
        self.size = size
        self.is_taken = False

    def park(self, vehicle):
        if not self.is_taken and self.can_fit(vehicle):
            self.is_taken = True
            return True
        else:
            return False
    
    def leave(self):
        self.is_taken = False
    
    def can_fit(self, vehicle):
        # Logic to check if vehicle fits in the spot
        size_order = {'small': 1, 'medium': 2, 'large': 3}
        return size_order[self.size] >= size_order[vehicle.size]
    
class ParkingLot:
    def __init__(self, small_spots, medium_spots, large_spots) -> None:
        self.spots = {
            'small': [ParkingSpot('small') for _ in range(small_spots)],
            'medium': [ParkingSpot('medium') for _ in range(medium_spots)],
            'large': [ParkingSpot('large') for _ in range(large_spots)]
        }

    def park_vehicle(self, vehicle):
        for size, spots in self.spots.items():
            for spot in spots:
                if spot.can_fit(vehicle) and spot.park(vehicle):
                    return True
        return False
    
    def remove_vehicle(self, vehicle):
        for spot in self.spots[vehicle.size]:
            if spot.is_taken:
                spot.leave()
                return True
        return False
    

    # Example usage:
lot = ParkingLot(5, 5, 5)  # 5 small, 5 medium, 5 large spots
car = Car()
motorcycle = Motorcycle()
bus = Bus()

lot.park_vehicle(car)  # Park a car
lot.park_vehicle(motorcycle)  # Park a motorcycle
lot.park_vehicle(bus)  # Park a bus