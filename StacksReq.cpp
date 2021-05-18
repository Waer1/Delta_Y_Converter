#include <iostream>

using namespace std;

template<typename T>
class ArrayStack
{
private:
	T* items;		// Array of stack items
	int      top;                   // Index to top of stack
	const int STACK_SIZE;

public:

	ArrayStack(int MaxSize) : STACK_SIZE(MaxSize)
	{
		items = new T[STACK_SIZE];
		top = -1;
	}  // end default constructor

	//Function getCapacity() returns the stack max size
	//added for array implementaion only
	int getCapacity()
	{
		return STACK_SIZE;
	}

	bool isEmpty() const
	{
		return top == -1;
	}  // end isEmpty

	bool push(const T& newEntry)
	{
		if (top == STACK_SIZE - 1) return false;	//Stack is FULL

		top++;
		items[top] = newEntry;
		return true;
	}  // end push

	bool pop(T& TopEntry)
	{
		if (isEmpty()) return false;

		TopEntry = items[top];
		top--;
		return true;
	}  // end pop

	bool peek(T& TopEntry) const
	{
		if (isEmpty()) return false;

		TopEntry = items[top];
		return true;
	}  // end peek

	   //Destructor
	~ArrayStack()
	{
		delete[]items;
	}

	//Copy constructor
	ArrayStack(const ArrayStack<T>& S) :STACK_SIZE(S.STACK_SIZE)
	{
		items = new T[STACK_SIZE];
		for (int i = 0; i <= S.top; i++)
			items[i] = S.items[i];
		top = S.top;
	}

	void printStack() const
	{
		for (int i = 0; i <= top; i++)
		{
			cout << items[i];
		}
	}

}; // end ArrayStack

void replaceGuards(ArrayStack<char>& S) {
	// TODO: Implement this function (This is the only place you should modify)
	ArrayStack<char>  stack(100);
	char temp;
	while (!S.isEmpty())
	{
		S.pop(temp);
		stack.push(temp);
	}
	string input;
	while (!stack.isEmpty())
	{
		stack.pop(temp);
		input.push_back(temp);
	}
	string ans = "";
	int startIndex = 0;
	for (int i = 0; i < input.length()  ; i++) {
		char res = input[i];
		if (res == '[') {
			stack.push('[');
		}
		else {
			
			if (stack.peek(temp)&& temp == '[') {
				stack.pop(temp);
				if ( stack.isEmpty() ) {
					ans +=  "A" + input.substr(startIndex + 1 , i - (startIndex) - 1  ) + "A";
					startIndex = i +1 ;
				}
			}
		
		}

	}
	for each (char x in ans)
	{
		S.push(x);
	}
}


	//[ [ ] [ ] ] [ ] [ [ [ ] ] ] e



int main() {
	try{
		// Declare the input stack assuming max input count is 100
		ArrayStack<char> S(100);
		
		// Read char inputs - character 'e' marks the end of the input
		char x;
		cin >> x;
		while (x != 'e') {
			S.push(x);
			cin >> x;
		}
	
		// Call replaceGuards
		replaceGuards(S);

		//Print the stack after modification
		S.printStack();
		
	} catch(...){
		cout<<"Exception";
	}
	
	return 0;
}
