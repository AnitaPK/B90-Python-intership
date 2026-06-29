def addStudent():
    name = input("Enter name of student : ")

    with open("students.txt", "a") as file:
        file.write(name + "\n")

    print("Students added successfully... ")

def showStudents():
    try:
        with open("students.txt" ,"r") as file:
            students = file.readlines()

        if len(students) == 0:
            print("Student not found")
        
        else:
            print("++++++ Student list+++++++++")
            for i, stud in enumerate(students, start=1):
                print(f"{i} {stud.strip()}")

    except FileNotFoundError:
        print("File does not exists!!! ")



while True:

    print("=======Student Manager=======")
    print("1. Add New Student")
    print("2. Show Students List")
    # add one more menu for search student found / not found
    print("3. Exit")

    choice = input("Enter choice : ")

    if(choice == "3"):
        print("Thank You....")
        break
    elif choice == "1":
        addStudent()
    elif choice == "2":
        showStudents()
    else:
        print("Enter correct choice !!! ")