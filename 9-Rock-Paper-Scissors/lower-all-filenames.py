import os

for file in os.listdir():
    os.rename(file, file.lower())