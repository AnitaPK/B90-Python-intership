# create calculator 

# Enter choice 
# 1. addition
# 2. subtraction
# 3. Multiplication
# 4. Division
# 5. Exit
def adiition(a,b):
    print("addition is : ", a+b)
def subtraction(a,b):
    print("Subtraction is : ",a-b)
def multiplication(a,b):
    print("Multiplication is : ",a*b)
def division(a,b):
    if(b == 0):
        print("Can not divide by ZERO")
        return
    print("Division is : ", a/b)

while(True):
    print("======CALCULATOR=======")

    print("1. addition")
    print("2. subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")

    choice = int(input("Enter choice : "))

    if(choice == 5):
        print("Thank You...")
        break
    elif(choice == 1):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        adiition(num1,num2)
    elif(choice == 2):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        subtraction(num1,num2)
    elif(choice == 3):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        multiplication(num1, num2)
    elif(choice == 4):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        division(num1,num2)
    else:
        print("Enter correct choice...")
    

1 show details of your system using os module 
 1. display current workink directory 
 2. display all files and folders in that directory 

2 use platform module to display 
    1. Operation system Name
    2. Processor
    3. Python version

3 use the datetime module to create digital Clock 
    display 
        1. Current Date
        2. Current Time 
        3. Current Day


