
//first order

const coffee1 = {
    customer_name : {
      firstname : 'Misha ', 
      lastname  : 'Wali'
    }, 
    type_of_drink: ["latte"],
    size_of_coffee: ["tall"],
    drizzle: ["yes"],
    whipped_cream: ["yes"],
    sweetener : ["yes"],

    order1: function () {

        if (this.drizzle == "yes") {
            alert("coffee includes drizzle");
        }
        else{}
        if(this.whipped_cream == "yes"){
            alert( "coffee includes 'whippped cream'");
            
        }
        else{}
        if(this.sweetener == "yes"){
            alert("coffee includes 'sweetener'");
            

        }
        
        alert( this.customer_name.firstname+"'s choice of coffee " + " '"+this.type_of_drink + "'"
                    + " with " + "'"+ this.size_of_coffee +"'"+ " size includes following: \n" 
                    + "drizzle: " +this.drizzle + "\n"
                    + "whipped_cream: " +this.whipped_cream + "\n"
                    + "sweetener: " +this.sweetener);
    }
  };

  // second order

  const coffee2 = {
    customer_name : {
      firstname : 'Jessica', 
      lastname  : 'Gilfillan'
    }, 
    type_of_drink: ["expresso"],
    size_of_coffee: ["short"],
    drizzle: ["yes"],
    whipped_cream: ["yes"],
    sweetener : ["yes"],
    cold_foam: ["yes"],
    dairy_milk: ["yes"],

    order2: function () {

        if (this.drizzle == "yes") {
            alert("coffee includes drizzle");
        }
        else{}
        if(this.whipped_cream == "yes"){
            alert( "coffee includes 'whippped cream'");
            
        }
        else{}
        if(this.sweetener == "yes"){
            alert("coffee includes 'sweetener'");
            

        }
        else{}
        if(this.cold_foam == "yes"){
            alert("coffee includes 'cold_foam'");
        }

        else{}
        if(this.dairy_milk == "yes"){
            alert("coffee includes 'dairy_milk'");
        }
    
            alert( this.customer_name.firstname+"'s choice of coffee " + " '"+this.type_of_drink + "'"
                    + " with " + "'"+ this.size_of_coffee +"'"+ " size includes following: \n" 
                    + "drizzle: " +this.drizzle + "\n"
                    + "whipped_cream: " +this.whipped_cream + "\n"
                    + "sweetener: " +this.sweetener + "\n"
                    + "cold_foam: " +this.cold_foam + "\n"
                    + "dairy_milk: " +this.dairy_milk);
    }
  };

coffee1.order1();
coffee2.order2(); 