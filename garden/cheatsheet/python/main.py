"""
Multiline comment / docstring, ''' also works
"""


def main():
    hello()
    hello("Joe")


def hello(to_whom: str = "World"):
    print("Hello", to_whom + "!")


main()  # Single-line comment
