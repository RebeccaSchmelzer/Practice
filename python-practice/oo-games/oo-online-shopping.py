class Product:
    def __init__(self, name, price, discount = 0) -> None:
        self.name = name
        self.price = price
        self.discount = discount

    def get_final_price(self):
        return self.price - (self.price * self.discount)

class ShoppingCart:
    def __init__(self) -> None:
        self.items = []

    def add_item(self, item):
        self.items.append(item)
    
    def remove_item(self, item):
        self.items.remove(item)
    
    def calculate_total(self):
        total = 0
        for item in self.items:
            total += item.get_final_price()
        return total
    
class Order:
    def __init__(self, cart) -> None:
        self.cart = cart
        self.is_placed = False

    def place_order(self):
        total = self.cart.calculate_total()
        self.is_placed = True
        return f"Order placed! Total: ${total}"
    

cart = ShoppingCart()
apple = Product("Apple", 1.0)
banana = Product("Banana", 0.5, 0.1)  # 10% discount on bananas
cart.add_item(apple)
cart.add_item(banana)
order = Order(cart)
print(order.place_order())