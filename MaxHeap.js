/**
  * Max MaxHeap
 */

function MaxHeap(){
	this._arr = [];
}

MaxHeap.prototype.peek = function(){
	return this._arr[0];
};

//removeMax
MaxHeap.prototype.pop = function(){
	var val = this._arr[0],
		lastIndex = this._arr.length - 1;

	//remove the last item, and place it at the top.
	//this._arr[0] = this.arr.pop();
	this._arr[0] = this._arr.splice(lastIndex,1)[0];

	this._siftDown(0);

	return val;
};

MaxHeap.prototype.insert = function(num){
	this._arr.push(num);
	this._siftUp(this._arr.length-1);
};

/***************** helpers! *****************/

MaxHeap.prototype._siftUp = function(index){
	var currValue = this._arr[index],
		parentIndex = this._getParentIndex(index),
		parentValue = this._arr[parentIndex];

	if(currValue > parentValue){
		this._swap(index, parentIndex);
		this._siftUp(parentIndex);
	}
	
};

MaxHeap.prototype._siftDown = function(index){
	var currValue = this._arr[index],
		leftChildIndex = this._getLeftChildIndex(index),
		rightChildIndex = this._getRightChildIndex(index);

	var greatestChildIndex = this._greatestChildIndex(leftChildIndex, rightChildIndex);

	if(greatestChildIndex !== null){
		var greatestChildValue = this._arr[greatestChildIndex];

		if(greatestChildValue > currValue){
			this._swap(index, greatestChildIndex);
			this._siftDown(greatestChildIndex);
		}	
	}	
};

MaxHeap.prototype._greatestChildIndex = function(leftChildIndex, rightChildIndex){
	var lastIndex = this._arr.length - 1,
		leftChildValue = null,
		rightChildValue = null;

	if(leftChildIndex <= lastIndex){
		leftChildValue = this._arr[leftChildIndex];
	}

	if(rightChildIndex <= lastIndex){
		rightChildValue = this._arr[rightChildIndex];
	}

	if(leftChildValue === null && rightChildValue === null){
		//there are no children.
		return null;
	}
	else if(leftChildValue !== null && rightChildValue !== null){
		if(leftChildValue > rightChildValue){
			return leftChildIndex;
		}
		else{
			return rightChildIndex;
		}
	}
	else if(leftChildValue !== null){
		return leftChildIndex;
	}
	else {
		return rightChildIndex;
	}
};

MaxHeap.prototype._swap = function(index1, index2){
	var tmp = this._arr[index1];
	this._arr[index1] = this._arr[index2];
	this._arr[index2] = tmp;
};

MaxHeap.prototype._getParentIndex = function(index){
	if(index === 0){
		return 0;
	} 
	else{ 
		return Math.floor( (index - 1) / 2);
	}
};

MaxHeap.prototype._getLeftChildIndex = function(index){
	return index * 2 + 1;	
};

MaxHeap.prototype._getRightChildIndex = function(index){
	return index * 2 + 2;	
};


var heap = new MaxHeap();
heap.insert(5);
heap.insert(3);
heap.insert(12);
heap.insert(1);
heap.insert(7);

console.log("pop", heap.pop());
console.log("pop", heap.pop());
console.log("pop", heap.pop());
console.log("pop", heap.pop());
console.log("pop", heap.pop());


