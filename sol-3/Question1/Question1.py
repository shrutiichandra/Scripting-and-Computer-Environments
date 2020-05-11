import pickle #file dump
import sys #for exit code
import uuid #to generate unique ids
import getpass #to get hidden password
from tabulate import tabulate #for printing table

def CheckIsPid(pid):
    try:
        pickle_off = open("product_details_list.pickle","rb")
        all_products=pickle.load(pickle_off)
        for i in range(len(all_products)):
            if all_products[i][0]==pid:
                return i
        return -1
    except:
        print "No products to show"


class Product:
    temp_pr={}
    def __init__(self,list_of_prod):
        self.id=list_of_prod[0]
        self._name=list_of_prod[1]
        self._group=list_of_prod[2]
        self._subgroup=list_of_prod[3]
        self.price=list_of_prod[4]

    def show(self):
        temp_pr=[self.id,self._name,self._group,self._subgroup,self.price]
        return temp_pr
        
class Admin():
    def __init__(self,list_of_admin):
        self.__id=list_of_admin[0]
        self.__name=list_of_admin[1]
        self._pass=list_of_admin[2]

    def AddAdmin(self,list_of_admin):
        temp_ad.append(list_of_admin)
        pickle_out=open("admin_details_list.pickle","wb")
        pickle.dump(temp_ad,pickle_out)
        pickle_out.close()
      

    def ViewProducts(self):
        try:
           with open('product_details_list.pickle',"r") as f:
                all_list = pickle.load(f)
                table=[]
                headers=['id','Name','Group','SubGroup','Price']
                for i in range(len(all_list)):
                   row=[all_list[i][0],all_list[i][1],all_list[i][2],all_list[i][3],all_list[i][4] ]
                   table.append(row)
                print tabulate(table,headers,tablefmt="orgtbl")
        except:
            print "No Products To show"

    def AddProducts(self,list_of_products):
        try:
            pickle_off = open("product_details_list.pickle","rb")
            all_products=pickle.load(pickle_off)
            pickle_off.close()
            if len(all_products)!=0:
                all_products.append(list_of_products)
                pickle_out=open("product_details_list.pickle","wb")
                pickle.dump(all_products,pickle_out)
                pickle_out.close()              

                print "Added ",list_of_products[1]

        except:
            all_products_new=[]
            all_products_new.append(list_of_products)
            pickle_out=open("product_details_list.pickle","wb")
            pickle.dump(all_products_new,pickle_out)
            pickle_out.close()

            print "Added ",list_of_products[1]
        
    def DeleteProducts(self,id_of_product,index):
        try:
            pickle_off = open("product_details_list.pickle","rb")
            all_products=pickle.load(pickle_off)
            all_products.remove(all_products[index])
            pickle_off.close()

            pickle_out=open("product_details_list.pickle","wb")
            pickle.dump(all_products,pickle_out)
            pickle_out.close()

            print "Deleted!"

        except:
            print "No Products To Delete!"

       

    def ModifyProducts(self,id_of_product,index):
        try:
            ask_admin=raw_input("What do you want to modify?\n1.Name\n2.Group\n3.SubGroup\n4.Price\nq to quit\n.Enter choice: ")
            pickle_off = open("product_details_list.pickle","rb")
            all_products=pickle.load(pickle_off)
            
            
            if ask_admin=='1':
                name_=raw_input("Enter product name: ")
                all_products[index][1]=name_
            elif ask_admin=='2':
                group_=raw_input("Enter group name: ")
                all_products[index][2]=group_
            elif ask_admin=='3':
                subgroup_=raw_input("Enter subgroup name: ")
                all_products[index][3]=subgroup_
            elif ask_admin=='4':
                price_=input("Enter price: ")
                all_products[index][4]=price_
        
            pickle_off.close()

            pickle_out=open("product_details_list.pickle","wb")
            pickle.dump(all_products,pickle_out)
            pickle_out.close()

            print "Modified"
        except:
            print "No Products To Modify"


    def ViewOrderHistory(self):
        
        try:
            pickle_out=open("order_history_list.pickle","rb")
            all_oh=pickle.load(pickle_out)
            pickle_out.close()

            table=[]
            headers=['customer id','items bought','bill']
            
            for i in range(len(all_oh)):
               row=[all_oh[i][0],all_oh[i][1],all_oh[i][2]]
               table.append(row)
            print tabulate(table,headers,tablefmt="orgtbl")

        except:
            print "No orders have been placed"

class Customer:
    cart_list=[]
    def __init__(self,list_of_cust):
        self.__id=list_of_cust[0]
        self._name=list_of_cust[1]
        self._pass=list_of_cust[2]
        self._address=list_of_cust[3]
        self._phno=list_of_cust[4]
        self.buy_list=[]
        self.amount=0

    def BuyNow(self):
        cust_cart=Cart()
        arr=cust_cart.ShowCart(self.__id)
        if arr is None: print "Nothing to show!"

    def ViewProducts(self):
        try:
            with open('product_details_list.pickle',"r") as f:
                all_list = pickle.load(f)
                table=[]
                headers=['id','Name','Group','SubGroup','Price']
                for i in range(len(all_list)):
                    row=[all_list[i][0],all_list[i][1],all_list[i][2],all_list[i][3],all_list[i][4] ]
                    table.append(row)
                print tabulate(table,headers,tablefmt="orgtbl")
        except:
            print "No products to show"
        
    def MakePayment(self):
        
        cust_cart=Cart()
        arr=cust_cart.ShowCart(self.__id)
        
        if arr!=None:
           
            try:
            
                pickle_out=open("pay_details_list.pickle","rb")
                all_list=pickle.load(pickle_out)
                pickle_out.close()
                
                found =0             
                if len(all_list)!=0:
                      
                    for num in range(len(all_list)):
                        
                        if all_list[num][0]==self.__id:
                            found=1
                            payment_new=Payment()
                            payment_new.ShowDetails(self.__id)
                            
                            print "Order Placed!"
                            self.ClearCart()
                if found==0:
                    card_no=input("Enter card_number: ")
                    card_type=raw_input("Enter card type: ")
                    pay_arr=[self.__id,self._name,card_no,card_type]
                    payment_new=Payment()
                    payment_new.StoreDetails(pay_arr)
                    payment_new.ShowDetails(self.__id)
                    print "Order Placed!"
                    self.ClearCart()
            except:
                
                card_no=input("Enter card_number: ")
                card_type=raw_input("Enter card type: ")
                pay_arr=[self.__id,self._name,card_no,card_type]
                payment_new=Payment()
                payment_new.StoreDetails(pay_arr)
                payment_new.ShowDetails(self.__id)
                print "Order Placed!"
                self.ClearCart()
                
        else:
            print "First, order something please!"
            
            

    def AddToCart(self,pr_index):
        pickle_off = open("product_details_list.pickle","rb")
        all_list=pickle.load(pickle_off)
        pickle_off.close()

        item_buy=all_list[pr_index][1]
        self.buy_list.append(item_buy)

        item_price=all_list[pr_index][4]
        self.amount+=int(item_price)

        send_this_to_cart=[self.__id,self.buy_list,self.amount]
        cust_cart=Cart()
        cust_cart.StoreInCart(send_this_to_cart)

    def ClearCart(self):
        
        pickle_off = open("cart_details_list.pickle","rb")
        all_orders=pickle.load(pickle_off)
        
        pickle_off.close()
        temp=[]
        for id in range(len(all_orders)):
            
            if all_orders[id][0]==self.__id:
                
                temp=all_orders[id]
        
                all_orders.remove(all_orders[id])
            
                pickle_out=open("cart_details_list.pickle","wb")
                pickle.dump(all_orders,pickle_out)
                pickle_out.close()

                
                try:
                    
                    pickle_oh=open("order_history_list.pickle","rb")
                    prev_orders=pickle.load(pickle_oh) 
                    pickle_oh.close()

                    if len(prev_orders)>0:
                        prev_orders.append(temp)
                       
                        pickle_oh=open("order_history_list.pickle","wb")
                        pickle.dump(prev_orders,pickle_oh)
                        pickle_oh.close()

                    else:
                        fresh_l=[]
                        fresh_l.append(temp)
                    
                        pickle_oh=open("order_history_list.pickle","wb")
                        pickle.dump(fresh_l,pickle_oh)
                        pickle_oh.close()
                except:
                    first=[]
                    first.append(temp)
                    pickle_oh=open("order_history_list.pickle","wb")
                    pickle.dump(first,pickle_oh)
                    pickle_oh.close()

            print "Cart cleared!"
                    

    
                

class Cart:
    def __init__(self):
        pass

    def StoreInCart(self,cart_list):
        try:
            pickle_out=open("cart_details_list.pickle","rb")
            all_list=pickle.load(pickle_out)
            pickle_out.close()
            if len(all_products)!=0:
                for num in range(len(all_list)):
                    if all_list[num][0]==cart_list[0]:
                        all_list.remove(all_list[num])
                        all_list.append(cart_list)

                        pickle_out=open("cart_details_list.pickle","wb")
                        pickle.dump(all_list,pickle_out)
                        pickle_out.close()


        except:
            #first-time-addition
            all_list_new=[]
            all_list_new.append(cart_list)
            pickle_out=open("cart_details_list.pickle","wb")
            pickle.dump(all_list_new,pickle_out)
            pickle_out.close()

        print "Added successfully!"
        
    def ShowCart(self,c_id):
        try:
            
            pickle_off = open("cart_details_list.pickle","rb")
            all_carts=pickle.load(pickle_off)
    
            for cid in range(len((all_carts))):
                if all_carts[cid][0]==c_id:
                    table=[]
                    headers=['cid','Name','Price']
                    for i in range(len(all_carts)):
                       row=[all_carts[cid][0],all_carts[cid][1],all_carts[cid][2]]
                       table.append(row)
                    print tabulate(table,headers,tablefmt="orgtbl")
                    return all_carts[cid]
        except:
            pass


class Payment:
   
    temp=[]
    def __init__(self):
        pass
    
    def StoreDetails(self,pay_details):
       
        self.temp.append(pay_details)
        pickle_off = open("pay_details_list.pickle","wb")
        pickle.dump(self.temp,pickle_off)
        pickle_off.close()

    def ShowDetails(self,c_id):
        pickle_off = open("pay_details_list.pickle","rb")
        all_det=pickle.load(pickle_off)
        pickle_off.close()
        headers=['Card Number','Card Type']
        for cid in range(len(all_det)):
                if all_det[cid][0]==c_id:
                    row=[[all_det[cid][2],all_det[cid][3]]]
        print tabulate(row,headers,tablefmt="orgtbl")
                    
        
    

if __name__=='__main__':
    print "HELLO"

    cust_list=[]
    admin_list=[]
    product_list=[]
    while (1):
        print "*******************"
        msg="Select your user-category:\n1.Admin\n2.Registered User\n3.Guest\nPress q to quit\n*******************\nYour choice: "
        input_from_user=raw_input(msg)
        if input_from_user=='1':
            print "***ADMIN MODE***"
            
            while(1):
                print "-------------------"
                msg_for_admin="a.Login\nb.Register\nq to quit\n-------------------\nYour choice: "
                input_1=raw_input(msg_for_admin)

                if input_1=='b':
                    username=raw_input("Enter your username: ")
                    paswd=getpass.getpass(prompt='Enter your password? ',stream=None) 
                    msg="Press y to confirm or any other key to exit: "
                    confirm=raw_input(msg)

                    if confirm=='y':                         
                        a_id=str(uuid.uuid4())[:8]

                        temp_list=[a_id,username,paswd]

                        admin_list.append(temp_list)
                        this_admin=Admin(temp_list)
                        this_admin.AddAdmin(temp_list)
                        print "Registered!"

                elif input_1=='a':
                    login_id=raw_input("Enter your username: ")
                    
                    paswd=getpass.getpass(prompt='Enter your password? ',stream=None) 
                    flag=0
                    pickle_off = open("admin_details_list.pickle","rb")
                    all_list=pickle.load(pickle_off)
                    
                    for admin in range(len((all_list))):
                        if all_list[admin][1]==login_id and all_list[admin][2]==paswd:
                            flag=1
                            
                            this_admin=Admin(all_list[admin])
                            print "Login Success"
                            print "Hi, ",login_id            
                            while (1):

                                print "-------------------"
                                msg_for_customer="a.View Products\nb.Add Products\nc.Delete Products\nd.Modify Products\ne.View Order History\nq to quit\n-------------------\nYour choice: "
                                input_1=raw_input(msg_for_customer)

                                if input_1=='a':
                                    print "---PRODUCT LIST---"
                                    this_admin.ViewProducts()

                                elif input_1=='b':
                                    print "---ADD PRODUCT---"
                                    pr_name=raw_input("Enter product name: ")
                                    pr_grp=raw_input("Enter product group: ")
                                    pr_sub=raw_input("Enter product sub group: ")
                                    pr_price=raw_input("Enter product price: ")
                                    p_id=str(uuid.uuid4())[:8]

                                    temp_list=[p_id,pr_name,pr_grp,pr_sub,pr_price]
                

                                    product_list.append(temp_list)

                                    prod_new=Product(temp_list)
                                    this_admin.AddProducts(prod_new.show())

                          
                                elif input_1=='c':
                                    print "---DEL PRODUCT---"
                                    id_to_be_del=raw_input("Enter product id to be deleted: ")
                                    index_del=CheckIsPid(id_to_be_del)
                                    if index_del!=-1:
                                        this_admin.DeleteProducts(id_to_be_del,index_del)
                                    else:
                                        print "Wrong id"
            
                                    
                                elif input_1=='d':
                                    print "---MODIFY PRODUCT---"
                                    id_to_be_mod=raw_input("Enter product id: ")
                                    index_mod=CheckIsPid(id_to_be_mod)
                                    if index_mod!=-1:
                                        this_admin.ModifyProducts(id_to_be_mod,index_mod)
                                    else:
                                        print "Wrong id"

                                elif input_1=='e':
                                    print "---ORDER HISTORY---"
                                    this_admin.ViewOrderHistory()
                                elif input_1=='q':
                                    break

                                else:
                                    print "Wrong Input"

                    if flag==0: print "Invalid Details"
            
                elif input_1=='q':
                    break

                else:
                    print "WRONG INPUT"
            
        elif input_from_user=='2':
            to_buy=[]
            pr_list=[]
            sum=0
            print "***CUSTOMER MODE***"
            login_id=raw_input("Enter your username: ")
            paswd=getpass.getpass(prompt='Enter your password? ',stream=None) 
            flag=0
            pickle_off = open("cust_details_list.pickle","rb")
            all_c_list=pickle.load(pickle_off)
                    
            for customer in range(len(all_c_list)):
                if all_c_list[customer][1]==login_id and all_c_list[customer][2]==paswd:
                    flag=1
                    this_cust=Customer(all_c_list[customer])
                    print "Login Success"
                    print "Hi, ",login_id            
                    while (1):
                        print "-------------------"
                        msg_for_customer="a.View Products\nb.Add to Cart\nc.Buy Products\nd.Make Payment\nq to quit\n-------------------\nYour choice: "
                        input_2=raw_input(msg_for_customer)

                        if input_2=='a':
                            print "---PRODUCT LIST---"
                            this_cust.ViewProducts()
                        elif input_2=='b':
                            print "---ADD TO CART---"
                            msg_to_buy=raw_input("Enter product id: ")

                            index_buy=CheckIsPid(msg_to_buy)
                            if index_buy!=-1:
                                this_cust.AddToCart(index_buy)
                                
                            else:
                                print "Wrong ID"                           

                        elif input_2=='c':
                            print "---BUY NOW---"
                            this_cust.BuyNow()

                        elif input_2=='d':
                            print "---PAY NOW---"
                            this_cust.MakePayment()
                        elif input_2=='q':
                            break

                        else:
                            print "Wrong Input"

            if flag==0: print "Invalid Details"

        elif input_from_user=='3':
            print "***GUEST MODE***"
            while(1):
                print "-------------------"
                msg_for_guest="a.View Products\nb.Register\nq to quit\n-------------------\nYour choice: "
                input_3=raw_input(msg_for_guest)

                if input_3=='a':
                    guest_list=["","","","",""]
                    guest_user=Customer(guest_list)
                    print "---PRODUCT LIST---"
                    guest_user.ViewProducts()

                elif input_3=='b':

                    username=raw_input("Enter your username: ")
                    paswd=getpass.getpass(prompt='Enter your password? ',stream=None)
                    try:
                        phno=input("Enter phone no.: ")
                    except:
                        print "Incorrect phone no!"
                        break
                    addr=raw_input("Enter address: ")

                    msg="Press y to confirm or any other key to exit: "
                    confirm=raw_input(msg)

                    if confirm=='y':
                        c_id=str(uuid.uuid4())[:8]
                        temp_list=[c_id,username,paswd,phno,addr]
                        cust_list.append(temp_list)
                        this_cust=Customer(temp_list)
                        print "Registered!"
                        
                        pickle_out=open("cust_details_list.pickle","wb")
                        pickle.dump(cust_list,pickle_out)
                        pickle_out.close()
                        
                        break
                        
                elif input_3=='q':
                    break

                else:
                    print "WRONG INPUT"
                    
        elif input_from_user=='q':
            sys.exit(0)

        else:
            print "Wrong Input"

