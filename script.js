   function CalculateTip()
        {
            let amount = parseFloat(document.getElementById('amount').value) || 0 ;
            let percentage = parseFloat(document.getElementById('percentage').value) || 0 ;

            // taking the solution 
         let c  = amount * (percentage / 100);
          
         // result 
         document.getElementById('result').textContent = c;
        }
