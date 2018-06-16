class Chicken:
    total_eggs = 0

    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.eggs = 0

    def lay_egg(self):
        Chicken.total_eggs += 1
        self.eggs += 1
        return self.eggs