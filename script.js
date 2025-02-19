const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 
'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 
'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 
'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 
'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 
'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 
'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 
'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 
'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 
'Tamarillo', 'Tamarind', 'Yuzu']

function search(str) {
	let results = fruit.filter((f) => {							
		return f.toLowerCase().includes(str.toLowerCase());		
	});
	showSuggestions(results, str);								
};


function searchHandler(e) {										
	search(input.value);										
}

function showSuggestions(results, inputVal) {				
	const listed = results.map((result) =>{				
			if(inputVal !== ''){								
			return "<li>" + result + "</li>";					
			}
		});
	suggestions.innerHTML = "<ul>" + listed.join('') + "</ul>";
};

function useSuggestion(e) {
	input.value = e.target.innerText;							
	suggestions.innerHTML = '';									
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('mouseup', useSuggestion); 
