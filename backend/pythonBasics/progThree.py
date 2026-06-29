# students = ["Rahul", "Shreya","Yogita", "Kinjal"]
# print(students)

# students.append("Anushka")
# print(students)

# students.remove("Rahul")
# print(students)

# for value in students:
#     print(value)

# students[3] = "Nikita"

# print(students)

# # print first element and last element 

# print(students[0])
# print(students[-1])

# # add element but get it from terminal

# stu1 = input("Enter student name : ")
# students.append(stu1)
# print(students)

# colors = []
# for x in range(3):
#     c1 = input("Enter color name")
#     colors.append(c1)

# print(colors)

# numbers = [10,20,30,40,50]

# print(sum(numbers))

# sum1 = 0
# for num in numbers:
#     sum1 = sum1+num

# print(sum1)

# print(max(numbers))

# #find max num from given list numbers
# maxNumber = numbers[0]
# for n in numbers:
#     if n >maxNumber:
#         maxNumber = n

# print(maxNumber)

# numNewList = [10,10,20,30,40,40,40,40] 

# # 40 appeares 4 times 

# getNum = int(input("Enter number for find occurences"))
# count = 0
# for x in numNewList:
#     if(x == getNum):
#         count +=1
    
# print(getNum, "appeares", count, "times")

# forSearch = input("Enter student name for search ")

# # for stud in students:
# #     if(stud == forSearch):
# #         print("Found")
# #         break
# #     else:
# #         print("Not found")

# if forSearch in students:
#     print(forSearch)
# else:
#     print("Not found")


fruits = ("Apple", "Banana","Mango")
for x in fruits:
    print(x)

fruitsList = list(fruits)
print(fruits)
print(fruitsList)

newFruitTuple = tuple(fruitsList)
print(newFruitTuple)

n1 = (10,20)
n2 = (30,40)

n3 = n1+n2
print(n3) 

print(len(n3))

n4 = (1,2,3)
n5 = n4*3 

# reverse tuple 

num6 = (10,20,30,40,50)

revNum6 = num6[::-1]

print(revNum6)

# count positive numbers and negetive numbers from given tuple 
num7 = (3,-6,9,5,-4,-3,8,-1,-9,4)
positiveNum = 0
negetiveNum = 0
for num in num7:
    if(num > 0):
        positiveNum +=1
    else:
        negetiveNum +=1
