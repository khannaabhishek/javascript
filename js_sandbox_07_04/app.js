document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(e){

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function(){
    if(this.status === 200){
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li><b>ID:</b> ${customer.id}</li>
          <li><b>Name:</b> ${customer.name}</li>
          <li><b>Company:</b> ${customer.company}</li>
          <li><b>Phone:</b> ${customer.phone}</li>
        </ul>
      `;
      document.getElementById('customer').innerHTML=output;
    }
  }

  xhr.send();
};


function loadCustomers(e){

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function(){

    if(this.status === 200){
      //console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output=`<table><thead><tr>
                  <td><b>ID</b></td>
                  <td><b>Name</b></td>
                  <td><b>Company</b></td>
                  <td><b>Phone</b></td>
                  </tr></thead>`;
      customers.forEach(function(customer){

        output += `
        <tr>
          <td>${customer.id}</td>
          <td> ${customer.name}</td>
          <td> ${customer.company}</td>
          <td> ${customer.phone}</td>          

        </tr>
      `;        
      });
      output +='</table>'
      document.getElementById('customers').innerHTML=output;
      console.log(customers[0].name);
    }
  };
  xhr.send();
};
