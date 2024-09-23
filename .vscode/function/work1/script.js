function calculateBonus() {
    
 salary = parseFloat(document.getElementById("salary").value);
 yearsOfService = parseInt(document.getElementById("yearsOfService").value);
 bonus = 0;

   
    if (yearsOfService >= 5) {
        bonus = salary * 0.05;  
    }
    document.getElementById("result").textContent = "Bonus Amount: $" + bonus.toFixed(2);
}