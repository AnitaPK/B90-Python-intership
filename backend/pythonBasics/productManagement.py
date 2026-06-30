class Product:
    def __init__ (self,id, title, price,quantity):
        self.id = id
        self.title = title
        self.price = price
        self.quantity = quantity

    def addProduct(self):
        print(f"Product '{self.title}' added successfully..")

    
    def displayProduct(self):
        print("+++++++++++++++")
        print("Product ID : ", self.id)
        print("Product Title: ",self.title)
        print("Product Price: ", self.price)
        print("Product Quatity: ", self.quantity)
        print("+++++++++++++++")

p1 = Product(101, "laptop", 111111, 5)
# p1.addProduct()
p2 = Product(102,"Mobile", 9999,10)
# p2.addProduct()

productsList = []
productsList.append(p1)
productsList.append(p2)
p3 = Product(103,"Smart Watch",899,50)
productsList.append(p3)



NoOfProducts = int(input("Enter number of products to add "))

for i in range(1,NoOfProducts+1):
    print("Enter values for product id : ", i)
    p_title = input("Enter product title : ")
    p_price = int(input("Enter product price : "))
    p_quantity = int(input("Enter quantity of product : "))
    p = Product(i, p_title, p_price, p_quantity)
    productsList.append(p)

print("======== Display All Products ==========")
for p in productsList:
    p.displayProduct()

# search product by ID 

searchID = int(input("Enter id for search ")) 
print("======== Search Product ==========")

found = False
for prod in productsList:
    if(prod.id == searchID):
        found = True
        prod.displayProduct()
        break
if(not found):
    print("Product Not found")

# update quantity of a given product take input id 
# check for exixtence of product 
# take input for quantity 
# update the product quantity

getID = int(input("Enter Id of a prodcut whose quantity will update "))
updateFlag = False
for p in productsList:
    if(p.id == getID):
        updateFlag = True
        qua = int(input("Enter quatity : "))
        p.quantity = p.quantity + qua
        print("==== after update quantity =====")
        p.displayProduct()
if(not updateFlag):
    print("Product not found")


# get i d from user for delete 
# id matches delte object from a list remove()
# display all products

getID = int(input("Enter Id of a prodcut whose quantity will update "))
updateFlag = False
for p in productsList:
    if(p.id == getID):
        updateFlag = True
        productsList.remove(p)
        print("==== Product delected successfully =====")
if(not updateFlag):
    print("Product not found")       
        