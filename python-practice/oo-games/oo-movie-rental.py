from datetime import datetime, timedelta


class Movie:
    def __init__(self, title, rental_cost) -> None:
        self.title = title
        self.rental_cost = rental_cost

class Rental:
    def __init__(self, movie, rental_days):
        self.movie = movie
        self.rental_date = datetime.now()
        self.due_date = self.rental_date + timedelta(days=rental_days)

    def calculate_late_fee(self):
        today = datetime.now()
        if today > self.due_date:
            days_late = (today - self.due_date).days
            return days_late * 1.5  # Late fee is $1.5 per day
        return 0

class Customer:
    def __init__(self, name):
        self.name = name
        self.rentals = []

    def rent_movie(self, movie, rental_days):
        rental = Rental(movie, rental_days)
        self.rentals.append(rental)

    def return_movie(self, movie):
        for rental in self.rentals:
            if rental.movie == movie:
                late_fee = rental.calculate_late_fee()
                self.rentals.remove(rental)
                return f"Returned {movie.title}. Late fee: ${late_fee}"
        return "Movie not found"

# Example usage:
customer = Customer("Alice")
movie = Movie("Inception", 3.99)
customer.rent_movie(movie, 3)  # Rent for 3 days
print(customer.return_movie(movie))  # Return the movie and calculate any late fee