
export default function(state=null,action){

	switch(action.type){
		case 'BOOK_SELECTED':
				return action.payload;
	}

	return state;
}

//redux doesn't allow to return undefined