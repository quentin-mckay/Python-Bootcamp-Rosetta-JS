artist = {
    "first": "Neil",
    "last": "Young",
}

# using format
full_name = "{} {}".format(artist["first"], artist["last"])

# using f-strings
full_name = f"{artist['first']} {artist['last']}"