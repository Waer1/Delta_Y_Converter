
// PLEASE READ THE ( TODO ) COMMENTS

#include <iostream>
#include <queue>
using namespace std;

// ================== THE NODE CLASS ======================

class Node
{
private:
	int data;
	Node *left;
	Node *right;
public:
	Node(int val);
	void setdata(int d);
	int getdata();
	void setright(Node* p);
	Node*& getright();
	void setleft(Node* p);	
	Node*& getleft();

};

Node::Node(int val)
{
	data = val;
	left = right = nullptr;
}

void Node::setdata(int d)
{
	data = d;
}
int Node::getdata()
{
	return data;
}
void Node::setleft(Node* p)
{
	left = p;
}
Node*& Node::getleft()
{
	return left;
}
void Node::setright(Node* p)
{
	right = p;
}
Node*& Node::getright()
{
	return right;
}

// ================== THE BINARY SEARCH TREE CLASS ======================

class BSTree
{
private:
	Node* root;

	// Utility Functions - Recursive Functions --------------------------

	static void rec_insertBST(Node *& subRoot, int key);
	static void rec_destroy_tree(Node *& subRoot);

	// TODO: HERE, ADD THE UTILITY FUNCTION(S) THAT YOU NEED

public:
	BSTree(void);
	~BSTree(void);

	// Public Functions --------------------------

	void insertBST(int key); 
	void destroy_tree(); 

	// HERE IS THE REQUIRED PUBLIC FUNCTION
	void leftRightSummation(); // NOTE: DON'T CHANGE THE SIGNATURE OF THIS FUNCTION

};

// Utility Functions - Recursive Functions --------------------------

void BSTree::rec_insertBST(Node *& subRoot, int key)
{
	if (subRoot == nullptr)
		subRoot = new Node(key); 
	else if (subRoot->getdata() < key)
	{
		rec_insertBST(subRoot->getright(), key);  
	}
	else
	{
		rec_insertBST(subRoot->getleft(), key); 
	}
}

void BSTree::rec_destroy_tree(Node *& subRoot)
{
	if (subRoot != nullptr)
	{
		rec_destroy_tree(subRoot->getleft());

		rec_destroy_tree(subRoot->getright());

		delete subRoot;
		subRoot = nullptr; 
	}
}

// TODO: HERE, ADD THE IMPLEMENTATION OF THE UTILITY FUNCTION(S) THAT YOU NEED


// Public Functions ---------------------------------

BSTree::BSTree()
{
	root = nullptr;
}

BSTree::~BSTree()
{
	destroy_tree();
}

void BSTree::insertBST(int key)
{
	rec_insertBST(root, key);
}

void BSTree::destroy_tree() 
{
	rec_destroy_tree(root); 
}

void BSTree::leftRightSummation()
{
	// TODO: ADD YOUR CODE OF THE PUBLIC FUNCTION HERE

	int cnt = 0;
	if (root == nullptr)
		cout << "NULL tree";

	queue<Node*> curlevel;

	curlevel.push(root);

	while (!curlevel.empty())
	{
		int size = curlevel.size();
		int n = size;
		int sum = 0;
		cnt = 0;

		while (n--)
		{
			Node* node = curlevel.front();
			curlevel.pop();

			if (n == size - 1 || n == 0) {
				cout << node->getdata() << " ";
				cnt++;
				sum += node->getdata();
			}

			if (root->getdata() == node->getdata())
				cout << root->getdata() << " " << (root->getdata() * 2) << " ";
			if (cnt == 2)
				cout << sum << " ";

			if (node->getleft() != nullptr)
				curlevel.push(node->getleft());

			if (node->getright() != nullptr)
				curlevel.push(node->getright());

		}


	}



}

// ================== THE MAIN FUNCTION ======================

// NOTE: THE MAIN IS TOTALLY DONE FOR YOU
int main()
{
	try {

		BSTree bst;

		// Read the elements of the tree (-1 indicates end of the tree)
		int val;
		cin >> val;
		while (val != -1)
		{
			bst.insertBST(val);
			cin >> val;
		}

		// Call the required public function
		bst.leftRightSummation(); // the function should print inside it, so no needed modifications in the main function

	} catch(...){
		cout<<"Exception";
	}

	return 0;
}
