 document.getElementById('btnEnviar').addEventListener('click', function(){
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const num3 = parseFloat(document.getElementById('num3').value);
            
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                alert('Por favor, ingresa tres números válidos.');
                return;
            }
            
            if (num1 === num2 && num2 === num3) {
                console.log('¡Números iguales!');
                document.getElementById('resultado').textContent = '¡Tus números son iguales!';
                alert('¡Tus números son iguales!');
                return; 
            }
            
            const numeros = [num1, num2, num3];
            numeros.sort((a, b) => b - a);
            
            console.log(`Ordenados: ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`);
            document.getElementById('resultado').textContent = `Orden de mayor a menor: ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`;
            alert(`¡Ordenados! ${numeros[0]} > ${numeros[1]} > ${numeros[2]}`);
        });